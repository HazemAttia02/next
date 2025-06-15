import Link from 'next/link'
import { ArrowRight, Mail } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-to-r from-blue-900/50 to-purple-900/50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your <span className="gradient-text">Next Project</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Let's work together to bring your ideas to life. Whether you need a new website, 
            web application, or want to improve your existing digital presence, I'm here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Link>
            <Link href="/projects" className="btn-secondary">
              View My Work
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
          
          <div className="mt-12 p-6 glass rounded-xl">
            <h3 className="text-2xl font-bold mb-4">What You Can Expect</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-300 mb-2">Fast Response</h4>
                <p className="text-gray-300 text-sm">I typically respond to messages within 24 hours</p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-300 mb-2">Quality Work</h4>
                <p className="text-gray-300 text-sm">Clean, modern code following best practices</p>
              </div>
              <div>
                <h4 className="font-semibold text-pink-300 mb-2">On-Time Delivery</h4>
                <p className="text-gray-300 text-sm">Projects delivered on schedule, every time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}