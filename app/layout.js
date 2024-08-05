import { Bricolage_Grotesque } from 'next/font/google'
import { Space_Mono } from 'next/font/google'
import { cn } from '@/lib/utils'
import './globals.css'

import Navbar from '@/components/component/navbar'
import Footer from '@/components/component/footer'

const fontHeading = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
})

const fontBody = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['400', '700'], // Add the weights you want to use
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body 
        className={cn(
          'antialiased',
          fontHeading.variable,
          fontBody.variable
        )}
      >
        <div className="flex flex-col min-h-screen">
      <Navbar/>
     
        {children}
      <Footer/>
    </div>
      </body>
    </html>
  )
}
