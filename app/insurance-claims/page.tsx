import type { Metadata } from 'next'
import Link from 'next/link'
import { FileText, CheckCircle, Shield, Phone, ArrowRight, AlertCircle } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Insurance Claims Assistance | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Expert insurance claims assistance for roof damage in Atlanta, GA. We help you navigate the claims process and get the coverage you deserve.',
}

export default function InsuranceClaimsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Insurance Claims Specialists
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            We assist homeowners with roof insurance claims from start to finish, working with your insurance company to get the coverage you deserve.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Expert Insurance Claims Assistance
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Dealing with insurance claims after roof damage can be overwhelming and confusing. At Preferred Roofing & Exteriors, we have extensive experience working with insurance companies and can guide you through the entire claims process. We'll help ensure you get the coverage you're entitled to.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mb-8">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <AlertCircle className="w-5 h-5 text-primary-600 mr-2" />
                  Why You Need Professional Help
                </h3>
                <p className="text-gray-700">
                  Insurance claims can be complex, and insurance companies often try to minimize payouts. Our team knows how to document damage properly, negotiate with adjusters, and ensure you receive fair compensation for your roof damage.
                </p>
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Our Insurance Claims Process
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  {
                    step: '1',
                    title: 'Free Damage Assessment',
                    description: 'We conduct a thorough inspection and document all damage with photos and detailed reports for your insurance claim.'
                  },
                  {
                    step: '2',
                    title: 'Claim Filing Assistance',
                    description: 'We help you file your claim correctly with all necessary documentation to maximize your chances of approval.'
                  },
                  {
                    step: '3',
                    title: 'Insurance Adjuster Meeting',
                    description: 'We meet with your insurance adjuster to ensure all damage is properly documented and accounted for in the claim.'
                  },
                  {
                    step: '4',
                    title: 'Negotiation & Advocacy',
                    description: 'If the initial offer is insufficient, we negotiate on your behalf to get the coverage you deserve.'
                  },
                  {
                    step: '5',
                    title: 'Professional Installation',
                    description: 'Once approved, we complete the work using quality materials and expert installation.'
                  },
                  {
                    step: '6',
                    title: 'Final Documentation',
                    description: 'We provide all necessary documentation for claim closure and warranty information.'
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
                Types of Claims We Handle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  'Storm Damage (Wind, Hail)',
                  'Water Damage Claims',
                  'Fire Damage Claims',
                  'Tree/Impact Damage',
                  'Wind Damage',
                  'Hail Damage',
                  'Lightning Damage',
                  'Weight of Snow/Ice'
                ].map((type, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3" />
                    <span className="text-gray-700 font-medium">{type}</span>
                  </div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-4">What Our Customers Say</h3>
                <p className="text-gray-700 italic mb-2">
                  "Cameron was professional and honest in assisting us with our insurance claim. Once approval was received his team went into action installing our roof in one and a half days."
                </p>
                <p className="text-sm text-gray-600">- Belinda Sheppard, Atlanta, GA</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Shield className="w-5 h-5 text-primary-600 mr-2" />
                  Why Choose Us?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FileText className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Claims Expertise</div>
                      <div className="text-sm text-gray-600">10+ years experience</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Full Support</div>
                      <div className="text-sm text-gray-600">Start to finish</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Insurance Knowledge</div>
                      <div className="text-sm text-gray-600">Know the process</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Need Help with Your Claim?</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Contact us today for a free consultation about your insurance claim.
                </p>
                <a
                  href="tel:7063469577"
                  className="block text-center btn-primary mb-4"
                >
                  <Phone className="w-5 h-5 inline mr-2" />
                  (706) 346-9577
                </a>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Get Started</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-8 text-center">
            Important Information About Insurance Claims
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">Act Quickly</h3>
              <p className="text-gray-600">
                Most insurance policies have time limits for filing claims. Contact us immediately after damage occurs to begin the process.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">Document Everything</h3>
              <p className="text-gray-600">
                Take photos of all damage before making any temporary repairs. We'll help document everything properly for your claim.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">Don't Accept Low Offers</h3>
              <p className="text-gray-600">
                Insurance companies may offer less than you deserve. We negotiate to ensure you get fair compensation for all damage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg mb-3">Work with Experts</h3>
              <p className="text-gray-600">
                Our experience with insurance claims ensures you navigate the process smoothly and get the best possible outcome.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Need Help with Your Insurance Claim?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let our insurance claims experts guide you through the process and get the coverage you deserve.
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            Get Free Consultation
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Link>
        </div>
      </section>
    </div>
  )
}
