import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'Our Work Gallery | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'View our portfolio of completed roofing projects in Atlanta, GA. See examples of our quality workmanship in roof replacement, repair, and more.',
}

export default function GalleryPage() {
  // Placeholder images - replace with actual project photos
  const projects = [
    {
      id: 1,
      title: 'Complete Roof Replacement',
      category: 'Roof Replacement',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      location: 'Atlanta, GA'
    },
    {
      id: 2,
      title: 'Metal Roof Installation',
      category: 'Roof Replacement',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      location: 'Vinings, GA'
    },
    {
      id: 3,
      title: 'Storm Damage Repair',
      category: 'Roof Repair',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      location: 'Smyrna, GA'
    },
    {
      id: 4,
      title: 'Gutter Installation',
      category: 'Gutters',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
      location: 'Atlanta, GA'
    },
    {
      id: 5,
      title: 'Siding Replacement',
      category: 'Siding',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
      location: 'Sandy Springs, GA'
    },
    {
      id: 6,
      title: 'Commercial Roofing',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800',
      location: 'Atlanta, GA'
    },
    {
      id: 7,
      title: 'Tile Roof Installation',
      category: 'Roof Replacement',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800',
      location: 'Roswell, GA'
    },
    {
      id: 8,
      title: 'Emergency Roof Repair',
      category: 'Emergency',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800',
      location: 'Marietta, GA'
    },
    {
      id: 9,
      title: 'Flat Roof System',
      category: 'Commercial',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
      location: 'Atlanta, GA'
    }
  ]

  const categories = ['All', 'Roof Replacement', 'Roof Repair', 'Gutters', 'Siding', 'Commercial', 'Emergency']

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Our Work Gallery
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Browse our portfolio of completed projects showcasing quality workmanship and exceptional results
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border-2 border-gray-300 text-gray-700 hover:border-primary-600 hover:text-primary-600 hover:bg-primary-50 transition-colors font-medium"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <div className="text-white">
                      <div className="text-sm font-semibold mb-1">{project.category}</div>
                      <div className="text-xs">{project.location}</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{project.location}</span>
                    <span className="text-xs px-3 py-1 bg-primary-100 text-primary-700 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us bring the same quality and attention to detail to your home or business.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Link>
        </div>
      </section>
    </div>
  )
}
