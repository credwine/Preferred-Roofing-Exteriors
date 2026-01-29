import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Shield, Wrench, Search, Droplets, Home, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Our Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Comprehensive roofing and exterior services in Atlanta, GA. Roof replacement, repair, inspection, gutters, siding, and emergency services.',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Roof Replacement',
      description: 'Expert roof replacement using quality materials for long-lasting protection.',
      icon: Shield,
      href: '/services/roof-replacement',
      features: ['Quality Materials', 'Professional Installation', 'Warranty Included']
    },
    {
      title: 'Roof Repair',
      description: 'Fast and reliable repairs for leaks, missing shingles, and structural issues.',
      icon: Wrench,
      href: '/services/roof-repair',
      features: ['Same-Day Service', 'Cost-Effective', 'Expert Technicians']
    },
    {
      title: 'Roof Inspection',
      description: 'Thorough inspections to identify damage and help you make informed decisions.',
      icon: Search,
      href: '/services/roof-inspection',
      features: ['Free Inspections', 'Detailed Reports', 'Insurance Documentation']
    },
    {
      title: 'Gutter Services',
      description: 'Professional installation, repair, and cleaning for proper drainage.',
      icon: Droplets,
      href: '/services/gutters',
      features: ['Installation', 'Repair & Replacement', 'Gutter Guards']
    },
    {
      title: 'Siding Services',
      description: 'Quality siding installation and repair to enhance appearance and protection.',
      icon: Home,
      href: '/services/siding',
      features: ['Multiple Materials', 'Installation & Repair', 'Curb Appeal']
    },
    {
      title: 'Emergency Roofing',
      description: '24/7 emergency response for urgent roofing issues and storm damage.',
      icon: Clock,
      href: '/services/emergency',
      features: ['24/7 Availability', 'Fast Response', 'Storm Damage']
    },
  ]

  return (
    <div className="pt-20">
      <PageHero
        title="Our Services"
        highlight="Services"
        subtitle="Comprehensive roofing and exterior solutions for your home or business in Atlanta and surrounding areas."
      />

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on any of our services. We're here to help protect your biggest investment.
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
