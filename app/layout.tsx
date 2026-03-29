import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: '--font-space-grotesk'
});

export const metadata: Metadata = {
  title: 'V&A Systems | Soluções Digitais para Pequenas e Médias Empresas',
  description: 'Desenvolvemos sistemas personalizados para automatizar e simplificar o dia a dia do seu negócio. Especialistas em SaaS para Pilates, Hotéis e mais.',
  keywords: ['sistemas', 'automação', 'software', 'pilates', 'hotel', 'gestão', 'SaaS', 'pequenas empresas'],
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
