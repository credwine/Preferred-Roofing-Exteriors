import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, Shield, Users, Heart, CheckCircle, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export const metadata: Metadata = {
  title: 'About Us | Preferred Roofing & Exteriors, LLC | Atlanta, GA',
  description: 'Learn about Preferred Roofing & Exteriors - Atlanta\'s trusted roofing contractor with 10+ years of experience. Quality workmanship and exceptional customer service.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our top priority. We treat every project as if it were our own home.'
    },
    {
      icon: Shield,
      title: 'Quality Workmanship',
      description: 'We never cut corners. Every job is completed to the highest standards of excellence.'
    },
    {
      icon: Users,
      title: 'Trusted Team',
      description: 'Our certified roofers are experienced, professional, and committed to your success.'
    },
    {
      icon: Award,
      title: 'Proven Excellence',
      description: '10+ years of experience with a stellar reputation built on customer satisfaction.'
    }
  ]

  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '1000+', label: 'Projects Completed' },
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '24/7', label: 'Emergency Service' }
  ]

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About Preferred Roofing & Exteriors
          </h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            We are committed to quality plain and simple – quality exteriors and quality customer service.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Preferred Roofing & Exteriors, LLC was founded with a simple mission: to provide Atlanta homeowners and businesses with exceptional roofing services backed by honest communication and quality workmanship.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                With over 10 years of industry experience, we've built our reputation on customer satisfaction, reliability, and delivering results that stand the test of time. We understand that your roof is one of your most important investments, and we treat it with the care and respect it deserves.
              </p>
              <p className="text-lg text-gray-600">
                Whether it's your roof, siding, or gutters that need repair or replacement, we put our expertise to work so you have an exterior you are not only proud of but that you can trust.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800)' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg text-center"
              >
                <value.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Why Choose Preferred Roofing & Exteriors?
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  title: 'Reputation & Experience',
                  description: 'With over 10 years of industry experience and stellar reputation built on customer satisfaction, Preferred Exteriors is the trusted choice for all of your roofing needs.'
                },
                {
                  title: 'Quality of Workmanship',
                  description: 'Our team of highly skilled and certified roofers takes pride in delivering exceptional workmanship, ensuring that your roof is built to protect your investment for years to come.'
                },
                {
                  title: 'Range of Services',
                  description: 'From roof replacements and repairs to financing, gutter installations, siding, and more, our comprehensive range of services allows us to be your go-to resource for all exterior needs.'
                },
                {
                  title: 'Communication',
                  description: 'We prioritize open and transparent communication with our customers, ensuring that you are informed at every step of the process and have the insight to help you make educated decisions on your project.'
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Experience the Preferred Exteriors difference. Get your free estimate today!
          </p>
          <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
            Get Free Estimate
            <ArrowRight className="ml-2 w-5 h-5 inline" />
          </Link>
        </div>
      </section>
    </div>
  )
}
