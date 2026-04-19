'use client'

import { useEffect } from 'react'

const RELOAD_GUARD_KEY = 'bb_chunk_reload_at'
const RELOAD_WINDOW_MS = 20_000

const isChunkLoadIssue = (message: string) => {
  const lowered = message.toLowerCase()
  return (
    lowered.includes('loading chunk') ||
    lowered.includes('chunkloaderror') ||
    lowered.includes('failed to fetch dynamically imported module') ||
    lowered.includes('cannot find module')
  )
}

const shouldReloadNow = () => {
  try {
    const previous = sessionStorage.getItem(RELOAD_GUARD_KEY)
    const now = Date.now()

    if (!previous) {
      sessionStorage.setItem(RELOAD_GUARD_KEY, String(now))
      return true
    }

    const previousTs = Number(previous)
    if (Number.isFinite(previousTs) && now - previousTs > RELOAD_WINDOW_MS) {
      sessionStorage.setItem(RELOAD_GUARD_KEY, String(now))
      return true
    }

    return false
  } catch {
    return false
  }
}

export default function ChunkLoadRecovery() {
  useEffect(() => {
    const reloadIfChunkError = (message: string) => {
      if (!message || !isChunkLoadIssue(message)) return
      if (shouldReloadNow()) {
        window.location.reload()
      }
    }

    const onError = (event: ErrorEvent) => {
      const message = event.message || String(event.error?.message || '')
      reloadIfChunkError(message)
    }

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason
      const message =
        typeof reason === 'string'
          ? reason
          : String(reason?.message || reason || '')
      reloadIfChunkError(message)
    }

    window.addEventListener('error', onError)
    window.addEventListener('unhandledrejection', onUnhandledRejection)

    return () => {
      window.removeEventListener('error', onError)
      window.removeEventListener('unhandledrejection', onUnhandledRejection)
    }
  }, [])

  return null
}
