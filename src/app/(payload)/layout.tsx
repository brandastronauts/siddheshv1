import type { ReactNode } from 'react'
import config from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout, metadata } from '@payloadcms/next/layouts'
import { importMap } from './admin/importMap.js'
import { serverFunction } from './serverFunctions'

export { metadata }

export default function Layout({ children }: { children: ReactNode }) {
  return RootLayout({
    children,
    config,
    importMap,
    serverFunction,
  })
}

