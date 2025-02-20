import './globals.css'
import { Inter, Manrope } from 'next/font/google'
import {cx} from '@/utils/index'
import { Header } from '@/Components/Header';

// const inter = Inter({ subsets: ['latin'] })

const inter = Inter({
  subsets: ["latin"],
  display: "swap" ,
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr"
});

export const metadata = {
  title: 'Autoblog APP',
  description: 'Blog APP',
}

export default function RootLayout({ children }) {
  console.log("Inside layout.js -----------");
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, "font-mr bg-[#EDE0D4]")}>
        <Header />
        {children}
      </body>
    </html>
  )
}
