'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Services', href: '/services', submenu: [
      { name: 'Roof Replacement', href: '/services/roof-replacement' },
      { name: 'Roof Repair', href: '/services/roof-repair' },
      { name: 'Roof Inspection', href: '/services/roof-inspection' },
      { name: 'Gutter Services', href: '/services/gutters' },
      { name: 'Siding Services', href: '/services/siding' },
      { name: 'Emergency Roofing', href: '/services/emergency' },
    ]},
    { name: 'Insurance Claims', href: '/insurance-claims' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">PE</span>
            </div>
            <div>
              <div className="font-display font-bold text-xl text-gray-900 group-hover:text-primary-600 transition-colors">
                Preferred Exteriors
              </div>
              <div className="text-xs text-gray-600">Atlanta, GA Roofing Experts</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors relative group"
              >
                {link.name}
                {link.submenu && (
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all group-hover:w-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:7063469577"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>(706) 346-9577</span>
            </a>
            <Link href="/contact" className="btn-primary">
              Free Estimate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <nav className="container-custom py-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                  {link.submenu && (
                    <div className="pl-4 space-y-1">
                      {link.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-1 text-sm text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a
                  href="tel:7063469577"
                  className="flex items-center space-x-2 text-primary-600 font-semibold"
                >
                  <Phone className="w-5 h-5" />
                  <span>(706) 346-9577</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Free Estimate
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
