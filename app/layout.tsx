import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default: 'Hadrons | Stavební práce a rekonstrukce Praha',
    template: '%s | Hadrons'
  },
  description: 'Kompletní stavební a elektromontážní práce v Praze a okolí. Rekonstrukce bytů, domů, komerčních prostor. Elektroinstalace, sádrokartony, zednické práce. Od roku 2020.',
  keywords: ['rekonstrukce', 'stavební práce', 'elektroinstalace', 'sádrokartony', 'zednické práce', 'Praha', 'koupelny', 'kuchyně', 'bytová jádra'],
  authors: [{ name: 'Hadrons s.r.o.' }],
  creator: 'Hadrons s.r.o.',
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://hadrons.cz',
    siteName: 'Hadrons',
    title: 'Hadrons | Stavební práce a rekonstrukce Praha',
    description: 'Kompletní stavební a elektromontážní práce v Praze a okolí. Rekonstrukce bytů, domů, komerčních prostor.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hadrons | Stavební práce a rekonstrukce Praha',
    description: 'Kompletní stavební a elektromontážní práce v Praze a okolí.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a18' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="cs" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
