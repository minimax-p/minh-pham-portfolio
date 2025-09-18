import type React from "react"
import type { Metadata, Viewport } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import "./globals.css"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap", // Improves loading performance
})

export const metadata: Metadata = {
  title: {
    default: "Minh Pham",
    template: "%s | Minh Pham", // Allows for dynamic titles on other pages
  },
  description: "Personal website and portfolio of Minh Pham",
  keywords: ["portfolio", "developer", "web development"], // Add relevant keywords
  authors: [{ name: "Minh Pham" }],
  creator: "Minh Pham",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000", // Your brand color
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-domain.com", // Replace with your actual domain
    title: "Minh Pham",
    description: "Personal website and portfolio of Minh Pham",
    siteName: "Minh Pham",
    // images: [
    //   {
    //     url: "/og-image.png", // Add when you have an OG image
    //     width: 1200,
    //     height: 630,
    //   },
    // ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Minh Pham",
    description: "Personal website and portfolio of Minh Pham",
    // images: ["/og-image.png"], // Add when you have an OG image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://your-domain.com"), // Replace with your actual domain
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false, // Optional: prevents zoom on mobile
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body
          className={`font-sans antialiased ${plusJakartaSans.variable}`}
          suppressHydrationWarning
      >
      <Suspense
          fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
            </div>
          }
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </Suspense>
      </body>
      </html>
  )
}