import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const roboto = Roboto({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dr. Sibarama Panigrahi - Academic Portfolio",
  description: "Assistant Professor (Grade-I) - Department of Computer Science & Engineering, NIT Rourkela",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Header */}
          <header className="border-b py-4">
            <div className="container flex items-center justify-between">
              <Link href="/" className="text-purple-600 font-bold text-lg">
                Dr. Sibarama Panigrahi
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link href="/" className="text-sm font-semibold hover:text-purple-600 transition-colors">
                  Home
                </Link>
                <Link href="/research" className="text-sm font-semibold hover:text-purple-600 transition-colors">
                  Research
                </Link>
                <Link href="/publications" className="text-sm font-semibold hover:text-purple-600 transition-colors">
                  Publications
                </Link>
                <Link href="/teaching" className="text-sm font-semibold hover:text-purple-600 transition-colors">
                  Teaching
                </Link>
                <Link href="/students" className="text-sm font-semibold hover:text-purple-600 transition-colors">
                  Students
                </Link>
              </nav>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white transition-colors"
                asChild
              >
                <Link href="/contact">Contact Me</Link>
              </Button>
            </div>
          </header>

          {children}

          {/* Footer */}
          <footer className="border-t py-12" style={{ backgroundColor: '#F5FCFF' }}>
            <div className="container">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <Link href="/" className="text-purple-600 font-bold block mb-4">
                    Dr. Sibarama Panigrahi
                  </Link>
                  <p className="text-sm text-gray-600 mb-2">
                    Assistant Professor (Grade-I)
                    <br />
                    Department of Computer Science & Engineering
                    <br />
                    NIT Rourkela
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-4 text-sm">Quick Links</h4>
                  <nav className="flex flex-col space-y-2">
                    <Link href="/" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Home
                    </Link>
                    <Link href="/research" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Research
                    </Link>
                    <Link
                      href="/publications"
                      className="text-sm text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      Publications
                    </Link>
                    <Link href="/teaching" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Teaching
                    </Link>
                    <Link href="/students" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                      Students
                    </Link>
                  </nav>
                </div>

                <div>
                  <h4 className="font-medium mb-4 text-sm">Contact Detail</h4>
                  <address className="not-italic">
                    <p className="text-sm text-gray-600 mb-1">NIT Rourkela, Odisha, India</p>
                    <p className="text-sm text-gray-600 mb-1">+91-XX-XXXXXXXX</p>
                    <p className="text-sm text-gray-600">panigrahi@nitrkl.ac.in</p>
                  </address>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t text-center text-sm text-gray-500">
                Made by{" "}
                <Link
                  href="https://www.linkedin.com/in/nishan-maity/"
                  target="_blank"
                  className="text-purple-600 hover:underline"
                >
                  Nishan Maity
                </Link>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
