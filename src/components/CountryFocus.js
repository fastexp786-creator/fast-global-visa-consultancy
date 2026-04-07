import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Globe, Users, Briefcase } from 'lucide-react'

const CountryFocus = () => {
  const countries = [
    {
      name: "Serbia",
      flag: "🇷🇸",
      description: "Fast-track work permits and business opportunities",
      visaTypes: ["Work Visa", "Business Visa", "Student Visa"],
      processingTime: "2-3 months",
      successRate: "90%",
      highlights: ["No IELTS Required", "Fast Processing", "Low Investment"],
      color: "bg-red-50",
      borderColor: "border-red-200",
      popular: true
    },
    {
      name: "Poland",
      flag: "🇵🇱",
      description: "EU work permits with residence benefits",
      visaTypes: ["Work Visa", "Seasonal Work", "Family Reunification"],
      processingTime: "3-4 months",
      successRate: "85%",
      highlights: ["EU Member State", "Work Permit", "Family Sponsorship"],
      color: "bg-white-red-50",
      borderColor: "border-red-200",
      popular: false
    },
    {
      name: "Germany",
      flag: "🇩🇪",
      description: "Skilled worker visas and job seeker permits",
      visaTypes: ["Job Seeker Visa", "Work Visa", "Study Visa"],
      processingTime: "4-6 months",
      successRate: "88%",
      highlights: ["Skilled Worker Focus", "High Salary", "PR Opportunities"],
      color: "bg-black-yellow-50",
      borderColor: "border-yellow-200",
      popular: false
    },
    {
      name: "Gulf Countries",
      flag: "🇸🇦",
      description: "Premium Gulf employment opportunities",
      visaTypes: ["Employment Visa", "Business Visa", "Family Visa"],
      processingTime: "1-2 months",
      successRate: "95%",
      highlights: ["Tax-Free Income", "Luxury Lifestyle", "Fast Processing"],
      color: "bg-green-50",
      borderColor: "border-green-200",
      popular: false
    }
  ]

  const handleCountryClick = (country) => {
    const element = document.getElementById('assessment-form')
    element?.scrollIntoView({ behavior: 'smooth' })
    
    setTimeout(() => {
      const countrySelect = document.querySelector('select[name="country_interest"]')
      if (countrySelect) {
        countrySelect.value = country.name
      }
      
      const messageInput = document.querySelector('textarea[name="message"]')
      if (messageInput) {
        messageInput.value = `I'm interested in ${country.name} visa services. Please provide information about ${country.visaTypes.join(', ')} options.`
      }
    }, 500)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
            <Globe className="w-4 h-4 text-gold mr-2" />
            <span className="text-gold text-sm font-semibold">COUNTRY FOCUS</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Popular Destinations
            <span className="block text-gradient-gold mt-2">Expert Guidance Available</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in visa processing for these high-demand destinations with proven success rates 
            and comprehensive support throughout your application journey.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              {/* Popular Badge */}
              {country.popular && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold">
                    MOST POPULAR
                  </div>
                </div>
              )}

              {/* Country Card */}
              <div className={`card-premium ${country.color} ${country.borderColor} h-full relative overflow-hidden`}>
                {/* Flag Circle */}
                <div className="text-6xl text-center mb-4 text-5xl">
                  {country.flag}
                </div>

                {/* Country Name */}
                <h3 className="text-xl font-bold text-navy mb-2 text-center group-hover:text-gold transition-colors duration-300">
                  {country.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {country.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-navy">{country.processingTime}</div>
                    <div className="text-xs text-gray-500">Processing Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-gold">{country.successRate}</div>
                    <div className="text-xs text-gray-500">Success Rate</div>
                  </div>
                </div>

                {/* Visa Types */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Available Visas:</div>
                  <div className="space-y-1">
                    {country.visaTypes.map((visa, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        <span className="text-xs text-gray-600">{visa}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {country.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleCountryClick(country)}
                  className="w-full flex items-center justify-center gap-2 bg-navy text-white py-2 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 text-sm"
                >
                  Explore {country.name}
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-navy rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Globe className="w-8 h-8 text-gold" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gold mb-2">15+</h3>
              <p className="text-gray-300">Countries Covered</p>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-gold" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gold mb-2">5000+</h3>
              <p className="text-gray-300">Successful Applications</p>
            </div>
            
            <div>
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-gold" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gold mb-2">90%</h3>
              <p className="text-gray-300">Average Success Rate</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CountryFocus
