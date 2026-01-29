import Link from 'next/link'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Roof Replacement', href: '/services/roof-replacement' },
    { name: 'Roof Repair', href: '/services/roof-repair' },
    { name: 'Roof Inspection', href: '/services/roof-inspection' },
    { name: 'Gutter Services', href: '/services/gutters' },
    { name: 'Siding Services', href: '/services/siding' },
    { name: 'Emergency Roofing', href: '/services/emergency' },
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Work', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Insurance Claims', href: '/insurance-claims' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-accent-400" aria-hidden="true" />
      <div className="container-custom section-padding pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info - logo only to match header */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">PE</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Your trusted roofing partner in Atlanta, Georgia. 10+ years of experience delivering quality workmanship and exceptional customer service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-white text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:7063469577"
                  className="flex items-start space-x-3 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>(706) 346-9577</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@preferredexteriors.com"
                  className="flex items-start space-x-3 text-sm text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>info@preferredexteriors.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start space-x-3 text-sm text-gray-400">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span>Atlanta, Georgia<br />Serving Metro Atlanta & Surrounding Areas</span>
                </div>
              </li>
            </ul>
            <div className="mt-6">
              <Link href="/contact" className="btn-primary text-sm">
                Get Free Estimate
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Preferred Exteriors. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-500 text-center">
            Licensed & Insured | Georgia Roofing Contractor
          </div>
        </div>
      </div>
    </footer>
  )
}
