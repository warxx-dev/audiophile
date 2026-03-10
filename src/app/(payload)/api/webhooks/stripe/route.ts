import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'
// import { getPayload } from 'payload'
// import config from '@payload-config'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: '2026-02-25.clover' })

export async function POST(req: Request) {
  const body = await req.text()
  const signature = (await headers()).get('stripe-signature')!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch (err: any) {
    return NextResponse.json({ error: 'Webhook Error' }, { status: 400 })
  }

  //   const payload = await getPayload({ config })

  // Solo nos importa cuando el pago es exitoso
  if (event.type === 'checkout.session.completed') {
    // const session = event.data.object as Stripe.Checkout.Session

    // // 1. Guardamos la orden en Turso via Payload
    // await payload.create({
    //   collection: 'orders',
    //   data: {
    //     stripeId: session.id,
    //     email: session.customer_details?.email || 'unknown',
    //     total: session.amount_total ? session.amount_total / 100 : 0,
    //     items: JSON.parse(session.metadata?.cart || '[]'),
    //     status: 'paid',
    //   },
    // })

    console.log('✅ Orden guardada en Turso exitosamente')
  }

  return NextResponse.json({ received: true })
}
