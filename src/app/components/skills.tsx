import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react'

export default function Skills() {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML5', 'CSS3'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker'],
      color: 'from-green-600 to-emerald-600'
    },
    {
      icon: Database,
      title: 'Database & Cloud',
      skills: ['PostgreSQL', 'MongoDB', 'AWS', 'Vercel', 'Netlify', 'Firebase', 'Supabase'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: Smartphone,
      title: 'Mobile & Responsive',
      skills: ['React Native', 'PWA', 'Responsive Design', 'Mobile-First', 'Cross-Platform'],
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['REST APIs', 'GraphQL', 'WebSockets', 'OAuth', 'JWT', 'SEO', 'Performance'],
      color: 'from-indigo-600 to-blue-600'
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: ['Figma', 'Adobe XD', 'Git', 'GitHub', 'VS Code', 'Webpack', 'Vite'],
      color: 'from-pink-600 to-rose-600'
    }
  ]

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks 
            to build scalable, performant web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={category.title} className="card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                <category.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-center">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white px-3 py-1 rounded-full text-sm transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { label: 'Projects Completed', value: '50+' },
            { label: 'Technologies Mastered', value: '25+' },
            { label: 'Years of Experience', value: '5+' },
            { label: 'Happy Clients', value: '30+' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}