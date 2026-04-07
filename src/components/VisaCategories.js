import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Plane, Users, ArrowRight, Star } from 'lucide-react'

const VisaCategories = () => {
  const categories = [
    {
      icon: Briefcase,
      title: "Work Visa",
      description: "Professional employment opportunities with complete documentation support and employer verification.",
      features: ["Employer Verification", "Work Permit", "Residence Permit", "Family Sponsorship"],
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
      popular: false
    },
    {
      icon: GraduationCap,
      title: "Study Visa",
      description: "Complete admission guidance and student visa processing for top international universities.",
      features: ["University Admission", "Student Visa", "Scholarship Help", "Accommodation Support"],
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200",
      popular: true
    },
    {
      icon: Plane,
      title: "Visit Visa",
      description: "Hassle-free tourist and business visa processing with fast track options available.",
      features: ["Tourist Visa", "Business Visa", "Family Visit", "Multiple Entry"],
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200",
      popular: false
    },
    {
      icon: Users,
      title: "Immigration",
      description: "Permanent residency and citizenship programs with comprehensive legal support.",
      features: ["Permanent Residency", "Citizenship", "Investment Programs", "Family Reunification"],
      color: "bg-orange-50",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
      popular: false
    }
  ]

  const handleCategoryClick = (category) => {
    const element = document.getElementById('assessment-form')
    element?.scrollIntoView({ behavior: 'smooth' })
    
    // Pre-fill form with category
    setTimeout(() => {
      const messageInput = document.querySelector('textarea[name="message"]')
      if (messageInput) {
        messageInput.value = `I'm interested in ${category.title} services. Please provide more information about the process and requirements.`
      }
    }, 500)
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
            <span className="text-gold text-sm font-semibold">PREMIUM SERVICES</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Visa Categories
            <span className="block text-gradient-gold mt-2">Tailored Solutions</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Choose from our comprehensive range of visa services designed to meet your specific needs. 
            Each category includes expert guidance and end-to-end support.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Popular Badge */}
                {category.popular && (
                  <div className="absolute -top-3 -right-3 z-10">
                    <div className="bg-gold text-navy px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      POPULAR
                    </div>
                  </div>
                )}

                {/* Card */}
                <div className={`card-premium ${category.color} ${category.borderColor} h-full cursor-pointer group-hover:shadow-2xl transition-all duration-300`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 ${category.iconColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => handleCategoryClick(category)}
                    className="w-full flex items-center justify-center gap-2 bg-navy text-white py-3 rounded-lg hover:bg-gold hover:text-navy transition-all duration-300 group-hover:translate-y-1"
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-navy rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Not sure which visa you need?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our experts will assess your profile and recommend the best pathway for your international journey.
            </p>
            <button
              onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold"
            >
              Get Free Assessment
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VisaCategories
