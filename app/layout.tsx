import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "itsNiloy | Professional Video Editing Portfolio",
    template: "%s | itsNiloy",
  },
  description: "Professional portfolio showcasing high-end video editing work by Niloy Bhowmick",
  keywords: "video editing, portfolio, motion graphics, post-production, Niloy Bhowmick",
  authors: [{ name: "Niloy Bhowmick" }],
  creator: "Niloy Bhowmick",
  publisher: "itsNiloy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://itsniloy.com"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://itsniloy.com",
    title: "itsNiloy | Professional Video Editing Portfolio",
    description: "Professional portfolio showcasing high-end video editing work by Niloy Bhowmick",
    siteName: "itsNiloy",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pORtWqG1c8FcM65O2Nv8c3KxF4K6i8.png",
        width: 1200,
        height: 630,
        alt: "Niloy Bhowmick",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "itsNiloy | Professional Video Editing Portfolio",
    description: "Professional portfolio showcasing high-end video editing work by Niloy Bhowmick",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-pORtWqG1c8FcM65O2Nv8c3KxF4K6i8.png"],
    creator: "@itsniloy",
  },
    generator: 'v0.dev'
}

// Separate viewport export as required by Next.js 15
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <div className="flex flex-1 flex-col">{children}</div>
            <footer className="border-t border-gray-800 bg-black py-6">
              <div className="container mx-auto px-4 text-center text-sm text-gray-400">
                <p>© {new Date().getFullYear()} itsNiloy. All rights reserved.</p>
                <p className="mt-2">Professional Video Editing Services</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
        {/* Structured data for organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "itsNiloy",
              url: "https://itsniloy.com",
              logo: "https://itsniloy.com/logo.png",
              description: "Professional video editing services by Niloy Bhowmick",
              contactPoint: {
                "@type": "ContactPoint",
                email: "niloy@stacklearner.com",
                contactType: "customer service",
              },
              sameAs: [
                "https://twitter.com/itsniloy",
                "https://instagram.com/itsniloy",
                "https://linkedin.com/in/itsniloy",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
