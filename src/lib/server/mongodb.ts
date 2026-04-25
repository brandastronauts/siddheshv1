/**
 * Singleton MongoDB client for direct queries outside of Payload CMS.
 * Uses global caching so Next.js hot-reload (dev) and Vercel serverless
 * cold starts don't open unbounded connection pools.
 *
 * Usage:
 *   import clientPromise from '@/lib/server/mongodb'
 *   const client = await clientPromise
 *   const db = client.db(process.env.MONGODB_DB)
 */

import { MongoClient, type MongoClientOptions } from 'mongodb'

const uri = process.env.DATABASE_URL
const dbName = process.env.MONGODB_DB || 'blueblocks_payload'

if (!uri) {
  throw new Error(
    'DATABASE_URL environment variable is not defined. ' +
    'Add it to .env.local for local dev or to Vercel environment variables for production.'
  )
}

const options: MongoClientOptions = {
  // Keep pool small for serverless — each function invocation may spin up its own instance
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 30000,
}

// Global declaration so the cached promise survives Next.js hot-reload in dev.
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

let clientPromise: Promise<MongoClient>

if (process.env.NODE_ENV === 'development') {
  // In development, reuse the cached promise across module reloads.
  if (!global._mongoClientPromise) {
    const client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  // In production each serverless invocation keeps its own client.
  const client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise

/** Convenience helper — returns the default database instance. */
export async function getDb(database = dbName) {
  const client = await clientPromise
  return client.db(database)
}
