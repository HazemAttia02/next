import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Bonjour, je suis <span className={styles.highlight}>Développeur Web</span>
              </h1>
              <p className={styles.heroDescription}>
                Passionné par la création d'expériences web modernes et performantes. Je transforme vos idées en
                solutions digitales innovantes.
              </p>
              <div className={styles.heroButtons}>
                <Link href="/projects" className="btn">
                  Voir mes projets
                </Link>
                <Link href="/contact" className="btn btn-secondary">
                  Me contacter
                </Link>
              </div>
            </div>
            <div className={styles.heroImage}>
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Photo de profil"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Mes Compétences</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3 className={styles.skillTitle}>Frontend</h3>
              <p>React, Next.js, JavaScript, HTML5, CSS3, Vue.js</p>
            </div>
            <div className="card">
              <h3 className={styles.skillTitle}>Backend</h3>
              <p>Node.js, Express, Python, API REST, Bases de données</p>
            </div>
            <div className="card">
              <h3 className={styles.skillTitle}>Outils</h3>
              <p>Git, Docker, AWS, Vercel, Figma, VS Code</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Prêt à collaborer ?</h2>
          <p className={styles.ctaText}>
            Discutons de votre prochain projet et créons quelque chose d'extraordinaire ensemble.
          </p>
          <Link href="/contact" className="btn">
            Commençons
          </Link>
        </div>
      </section>
    </>
  )
}
