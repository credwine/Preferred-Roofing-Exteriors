import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Search, FileText, Shield } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Roof Inspection Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Professional roof inspections in Atlanta, GA. Identify damage, wear, and potential problems. Free inspections available!',
}

export default function RoofInspectionPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Professional Roof Inspections in Atlanta, GA"
        highlight="Atlanta, GA"
        subtitle="We provide thorough roof inspections to identify damage, wear, and potential problems to help you make informed decisions."
        centered={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Comprehensive Roof Inspections
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Regular roof inspections are essential for maintaining your property's integrity and preventing costly damage. Our certified inspectors conduct thorough evaluations to identify current issues and potential problems before they become major expenses.
              </p>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                What We Inspect
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  'Shingle condition and integrity',
                  'Flashing around chimneys and vents',
                  'Gutter system and drainage',
                  'Soffit and fascia condition',
                  'Roof structure and support',
                  'Signs of water damage',
                  'Ventilation system',
                  'Storm damage assessment',
                  'Moss and algae growth',
                  'Missing or damaged materials',
                  'Insurance claim documentation',
                  'Overall roof age and condition'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Search className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Types of Inspections
              </h3>
              <div className="space-y-6 mb-8">
                {[
                  {
                    title: 'Pre-Purchase Inspection',
                    desc: 'Essential when buying a home to identify potential roofing issues before closing.'
                  },
                  {
                    title: 'Annual Maintenance Inspection',
                    desc: 'Regular inspections to catch problems early and extend your roof\'s lifespan.'
                  },
                  {
                    title: 'Post-Storm Inspection',
                    desc: 'After severe weather to assess damage and document for insurance claims.'
                  },
                  {
                    title: 'Insurance Claim Inspection',
                    desc: 'Detailed documentation to support your insurance claim with photos and reports.'
                  },
                  {
                    title: 'Pre-Sale Inspection',
                    desc: 'Identify issues before listing your home to avoid surprises during negotiations.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <FileText className="w-5 h-5 text-primary-600 mr-2" />
                  Detailed Inspection Reports
                </h3>
                <p className="text-gray-700 mb-3">
                  Every inspection includes a comprehensive written report with:
                </p>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Detailed findings and recommendations',
                    'High-resolution photos of issues',
                    'Priority level for each repair',
                    'Estimated repair costs',
                    'Timeline recommendations',
                    'Material and warranty information'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Free Inspections</h3>
                <p className="text-gray-700 mb-4">
                  We offer free roof inspections for homeowners in Atlanta and surrounding areas. No obligation, just honest assessments.
                </p>
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900">Certified Inspectors</div>
                    <div className="text-sm text-gray-600">Trained professionals</div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Schedule Your Inspection</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Schedule Your Free Roof Inspection Today
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't wait for problems to worsen. Get a professional inspection and protect your investment.
          </p>
          <Link href="/contact" className="btn-primary">
            Schedule Free Inspection
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Link>
        </div>
      </section>
    </div>
  )
}
