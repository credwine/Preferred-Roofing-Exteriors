import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Home, Shield } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Siding Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Quality siding installation and repair in Atlanta, GA. Enhance your property\'s appearance and protection with professional siding services.',
}

export default function SidingPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Siding Services in Atlanta, GA"
        highlight="Atlanta, GA"
        subtitle="We provide quality siding installation and repair using various materials to enhance your property's appearance and protection."
        centered={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Professional Siding Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Your home's siding is its first line of defense against the elements. We offer comprehensive siding services to protect your property while enhancing its curb appeal. Whether you need installation, repair, or replacement, our expert team delivers quality workmanship.
              </p>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Siding Services
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Siding Installation',
                    desc: 'Professional installation of new siding using quality materials. We work with vinyl, fiber cement, wood, and more.'
                  },
                  {
                    title: 'Siding Repair',
                    desc: 'Fix damaged, warped, or missing siding panels. We match existing materials and colors for seamless repairs.'
                  },
                  {
                    title: 'Siding Replacement',
                    desc: 'Complete siding replacement when your current siding is beyond repair or outdated. We handle removal and installation.'
                  },
                  {
                    title: 'Siding Maintenance',
                    desc: 'Regular maintenance to extend the life of your siding and keep it looking great.'
                  }
                ].map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
                      <Home className="w-5 h-5 text-primary-600 mr-2" />
                      {service.title}
                    </h4>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Siding Materials We Install
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { name: 'Vinyl Siding', desc: 'Low maintenance, durable, and cost-effective' },
                  { name: 'Fiber Cement', desc: 'Fire-resistant and long-lasting' },
                  { name: 'Wood Siding', desc: 'Natural beauty with proper maintenance' },
                  { name: 'Metal Siding', desc: 'Modern and extremely durable' },
                  { name: 'Composite Siding', desc: 'Eco-friendly and versatile' },
                  { name: 'Stone Veneer', desc: 'Premium appearance and durability' }
                ].map((material, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-1">{material.name}</h4>
                    <p className="text-sm text-gray-600">{material.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Signs You Need Siding Service
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Cracked, warped, or missing panels',
                  'Fading or discoloration',
                  'High energy bills (poor insulation)',
                  'Rot or water damage',
                  'Loose or sagging sections',
                  'Mold or mildew growth',
                  'Siding over 20 years old',
                  'Visible damage from storms'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Benefits of New Siding</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Better Protection</div>
                      <div className="text-sm text-gray-600">Weather resistance</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Home className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Increased Value</div>
                      <div className="text-sm text-gray-600">Boost curb appeal</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Energy Savings</div>
                      <div className="text-sm text-gray-600">Better insulation</div>
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
            Transform Your Home with Quality Siding
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for professional siding installation, repair, or replacement in Atlanta, GA.
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
