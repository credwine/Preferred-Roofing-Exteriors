import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Shield, Clock, Award } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Roof Replacement Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Expert roof replacement services in Atlanta, GA. Quality materials, professional installation, and long-lasting protection. Free estimates!',
}

export default function RoofReplacementPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Roof Replacement Services in Atlanta, GA"
        highlight="Atlanta, GA"
        subtitle="Expert roof replacement using quality materials to keep your property safe and secure with long-lasting protection."
        centered={false}
      />

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Professional Roof Replacement
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Preferred Roofing & Exteriors, we specialize in roof replacement services, but we always take a thoughtful approach. We begin with thorough roof inspections, evaluating your roof's current condition, factoring in the age, materials, and extent of damage before recommending a complete replacement.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our goal is to ensure you receive the most cost-effective solution, which may often be a repair instead of a full roof replacement. With over 10 years of experience, we prioritize both the longevity and protection of your property.
              </p>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                When Do You Need a Roof Replacement?
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Your roof is 20+ years old',
                  'Widespread damage across multiple areas',
                  'Multiple leaks that can\'t be effectively repaired',
                  'Severe storm damage',
                  'Sagging or structural issues',
                  'Extensive shingle deterioration',
                  'Recurring repair needs'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Roof Replacement Process
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  {
                    step: '1',
                    title: 'Free Inspection',
                    description: 'We conduct a thorough inspection to assess your roof\'s condition and determine if replacement is necessary.'
                  },
                  {
                    step: '2',
                    title: 'Detailed Estimate',
                    description: 'You\'ll receive a detailed estimate with material options, timeline, and transparent pricing.'
                  },
                  {
                    step: '3',
                    title: 'Material Selection',
                    description: 'We help you choose the best roofing materials for your home, budget, and climate.'
                  },
                  {
                    step: '4',
                    title: 'Professional Installation',
                    description: 'Our certified roofers install your new roof with precision and attention to detail.'
                  },
                  {
                    step: '5',
                    title: 'Cleanup & Warranty',
                    description: 'We clean up thoroughly and provide warranty information for your peace of mind.'
                  }
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {item.step}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Roofing Materials We Install
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Asphalt Shingles',
                  'Metal Roofing',
                  'Tile Roofing',
                  'Flat Roof Systems',
                  'Slate Roofing',
                  'Wood Shakes'
                ].map((material, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700 font-medium">{material}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Award className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">10+ Years Experience</div>
                      <div className="text-sm text-gray-600">Proven track record</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Licensed & Insured</div>
                      <div className="text-sm text-gray-600">Fully protected</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Fast Service</div>
                      <div className="text-sm text-gray-600">Quick turnaround</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Get Your Free Estimate</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Fill out the form below and we'll contact you within 24 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Ready to Replace Your Roof?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free inspection and estimate. We're here to help protect your home.
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
