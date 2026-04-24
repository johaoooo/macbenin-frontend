import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'AFI Collection - Maison Afi Collection | Sacs Macramés & Formations Artisanales',
  description: 'Découvrez les sacs macramés AFISAC et les tenues traditionnelles AFI COLLECTION. Formations en couture, coiffure et tissage au Bénin.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
