import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EU BOYFRIEND STATS',
  description: 'Find out how rare the boyfriend you are looking for is in Europe',
  keywords: 'boyfriend, relationships, Europe, dating, statistics',
  viewport: 'width=device-width, initial-scale=1.0',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
