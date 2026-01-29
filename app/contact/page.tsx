import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Contact Us | Preferred Roofing & Exteriors, LLC | Atlanta, GA',
  description: 'Get in touch with Preferred Roofing & Exteriors for a free estimate. Call (706) 346-9577 or fill out our contact form. Serving Atlanta, GA and surrounding areas.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHero
        title="Contact Preferred Roofing & Exteriors"
        highlight="Preferred Roofing & Exteriors"
        subtitle="We're here to help protect your biggest investment. Get your free estimate today!"
      />

      {/* Contact Info & Form */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Call Us</h3>
              <a href="tel:7063469577" className="text-primary-600 hover:text-primary-700 font-semibold text-lg">
                (706) 346-9577
              </a>
              <p className="text-sm text-gray-600 mt-2">Available 24/7 for emergencies</p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email Us</h3>
              <a href="mailto:info@preferredexteriors.com" className="text-primary-600 hover:text-primary-700 font-semibold">
                info@preferredexteriors.com
              </a>
              <p className="text-sm text-gray-600 mt-2">We'll respond within 24 hours</p>
            </div>

            {/* Location */}
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Service Area</h3>
              <p className="text-primary-600 font-semibold">Atlanta, Georgia</p>
              <p className="text-sm text-gray-600 mt-2">Metro Atlanta & Surrounding Areas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Schedule a Consultation
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. Our estimates are always free!
              </p>
              <ContactForm />
            </div>

            {/* Business Hours & Map */}
            <div>
              <h2 className="font-display text-3xl font-bold text-gray-900 mb-6">
                Business Hours
              </h2>
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Saturday', hours: '8:00 AM - 6:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                  ].map((schedule, index) => (
                    <div key={index} className="flex items-center justify-between pb-4 border-b border-gray-200 last:border-0 last:pb-0">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-primary-600 mr-3" />
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                      </div>
                      <span className="text-gray-600">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="font-semibold text-lg mb-4">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We proudly serve the following areas:
                </p>
                <ul className="space-y-2 text-gray-600">
                  {[
                    'Atlanta',
                    'Vinings',
                    'Smyrna',
                    'Sandy Springs',
                    'Marietta',
                    'Roswell',
                    'Alpharetta',
                    'And surrounding Metro Atlanta areas'
                  ].map((area, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      {area}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 bg-primary-50 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-primary-900">Emergency Service</h3>
                <p className="text-primary-800 mb-4">
                  Need urgent roof repair? We offer 24/7 emergency roofing services for storm damage, active leaks, and other urgent issues.
                </p>
                <a href="tel:7063469577" className="btn-primary bg-primary-600 hover:bg-primary-700">
                  Call Now: (706) 346-9577
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
