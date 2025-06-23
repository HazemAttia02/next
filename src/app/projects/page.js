import Image from "next/image"
import Link from "next/link"
import styles from "./page.module.css"

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Une plateforme e-commerce complète avec panier, paiement et gestion des commandes.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "JavaScript", "Stripe", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Application de gestion de tâches collaborative avec temps réel.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Dashboard météo avec prévisions et visualisations interactives.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "Plateforme de blog avec CMS intégré et optimisation SEO.",
    image: "/placeholder.svg?height=300&width=400",
    technologies: ["Next.js", "Sanity", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function Projects() {
  return (
    <div className={styles.projectsPage}>
      <section className="section">
        <div className="container">
          <h1 className="section-title">Mes Projets</h1>
          <p className={styles.intro}>
            Découvrez une sélection de mes réalisations récentes, allant des applications web aux solutions e-commerce
            en passant par les outils de productivité.
          </p>

          <div className="grid grid-2">
            {projects.map((project) => (
              <div key={project.id} className={`card ${styles.projectCard}`}>
                <div className={styles.projectImage}>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={400}
                    height={300}
                    className={styles.image}
                  />
                </div>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>{project.description}</p>

                  <div className={styles.technologies}>
                    {project.technologies.map((tech) => (
                      <span key={tech} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    <Link href={project.liveUrl} className="btn">
                      Voir le projet
                    </Link>
                    <Link href={project.githubUrl} className="btn btn-secondary">
                      Code source
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}