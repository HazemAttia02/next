import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, ArrowRight } from 'lucide-react'

export default function FeaturedProjects() {
  const featuredProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment processing, user authentication, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management with real-time updates and team collaboration features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="featured-projects" className="section-padding bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development 
            and modern web technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div key={project.id} className="card animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-64 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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

        <div className="text-center">
          <Link href="/projects" className="btn-primary inline-flex items-center">
            View All Projects
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
}