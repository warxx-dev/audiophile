import Link from 'next/link'

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-green-600">¡Gracias por tu compra!</h1>
      <p className="mt-4 text-gray-600">Hemos recibido tu pago y estamos procesando tu pedido.</p>
      <Link href="/" className="mt-8 px-6 py-2 bg-blue-600 text-white rounded">
        Volver al inicio
      </Link>
    </div>
  )
}
