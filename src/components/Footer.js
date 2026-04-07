import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Youtube, ChevronUp, Globe } from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setTimeout(() => setIsSubscribed(false), 3000)
      setEmail('')
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your visa consultancy services.")
    window.open(`https://wa.me/923319406315?text=${message}`, '_blank')
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Countries', href: '#countries' },
    { name: 'Contact', href: '#contact' },
    { name: 'Blog', href: '#blog' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms of Service', href: '#terms' }
  ]

  const services = [
    { name: 'Work Visa', href: '#work-visa' },
    { name: 'Study Visa', href: '#study-visa' },
    { name: 'Visit Visa', href: '#visit-visa' },
    { name: 'Immigration', href: '#immigration' },
    { name: 'Documentation Audit', href: '#audit' },
    { name: 'Case Assessment', href: '#assessment' }
  ]

  const countries = [
    { name: 'Serbia', flag: '🇷🇸' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Gulf Countries', flag: '🇸🇦' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Australia', flag: '🇦🇺' }
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ]

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-navy" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Fast Global</h3>
                <p className="text-xs text-gold">Consultancy</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner for visa consultancy and documentation support. 
              We provide professional guidance for international pathways with proven success rates.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-gold" />
                <span className="text-sm">6th Road, Rawalpindi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-gold" />
                <span className="text-sm">+92 331 9406315</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-gold" />
                <span className="text-sm">info@fastglobalconsultancy.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-gold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-gold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Countries */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-gold mb-6">Newsletter</h4>
            <form onSubmit={handleSubscribe} className="mb-6">
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="px-4 py-2 bg-navy-light border border-gold/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gold transition-colors duration-300"
                  required
                />
                <button
                  type="submit"
                  className="bg-gold text-navy px-4 py-2 rounded-lg font-semibold hover:bg-gold-light transition-all duration-300"
                >
                  Subscribe
                </button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  ✓ Subscribed successfully!
                </motion.p>
              )}
            </form>

            {/* Popular Countries */}
            <div>
              <h5 className="text-sm font-semibold text-gold mb-3">Popular Countries</h5>
              <div className="grid grid-cols-3 gap-2">
                {countries.map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-1 text-gray-300 hover:text-gold transition-colors duration-300 cursor-pointer"
                  >
                    <span className="text-sm">{country.flag}</span>
                    <span className="text-xs">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-gray-300 text-sm">
              © 2026 Fast Global Consultancy (Pvt) Ltd. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-gold/20 text-gold rounded-full flex items-center justify-center hover:bg-gold hover:text-navy transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-navy-light border-t border-gold/20 py-4">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400 text-xs leading-relaxed max-w-4xl mx-auto">
              <strong className="text-gold">Legal Disclaimer:</strong> Fast Global Consultancy (Pvt) Ltd is a private consultancy firm. 
              We provide legal documentation support and guidance. We are not a recruitment agency and do not guarantee visas or jobs. 
              Decisions are subject to Embassy approvals. All services are subject to our terms and conditions.
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gold text-navy rounded-full shadow-lg hover:bg-gold-light transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-24 w-12 h-12 bg-navy text-gold rounded-full shadow-lg hover:bg-navy-light transition-all duration-300 flex items-center justify-center z-40 hover:scale-110"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-5 h-5" />
      </button>
    </footer>
  )
}

export default Footer
