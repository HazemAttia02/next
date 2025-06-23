import Image from "next/image"
import styles from "./page.module.css"

export default function About() {
  return (
    <div className={styles.aboutPage}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">À propos de moi</h1>

          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <h2 className={styles.subtitle}>Mon parcours</h2>
              <p>
                Développeur web passionné avec plus de 3 ans d'expérience dans la création d'applications web modernes
                et performantes. J'ai commencé ma carrière en autodidacte avant de me spécialiser dans les technologies
                React et Next.js.
              </p>

              <h2 className={styles.subtitle}>Ma philosophie</h2>
              <p>
                Je crois fermement que la technologie doit servir l'humain. C'est pourquoi je m'efforce de créer des
                interfaces intuitives et accessibles, tout en maintenant des standards élevés de performance et de
                qualité de code.
              </p>

              <h2 className={styles.subtitle}>Mes valeurs</h2>
              <ul className={styles.valuesList}>
                <li>Excellence technique</li>
                <li>Communication transparente</li>
                <li>Apprentissage continu</li>
                <li>Collaboration efficace</li>
              </ul>
            </div>

            <div className={styles.aboutImage}>
              <Image
                src="/placeholder.svg?height=500&width=400"
                alt="Photo professionnelle"
                width={400}
                height={500}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <div className="container">
          <h2 className="section-title">Expérience</h2>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2021 - Présent</div>
              <div className={styles.timelineContent}>
                <h3>Développeur Frontend Senior</h3>
                <p>TechCorp - Développement d'applications React complexes</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineDate}>2019 - 2021</div>
              <div className={styles.timelineContent}>
                <h3>Développeur Full Stack</h3>
                <p>StartupXYZ - Création de solutions web complètes</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}