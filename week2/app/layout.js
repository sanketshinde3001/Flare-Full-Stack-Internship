import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Practice React',
  description: 'React using Next js , tailwind Css',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
        <Header logoname={"Sanket"}/>
        </header>
        <main>
        {children}
        </main>
        
        
        </body>
    </html>
  )
}
