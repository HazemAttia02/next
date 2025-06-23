"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./Navigation.module.css"

export default function Navigation() {
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Mon Portfolio
        </Link>
        <ul className={styles.navList}>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className={`${styles.navLink} ${pathname === item.href ? styles.active : ""}`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}