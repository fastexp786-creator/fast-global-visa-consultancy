import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, MessageCircle } from 'lucide-react'

const HeroSection = () => {
  const handleAssessmentClick = () => {
    const element = document.getElementById('assessment-form')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your visa consultancy services. Can you provide more information?")
    window.open(`https://wa.me/923001234567?text=${message}`, '_blank')
  }

  return (
    <section className="relative bg-gradient-navy text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-gold/20 border border-gold/50 rounded-full px-4 py-2 mb-6"
            >
              <span className="text-gold text-sm font-semibold">✓ Trusted Visa Consultant Since 2018</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Your Trusted Visa Consultant in
              <span className="block text-gradient-gold">Pakistan</span>
              <span className="text-2xl md:text-3xl lg:text-4xl text-gold-light mt-2 block">
                Specializing in Serbia & Europe
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Professional Documentation Audit & Strategic Guidance for High-Success International Pathways. 
              Navigate your global career journey with expert support.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <button
                onClick={handleAssessmentClick}
                className="btn-gold flex items-center justify-center gap-2 group"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button
                onClick={handleWhatsAppClick}
                className="btn-gold-outline flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-400">90% Success Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-400">5000+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span className="text-gray-400">15+ Countries</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Floating Card */}
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 float-animation">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-10 h-10 text-navy" />
                  </div>
                  <h3 className="text-2xl font-bold text-gold mb-2">24/7 Support</h3>
                  <p className="text-gray-300 mb-6">Get expert guidance anytime, anywhere</p>
                  <div className="flex justify-center gap-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">15+</div>
                      <div className="text-sm text-gray-400">Countries</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">90%</div>
                      <div className="text-sm text-gray-400">Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-gold">5K+</div>
                      <div className="text-sm text-gray-400">Clients</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-gold opacity-20 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#001F3F"/>
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="#D4AF37" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
