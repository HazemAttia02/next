import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "@/components/Navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mon Portfolio - Développeur Web",
  description: "Portfolio professionnel showcasing mes compétences et projets",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}
