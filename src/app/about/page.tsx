import { Metadata } from 'next'
import { User, Award, Coffee, Code } from 'lucide-react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About - Alex Johnson',
  description: 'Learn more about Alex Johnson, full-stack developer with expertise in modern web technologies',
}

export default function About() {
  const stats = [
    { icon: Code, label: 'Projects Completed', value: '50+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '1000+' },
    { icon: Award, label: 'Years Experience', value: '5+' },
    { icon: User, label: 'Happy Clients', value: '25+' },
  ]

  return (
    <div className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating beautiful, functional web experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-6"></div>
              <Image
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                alt="Alex Johnson"
                width={500}
                height={600}
                className="relative rounded-2xl object-cover w-full h-[600px]"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Alex Johnson, a passionate full-stack developer based in San Francisco. 
                My journey in web development started 5 years ago when I built my first website 
                and fell in love with the process of bringing ideas to life through code.
              </p>
              <p>
                I specialize in modern web technologies including React, Next.js, TypeScript, 
                and Node.js. I'm particularly passionate about creating user experiences that 
                are not only functional but also delightful to interact with.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest tech trends, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while planning my next creative project.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={stat.label} className="card text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-400" />
              <div className="text-2xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="card animate-slide-up">
          <h2 className="text-3xl font-bold mb-8 text-center">My Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Clean Code</h3>
              <p className="text-gray-300">
                I believe in writing code that is not only functional but also maintainable, 
                readable, and scalable for future development.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">User-Centered</h3>
              <p className="text-gray-300">
                Every project starts with understanding the user's needs and creating 
                experiences that are intuitive and delightful to use.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
              <p className="text-gray-300">
                Technology evolves rapidly, and I'm committed to staying current with 
                the latest tools, frameworks, and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}