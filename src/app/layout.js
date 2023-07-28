
"use client"
import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import IntroAnimation from "@/components/IntroAnimation";
import { useState,useEffect } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Yusif Qasim - Portfolio',
  description: 'Yusif Qasim - Portfolio',
}

export default function RootLayout({ children }) {

  const [isIntroComplete, setIsIntroComplete] = useState(false);

  const handleIntroComplete = () => {
    setIsIntroComplete(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setIsIntroComplete(true);
    }, 1800);
  }, []);
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={inter.className}>
      {!isIntroComplete && <IntroAnimation onComplete={handleIntroComplete} />}
  
  {isIntroComplete &&
  <div>
    
        <Navbar/>
        {children}
  </div>
      }
        </body>
    </html>
  )
}
