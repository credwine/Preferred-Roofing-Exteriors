import type { Metadata } from 'next'
import Link from 'next/link'
import { Star, Quote, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import PageHero from '@/components/PageHero'

export const metadata: Metadata = {
  title: 'Customer Testimonials | Preferred Roofing & Exteriors | Atlanta, GA',
  description: 'Read what our customers say about Preferred Roofing & Exteriors. Real reviews from satisfied homeowners in Atlanta, GA.',
}

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: 'Stephon Mosley',
      rating: 5,
      text: 'I was recommended by a peer to have my roof replaced by Preferred Exteriors. I must say I am more than happy with the job they did. They replaced my roof and it looks 10x better than it did previously. They also responded and got the job done expeditiously. I would rate their service with 5 stars and recommend everyone to use them!',
      location: 'Atlanta, GA',
      service: 'Roof Replacement'
    },
    {
      name: 'Belinda Sheppard',
      rating: 5,
      text: 'Cameron and his team were outstanding! Cameron was professional and honest in assisting us with our insurance claim. Once approval was received his team went into action installing our roof in one and a half days. They worked tirelessly to finish. After completion of the installation, they cleaned up removing all debris and nails. I rarely give a five-star rating but this group deserves it.',
      location: 'Atlanta, GA',
      service: 'Roof Replacement & Insurance Claims'
    },
    {
      name: 'Kelly Henson',
      rating: 5,
      text: 'Preferred Exteriors was one of the best companies we have ever dealt with. Cameron was knowledgeable, courteous, and efficient, and guided us through the entire experience of getting a new roof and settling with our insurance company. We were very impressed with his expertise and communication skills, as well as the great job that his crew did in replacing the roof. We would highly recommend this company.',
      location: 'Atlanta, GA',
      service: 'Roof Replacement'
    },
    {
      name: 'Michael Thompson',
      rating: 5,
      text: 'Excellent service from start to finish! The team was professional, punctual, and did an amazing job on our roof repair. They explained everything clearly and the pricing was fair. Highly recommend!',
      location: 'Vinings, GA',
      service: 'Roof Repair'
    },
    {
      name: 'Sarah Johnson',
      rating: 5,
      text: 'We needed emergency roof repair after a storm, and Preferred Exteriors responded immediately. They were at our house within hours and had the damage fixed the same day. Outstanding emergency service!',
      location: 'Smyrna, GA',
      service: 'Emergency Roof Repair'
    },
    {
      name: 'David Williams',
      rating: 5,
      text: 'The gutter installation was done perfectly. The team was clean, professional, and the gutters look great. Our drainage issues are completely resolved. Great work!',
      location: 'Sandy Springs, GA',
      service: 'Gutter Installation'
    }
  ]

  return (
    <div className="pt-20">
      <PageHero
        title="Customer Testimonials"
        highlight="Testimonials"
        subtitle="Don't just take our word for it - see what our customers have to say about their experience with Preferred Roofing & Exteriors"
      />

      {/* Testimonials Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                  <div className="text-xs text-primary-600 mt-1">{testimonial.service}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Review CTA */}
      <section className="section-padding bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl font-bold text-gray-900 mb-4">
            Share Your Experience
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            If you've worked with us, we'd love to hear about your experience! Your feedback helps us continue to improve and helps other homeowners make informed decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/Preferred+Roofing+%26+Exteriors,+LLC"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Write a Google Review
            </a>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Join Our Satisfied Customers
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
