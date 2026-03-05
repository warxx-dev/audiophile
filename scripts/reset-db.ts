import { createClient } from '@libsql/client'
import * as dotenv from 'dotenv'

dotenv.config()

const tables = [
  'payload_preferences_rels',
  'payload_locked_documents_rels',
  'payload_locked_documents',
  'payload_preferences',
  'payload_kv',
  'users_sessions',
  'users',
  'media',
  'payload_migrations',
]

async function resetDatabase() {
  const client = createClient({
    url: process.env.DATABASE_URI || '',
    authToken: process.env.DATABASE_TOKEN || '',
  })

  console.log('🗑️  Dropping all tables...')

  for (const table of tables) {
    try {
      await client.execute(`DROP TABLE IF EXISTS "${table}"`)
      console.log(`✅ Dropped table: ${table}`)
    } catch (error) {
      console.log(`⚠️  Could not drop ${table}:`, error)
    }
  }

  console.log('\n✨ Database reset complete!')
  console.log('Run "npm run dev" to recreate tables.')

  process.exit(0)
}

resetDatabase().catch((error) => {
  console.error('❌ Error resetting database:', error)
  process.exit(1)
})
