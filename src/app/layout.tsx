import type { Metadata } from 'next'
import { Providers } from './providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollToTop from '@/components/ScrollToTop'
import ChunkLoadRecovery from '@/components/ChunkLoadRecovery'
import '../index.css'

const BASE_URL = 'https://research.blueblocks.in'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Blue Blocks Micro Research Institute',
    template: '%s | Blue Blocks Micro Research Institute',
  },
  description:
    'A longitudinal research institute studying innovation, Montessori development, and human potential through continuous observation from birth to adulthood.',
  openGraph: {
    siteName: 'Blue Blocks Montessori School',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/images/og-home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/manrope-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/manrope-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/fraunces-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <ChunkLoadRecovery />
            <ScrollToTop />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
