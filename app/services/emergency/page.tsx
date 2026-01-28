import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Clock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Emergency Roofing Services | Preferred Roofing & Exteriors | Atlanta, GA',
  description: '24/7 emergency roofing services in Atlanta, GA. Fast response for storm damage, active leaks, and urgent roofing issues. Call (706) 346-9577!',
}

export default function EmergencyPage() {
  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
        <div className="container-custom">
          <div className="flex items-center mb-4">
            <AlertTriangle className="w-12 h-12 mr-4" />
            <h1 className="font-display text-4xl md:text-5xl font-bold">
              Emergency Roofing Services
            </h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl mb-6">
            Need urgent roof repair? We offer 24/7 emergency roofing services for storm damage, active leaks, and other urgent issues in Atlanta, GA.
          </p>
          <a
            href="tel:7063469577"
            className="inline-flex items-center bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-50 transition-colors"
          >
            <Phone className="w-6 h-6 mr-2" />
            Call Now: (706) 346-9577
          </a>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                24/7 Emergency Roof Repair
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                When roofing emergencies strike, you need fast, reliable service. Preferred Roofing & Exteriors offers same-day and next-day emergency response for urgent roofing issues. We understand that roof problems can't wait, especially when they're causing water damage or compromising your home's safety.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                <h3 className="font-semibold text-lg mb-3 flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-2" />
                  Fast Response Times
                </h3>
                <p className="text-gray-700">
                  We offer same-day or next-day emergency response for storm damage, active leaks, and urgent roofing issues in Atlanta. Don't wait - call us immediately at <a href="tel:7063469577" className="text-red-600 font-semibold">(706) 346-9577</a>.
                </p>
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Emergency Situations We Handle
              </h3>
              <div className="space-y-4 mb-8">
                {[
                  {
                    title: 'Active Leaks',
                    desc: 'Water coming into your home requires immediate attention to prevent further damage.'
                  },
                  {
                    title: 'Storm Damage',
                    desc: 'High winds, hail, and severe weather can cause immediate roofing problems.'
                  },
                  {
                    title: 'Missing Shingles',
                    desc: 'Large sections of missing shingles leave your roof vulnerable to water damage.'
                  },
                  {
                    title: 'Tree Damage',
                    desc: 'Fallen branches or trees on your roof need immediate professional removal and repair.'
                  },
                  {
                    title: 'Structural Damage',
                    desc: 'Sagging or compromised roof structure requires urgent attention for safety.'
                  },
                  {
                    title: 'Fire Damage',
                    desc: 'Immediate assessment and temporary protection after fire incidents.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-5">
                    <h4 className="font-semibold text-lg text-gray-900 mb-2 flex items-center">
                      <AlertTriangle className="w-5 h-5 text-red-600 mr-2" />
                      {item.title}
                    </h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>

              <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                What to Do in a Roofing Emergency
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Call Us Immediately</h4>
                    <p className="text-gray-600">Don't wait - call (706) 346-9577 for immediate assistance.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Protect Your Belongings</h4>
                    <p className="text-gray-600">Move furniture and valuables away from leaks if safe to do so.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Document the Damage</h4>
                    <p className="text-gray-600">Take photos for insurance purposes if it's safe to do so.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Wait for Professional Help</h4>
                    <p className="text-gray-600">Don't attempt dangerous repairs yourself - let our experts handle it.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4 text-red-900">Emergency Hotline</h3>
                <a
                  href="tel:7063469577"
                  className="block text-center bg-red-600 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-colors mb-4"
                >
                  <Phone className="w-6 h-6 inline mr-2" />
                  (706) 346-9577
                </a>
                <p className="text-sm text-red-800 text-center">
                  Available 24/7 for emergencies
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Why Choose Us?</h3>
                <div className="space-y-4">
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
                      <div className="font-semibold text-gray-900">Experienced Team</div>
                      <div className="text-sm text-gray-600">10+ years experience</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary-600 mr-3 mt-0.5" />
                    <div>
                      <div className="font-semibold text-gray-900">Insurance Help</div>
                      <div className="text-sm text-gray-600">Claims assistance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary-200 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-4">Request Emergency Service</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Don't Wait - Call Us Now for Emergency Service
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Roofing emergencies can't wait. We're here 24/7 to help protect your home.
          </p>
          <a
            href="tel:7063469577"
            className="btn-primary bg-red-600 hover:bg-red-700 inline-flex items-center"
          >
            <Phone className="mr-2 w-5 h-5" />
            Call (706) 346-9577
          </a>
        </div>
      </section>
    </div>
  )
}
