import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ToasterColored } from "@/components/ui/sonner"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
    <html lang="en" className={`${poppins.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
            {children}
            <ToasterColored />
        </ThemeProvider>
      </body>
    </html>
  )
}
