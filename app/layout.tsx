import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Preferred Roofing & Exteriors, LLC | Top-Rated Roofing Contractor in Atlanta, GA',
  description: 'Atlanta, Georgia\'s trusted roofing experts. 10+ years of experience in roof replacement, repair, inspections, gutters, and siding. Licensed, insured, and committed to quality. Free estimates!',
  keywords: 'roofing contractor Atlanta GA, roof replacement, roof repair, gutter installation, siding contractor, emergency roofing, Atlanta Georgia roofer, Preferred Roofing and Exteriors',
  openGraph: {
    title: 'Preferred Roofing & Exteriors, LLC | Top-Rated Roofing Contractor in Atlanta, GA',
    description: 'Atlanta, Georgia\'s trusted roofing experts. 10+ years of experience in quality roofing services.',
    type: 'website',
    locale: 'en_US',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
