import "./globals.css"

import type { Metadata } from "next"
import localFont from "next/font/local"
import Link from "next/link"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "Countries App",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} container mx-auto py-4 antialiased`}
      >
        <header className="mb-6 flex items-center px-10 py-4 shadow-md">
          <Link
            href="/"
            passHref
            className="text-xl font-semibold text-blue-600 transition hover:text-blue-800"
          >
            Country App 🌍
          </Link>
        </header>
        {children}
      </body>
    </html>
  )
}
