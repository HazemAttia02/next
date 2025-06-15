import { Metadata } from 'next'
import { ExternalLink, Github, Calendar } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Projects - Alex Johnson',
  description: 'Explore my portfolio of web development projects and applications',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with Next.js, Stripe, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: true,
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current conditions and forecasts with beautiful visualizations and location-based services.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg',
      technologies: ['React', 'Chart.js', 'Weather API', 'CSS3'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false,
    },
    {
      id: 4,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for social media management with data visualization, automated reporting, and multi-platform integration.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpg',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
      featured: false,
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Next.js, featuring smooth animations and optimized performance.',
      image: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
      featured: false,
    },
    {
      id: 6,
      title: 'Restaurant Booking System',
      description: 'Complete restaurant management system with online reservations, table management, and customer communication features.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg',
      technologies: ['React', 'Node.js', 'MySQL', 'Express', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
      featured: false,
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects that showcase my skills in full-stack development, 
            from concept to deployment
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={300}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="bg-white/10 text-blue-300 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Link href={project.liveUrl} className="btn-primary flex items-center">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Link>
                  <Link href={project.githubUrl} className="btn-secondary flex items-center">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Other Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div key={project.id} className="card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={200}
                    className="w-full h-32 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="flex items-center text-gray-400 text-sm mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  {project.date}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="bg-white/10 text-blue-300 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-400 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Link href={project.liveUrl} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm text-center transition-colors">
                    <ExternalLink className="w-3 h-3 inline mr-1" />
                    Demo
                  </Link>
                  <Link href={project.githubUrl} className="flex-1 bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded text-sm text-center transition-colors">
                    <Github className="w-3 h-3 inline mr-1" />
                    Code
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}