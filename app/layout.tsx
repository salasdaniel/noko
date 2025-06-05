import type React from "react"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "NOKO - No Code AI Solutions",
  description: "Transforming businesses with no-code AI solutions",
  generator: "v0.dev",
  icons: {
    icon: "/images/noko_logo_transparent.png",
    shortcut: "/images/noko_logo_transparent.png",
    apple: "/images/noko_logo_transparent.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${montserrat.variable} font-sans`}>{children}</body>
    </html>
  )
}
