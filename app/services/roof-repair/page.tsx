import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle, ArrowRight, Wrench, Clock, Shield } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Roof Repair Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Fast and reliable roof repair services in Atlanta, GA. We fix leaks, missing shingles, and structural issues. Same-day service available!',
}

export default function RoofRepairPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Roof Repair Services in Atlanta, GA"
        highlight="Atlanta, GA"
        subtitle="We fix all types of roof damage including leaks, missing shingles, and structural issues with fast and reliable repairs."
        centered={false}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Expert Roof Repairs
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Not every roofing problem requires a full replacement. Our experienced team specializes in cost-effective roof repairs that address issues quickly and efficiently. We assess each situation carefully to determine whether a repair or replacement is the best solution for your needs and budget.
              </p>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Common Roof Repairs We Handle
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  { title: 'Leak Repairs', desc: 'Fix water leaks and prevent further damage' },
                  { title: 'Shingle Replacement', desc: 'Replace missing or damaged shingles' },
                  { title: 'Flashing Repair', desc: 'Fix damaged flashing around chimneys and vents' },
                  { title: 'Gutter Issues', desc: 'Repair and replace damaged gutters' },
                  { title: 'Vent Boot Repair', desc: 'Fix damaged roof vents and boots' },
                  { title: 'Soffit & Fascia', desc: 'Repair damaged soffit and fascia boards' },
                  { title: 'Storm Damage', desc: 'Emergency repairs after storms' },
                  { title: 'Structural Issues', desc: 'Address sagging and structural problems' }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start">
                      <Wrench className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Signs You Need Roof Repair
              </h3>
              <ul className="space-y-3 mb-8">
                {[
                  'Water stains on ceilings or walls',
                  'Missing or damaged shingles',
                  'Leaks during rain',
                  'Damaged or missing flashing',
                  'Sagging roof sections',
                  'Granules in gutters',
                  'Higher energy bills',
                  'Visible damage from storms'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-primary-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Clock className="w-5 h-5 text-primary-600 mr-2" />
                  Emergency Roof Repair Available
                </h3>
                <p className="text-gray-700">
                  We offer same-day and next-day emergency roof repair services for urgent issues like active leaks, storm damage, and other emergencies. Don't wait - call us immediately at <a href="tel:7063469577" className="text-primary-600 font-semibold">(706) 346-9577</a>.
                </p>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
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
                      <div className="font-semibold text-gray-900">Fast Response</div>
                      <div className="text-sm text-gray-600">Same-day service</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Quality Work</div>
                      <div className="text-sm text-gray-600">Guaranteed repairs</div>
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
            Need Roof Repair? We're Here to Help
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact us today for fast, reliable roof repair services in Atlanta, GA.
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
