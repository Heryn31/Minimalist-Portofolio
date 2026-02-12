import { Geist_Mono, Geist } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ToasterColored } from "@/components/ui/sonner"

const gestmono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono"
})

export const metadata = {
  title: "Herinantenaina Arnaud Michael",
  description: "Professional portfolio showcasing web design and development projects",
  generator: "v0.app",
  icons: {
    icon: "/logo.png", // chemin depuis /public
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${gestmono.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
            {children}
            <ToasterColored />
        </ThemeProvider>
      </body>
    </html>
  )
}
