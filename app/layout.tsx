import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"
import { ThemeProvider } from "@/components/theme-provider"
import { AiAssistant } from "@/components/ai-assistant"
import { generatePageMetadata } from "./metadata"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  ...generatePageMetadata('en'),
  viewport: "width=device-width, initial-scale=1",
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX'
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || 'ca-pub-XXXXXXXXXXXXXXXX'
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EventPlanner",
    "name": "Hamilton Events",
    "description": "Premier event planning and management services specializing in luxury events, corporate conferences, weddings, and gala dinners.",
    "url": "https://hamiltonevents.net",
    "telephone": "+251-935-483-093",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Ethiopia"
    },
    "serviceType": ["Event Planning", "Wedding Planning", "Corporate Events", "Conference Management", "Gala Dinners"],
    "areaServed": "Worldwide"
  }
  
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} antialiased`} suppressHydrationWarning>
      <head>
        <title>Hamilton - Turning Moments into Memories</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className="min-h-screen flex flex-col">
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        
        {/* Google AdSense */}
        <Script
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        
        {/* Structured Data */}
        <Script id="structured-data" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(structuredData)}
        </Script>
        
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <LanguageProvider>
            <Navigation />
            <main className="flex-1">{children}</main>
            <Footer />
            <AiAssistant />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
