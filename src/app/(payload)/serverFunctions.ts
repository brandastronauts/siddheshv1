'use server'
import { handleServerFunctions } from '@payloadcms/next/layouts'

export async function serverFunction(...args: Parameters<typeof handleServerFunctions>) {
  return handleServerFunctions(...args)
}
