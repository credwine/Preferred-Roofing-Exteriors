import Link from 'next/link'
import { ArrowRight, CheckCircle, Shield, Clock, Award, Phone, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function HomePage() {
  const services = [
    {
      title: 'Roof Replacement',
      description: 'Expert roof replacement using quality materials for long-lasting protection.',
      icon: Shield,
      href: '/services/roof-replacement',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800'
    },
    {
      title: 'Roof Repair',
      description: 'Fast and reliable repairs for leaks, missing shingles, and structural issues.',
      icon: Shield,
      href: '/services/roof-repair',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800'
    },
    {
      title: 'Roof Inspection',
      description: 'Thorough inspections to identify damage and help you make informed decisions.',
      icon: CheckCircle,
      href: '/services/roof-inspection',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      title: 'Gutter Services',
      description: 'Professional installation, repair, and cleaning for proper drainage.',
      icon: Shield,
      href: '/services/gutters',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800'
    },
    {
      title: 'Siding Services',
      description: 'Quality siding installation and repair to enhance appearance and protection.',
      icon: Shield,
      href: '/services/siding',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800'
    },
    {
      title: 'Emergency Roofing',
      description: '24/7 emergency response for urgent roofing issues and storm damage.',
      icon: Clock,
      href: '/services/emergency',
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800'
    },
  ]

  const benefits = [
    {
      icon: Award,
      title: '10+ Years Experience',
      description: 'Proven track record of excellence in Atlanta'
    },
    {
      icon: Shield,
      title: 'Licensed & Insured',
      description: 'Fully licensed and comprehensively insured'
    },
    {
      icon: CheckCircle,
      title: 'Quality Workmanship',
      description: 'Certified roofers with exceptional skills'
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Same-day or next-day emergency service'
    },
  ]

  const testimonials = [
    {
      name: 'Stephon Mosley',
      rating: 5,
      text: 'I was recommended by a peer to have my roof replaced by Preferred Exteriors. I must say I am more than happy with the job they did. They replaced my roof and it looks 10x better than it did previously. They also responded and got the job done expeditiously.',
      location: 'Atlanta, GA'
    },
    {
      name: 'Belinda Sheppard',
      rating: 5,
      text: 'Cameron and his team were outstanding! Cameron was professional and honest in assisting us with our insurance claim. Once approval was received his team went into action installing our roof in one and a half days. They worked tirelessly to finish.',
      location: 'Atlanta, GA'
    },
    {
      name: 'Kelly Henson',
      rating: 5,
      text: 'Preferred Exteriors was one of the best companies we have ever dealt with. Cameron was knowledgeable, courteous, and efficient, and guided us through the entire experience of getting a new roof and settling with our insurance company.',
      location: 'Atlanta, GA'
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section – your roof image, no overlays, text shadow for readability */}
      <section className="relative text-white overflow-hidden py-24 md:py-32 lg:py-40 min-h-[520px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/images/2022-02-21.webp)',
            filter: 'brightness(1.05) contrast(1.02)',
          }}
        />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div
              className="inline-block px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full text-sm font-semibold mb-6"
              style={{ textShadow: '0 1px 4px rgba(0,0,0,0.8)' }}
            >
              Atlanta's Trusted Roofing Experts
            </div>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              style={{ textShadow: '0 2px 12px rgba(0,0,0,0.9), 0 0 2px rgba(0,0,0,0.8)' }}
            >
              Top-Rated Roofing Contractor in{' '}
              <span className="text-accent-300">Atlanta, GA</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 leading-relaxed px-5 py-3 rounded-lg inline-block"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                color: 'rgba(255,255,255,0.98)',
                textShadow: '0 1px 3px rgba(0,0,0,0.5)',
              }}
            >
              Residential & Commercial Roofing Experts | 10+ Years Experience | Licensed & Insured | 0% Financing Available
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 text-lg px-8 py-4 inline-flex items-center justify-center shadow-lg">
                Get Free Estimate
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href="tel:7063469577"
                className="btn-secondary border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 inline-flex items-center justify-center shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                (706) 346-9577
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 text-sm" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.9)' }}>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-300" />
                Free Inspections
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-300" />
                Insurance Claims Help
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2 text-accent-300" />
                Same-Day Response
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50 py-12 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Comprehensive roofing and exterior solutions for your home or business in Atlanta and surrounding areas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <service.icon className="w-10 h-10 text-white mb-2" />
                    <h3 className="font-display text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group-hover:gap-2 transition-all"
                  >
                    Learn More
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Atlanta Homeowners Choose Preferred Roofing & Exteriors
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We are Atlanta's trusted roof replacement experts, providing high-quality, reliable solutions for homes and businesses. With over 10 years of experience, we prioritize both the longevity and protection of your property.
              </p>
              
              <div className="space-y-4">
                {[
                  'Reputation & Experience - 10+ years with stellar customer satisfaction',
                  'Quality Workmanship - Highly skilled and certified roofers',
                  'Range of Services - From replacements to financing and more',
                  'Communication - Transparent communication at every step'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div 
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800)' }}
                ></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-4xl font-bold text-primary-600 mb-1">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Don't just take our word for it - see what Atlanta homeowners have to say about our work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials" className="btn-secondary">
              View All Testimonials
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our estimates are free! All you need to do is call or fill out our contact form. We're here to help protect your biggest investment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Get Free Estimate
            </Link>
            <a
              href="tel:7063469577"
              className="btn-secondary border-white text-white hover:bg-white/10"
            >
              <Phone className="mr-2 w-5 h-5 inline" />
              (706) 346-9577
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
