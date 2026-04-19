import { rm } from 'node:fs/promises'
import { resolve } from 'node:path'

const root = process.cwd()
const nextDir = resolve(root, '.next')

try {
  await rm(nextDir, { recursive: true, force: true, maxRetries: 2, retryDelay: 100 })
  console.log('[predev] Cleared .next cache directory')
} catch (error) {
  console.log('[predev] Could not clear .next cache directory:', error?.message || error)
}
