import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yusif Qasim - Portfolio',
  description: 'Yusif Qasim - Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}
