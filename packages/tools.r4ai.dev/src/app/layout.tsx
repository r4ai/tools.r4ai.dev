import { NavBar } from "@/components/NavBar"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type { ReactNode } from "react"
import { Providers } from "./Providers"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

type RootLayoutProps = {
  children: ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
export default RootLayout
