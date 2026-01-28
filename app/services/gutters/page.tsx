import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Droplets, Wrench } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Gutter Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Professional gutter installation, repair, and cleaning in Atlanta, GA. Ensure proper drainage and prevent water damage. Free estimates!',
}

export default function GuttersPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Gutter Services in Atlanta, GA
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            We offer professional gutter installation, repair, and cleaning to ensure proper drainage and prevent water damage to your property.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Complete Gutter Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Properly functioning gutters are essential for protecting your home from water damage. Our expert team provides comprehensive gutter services including installation, repair, replacement, and maintenance to keep your property safe and dry.
              </p>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Gutter Services
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Gutter Installation',
                    desc: 'Professional installation of new gutter systems using quality materials. We offer seamless gutters, traditional gutters, and gutter guards to meet your needs.'
                  },
                  {
                    title: 'Gutter Repair',
                    desc: 'Fix sagging gutters, leaks, loose connections, and damaged sections. We restore functionality quickly and affordably.'
                  },
                  {
                    title: 'Gutter Replacement',
                    desc: 'Complete replacement when gutters are beyond repair or outdated. We remove old systems and install new, efficient gutters.'
                  },
                  {
                    title: 'Gutter Cleaning',
                    desc: 'Regular cleaning to remove debris, leaves, and blockages that can cause overflow and water damage.'
                  },
                  {
                    title: 'Gutter Guards',
                    desc: 'Installation of gutter guard systems to reduce maintenance and prevent clogs.'
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
                      <Droplets className="w-5 h-5 text-primary-600 mr-2" />
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Signs You Need Gutter Service
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Water overflowing from gutters',
                  'Sagging or pulling away from house',
                  'Visible leaks or rust',
                  'Plants growing in gutters',
                  'Water damage to siding or foundation',
                  'Gutters more than 20 years old',
                  'Missing or damaged sections',
                  'Pooling water around foundation'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Gutter Materials We Work With
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Aluminum Gutters',
                  'Copper Gutters',
                  'Vinyl Gutters',
                  'Steel Gutters',
                  'Seamless Gutters',
                  'Gutter Guards'
                ].map((material, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <Wrench className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700 font-medium">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Expert Installation</div>
                      <div className="text-sm text-gray-600">Quality workmanship</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Quality Materials</div>
                      <div className="text-sm text-gray-600">Durable solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Fast Service</div>
                      <div className="text-sm text-gray-600">Quick turnaround</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Get Your Free Estimate</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Protect Your Home with Quality Gutter Services
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for professional gutter installation, repair, or replacement in Atlanta, GA.
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
