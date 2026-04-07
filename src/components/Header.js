import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, MessageCircle, Mail, MapPin, ChevronDown, Globe } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCountriesDropdownOpen, setIsCountriesDropdownOpen] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your visa consultancy services. Can you provide more information?")
    window.open(`https://wa.me/923319406315?text=${message}`, '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+923319406315')
  }

  const countries = [
    { name: 'Serbia', flag: '🇷🇸', description: 'Fast-track work permits' },
    { name: 'Poland', flag: '🇵🇱', description: 'EU work permits' },
    { name: 'Germany', flag: '🇩🇪', description: 'Skilled worker visas' },
    { name: 'Gulf Countries', flag: '🇸🇦', description: 'Premium employment' },
    { name: 'Canada', flag: '🇨🇦', description: 'Express entry program' },
    { name: 'Australia', flag: '🇦🇺', description: 'Skilled migration' }
  ]

  const services = [
    { name: 'Documentation Audit', description: 'Complete document verification' },
    { name: 'Case Assessment', description: 'Profile evaluation & guidance' },
    { name: 'Interview Preparation', description: 'Embassy interview coaching' },
    { name: 'Policy Guidance', description: 'Latest visa updates & rules' }
  ]

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Countries', hasDropdown: true, dropdown: 'countries' },
    { name: 'Services', hasDropdown: true, dropdown: 'services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gold text-navy py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">Office: 6th Road, Rawalpindi</span>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={handleCallClick}
                className="flex items-center gap-1 hover:underline font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>+92 331 9406315</span>
              </button>
              
              <button
                onClick={() => window.location.href = 'mailto:info@fastglobalconsultancy.com'}
                className="flex items-center gap-1 hover:underline font-medium"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">FVS@fastjobcareer.com</span>
                <span className="sm:hidden">Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-navy shadow-lg' : 'bg-navy'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-navy" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white">Fast Global Visa</h1>
                  <p className="text-xs text-gold">Consultancy</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      className="flex items-center gap-1 text-white hover:text-gold transition-colors duration-300 font-medium"
                      onMouseEnter={() => {
                        if (link.dropdown === 'countries') setIsCountriesDropdownOpen(true)
                        if (link.dropdown === 'services') setIsServicesDropdownOpen(true)
                      }}
                      onMouseLeave={() => {
                        if (link.dropdown === 'countries') setIsCountriesDropdownOpen(false)
                        if (link.dropdown === 'services') setIsServicesDropdownOpen(false)
                      }}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <a
                      href={link.href}
                      className="text-white hover:text-gold transition-colors duration-300 font-medium"
                    >
                      {link.name}
                    </a>
                  )}

                  {/* Countries Dropdown */}
                  {link.dropdown === 'countries' && isCountriesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-4"
                      onMouseEnter={() => setIsCountriesDropdownOpen(true)}
                      onMouseLeave={() => setIsCountriesDropdownOpen(false)}
                    >
                      {countries.map((country, index) => (
                        <a
                          key={country.name}
                          href="/services/work-visa"
                          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <span className="text-2xl">{country.flag}</span>
                          <div>
                            <div className="font-medium text-navy">{country.name}</div>
                            <div className="text-sm text-gray-600">{country.description}</div>
                          </div>
                        </a>
                      ))}
                    </motion.div>
                  )}

                  {/* Services Dropdown */}
                  {link.dropdown === 'services' && isServicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl py-4"
                      onMouseEnter={() => setIsServicesDropdownOpen(true)}
                      onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                      {services.map((service, index) => (
                        <a
                          key={service.name}
                          href={
                            service.name === 'Work Visa' ? '/services/work-visa' :
                            service.name === 'Study Visa' ? '/services/study-visa' :
                            service.name === 'Visit Visa' ? '/services/visit-visa' :
                            '/services/immigration'
                          }
                          className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="font-medium text-navy">{service.name}</div>
                          <div className="text-sm text-gray-600">{service.description}</div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}

              {/* WhatsApp CTA */}
              <button
                onClick={handleWhatsAppClick}
                className="bg-gold text-navy px-4 py-2 rounded-lg font-semibold hover:bg-gold-light transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-navy border-t border-gold/20"
            >
              <div className="container mx-auto px-4 py-4">
                <nav className="space-y-4">
                  {navLinks.map((link) => (
                    <div key={link.name}>
                      {link.hasDropdown ? (
                        <div>
                          <button
                            className="flex items-center justify-between w-full text-white hover:text-gold transition-colors duration-300 font-medium py-2"
                            onClick={() => {
                              if (link.dropdown === 'countries') setIsCountriesDropdownOpen(!isCountriesDropdownOpen)
                              if (link.dropdown === 'services') setIsServicesDropdownOpen(!isServicesDropdownOpen)
                            }}
                          >
                            {link.name}
                            <ChevronDown className="w-4 h-4" />
                          </button>
                          
                          {/* Mobile Dropdowns */}
                          {link.dropdown === 'countries' && isCountriesDropdownOpen && (
                            <div className="pl-4 space-y-2">
                              {countries.map((country) => (
                                <a
                                  key={country.name}
                                  href={`#country-${country.name.toLowerCase().replace(' ', '-')}`}
                                  className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors duration-200 py-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <span className="text-xl">{country.flag}</span>
                                  <div>
                                    <div className="font-medium">{country.name}</div>
                                    <div className="text-sm text-gray-400">{country.description}</div>
                                  </div>
                                </a>
                              ))}
                            </div>
                          )}
                          
                          {link.dropdown === 'services' && isServicesDropdownOpen && (
                            <div className="pl-4 space-y-2">
                              {services.map((service) => (
                                <a
                                  key={service.name}
                                  href={`#service-${service.name.toLowerCase().replace(' ', '-')}`}
                                  className="block text-gray-300 hover:text-gold transition-colors duration-200 py-2"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  <div className="font-medium">{service.name}</div>
                                  <div className="text-sm text-gray-400">{service.description}</div>
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <a
                          href={link.href}
                          className="block text-white hover:text-gold transition-colors duration-300 font-medium py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </a>
                      )}
                    </div>
                  ))}
                  
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gold text-navy px-4 py-3 rounded-lg font-semibold hover:bg-gold-light transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Us
                  </button>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Latest News Ticker */}
      <div className="bg-navy-light border-y border-gold/20 py-2 overflow-hidden">
        <div className="relative">
          <div className="flex animate-scroll">
            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-gold font-semibold">🔔 Latest Visa Updates:</span>
              <span className="text-gray-300">• Serbia Work Visa Intake Open 2026</span>
              <span className="text-gray-300">• New Netherlands Study Visa Requirements</span>
              <span className="text-gray-300">• Canada Express Entry Draw Results</span>
              <span className="text-gray-300">• Germany Job Seeker Visa Updates</span>
              <span className="text-gray-300">• Gulf Employment Visa Fast Track</span>
              <span className="text-gray-300">• Poland Seasonal Work Program 2026</span>
            </div>
            <div className="flex items-center gap-8 whitespace-nowrap">
              <span className="text-gold font-semibold">🔔 Latest Visa Updates:</span>
              <span className="text-gray-300">• Serbia Work Visa Intake Open 2026</span>
              <span className="text-gray-300">• New Netherlands Study Visa Requirements</span>
              <span className="text-gray-300">• Canada Express Entry Draw Results</span>
              <span className="text-gray-300">• Germany Job Seeker Visa Updates</span>
              <span className="text-gray-300">• Gulf Employment Visa Fast Track</span>
              <span className="text-gray-300">• Poland Seasonal Work Program 2026</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </>
  )
}

export default Header
