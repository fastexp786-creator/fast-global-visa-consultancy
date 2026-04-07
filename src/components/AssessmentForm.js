import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { createConsultancyLead } from '../supabase'
import { User, Phone, Mail, GraduationCap, Globe, DollarSign, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react'

const AssessmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    education: '',
    country_interest: '',
    budget_range: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const countries = [
    'Serbia', 'Poland', 'Germany', 'Gulf Countries', 'Canada', 
    'Australia', 'United Kingdom', 'United States', 'Netherlands', 'Other'
  ]

  const educationLevels = [
    'Matriculation', 'Intermediate', 'Bachelor\'s Degree', 
    'Master\'s Degree', 'PhD', 'Diploma', 'Other'
  ]

  const budgetRanges = [
    'Under 5 Lakhs', '5-10 Lakhs', '10-20 Lakhs', 
    '20-50 Lakhs', 'Above 50 Lakhs', 'Discuss Later'
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Save to Supabase
      const result = await createConsultancyLead(formData)
      
      if (result.success) {
        setSubmitStatus('success')
        
        // Redirect to WhatsApp with user data
        const whatsappMessage = encodeURIComponent(
          `🇵🇰 Fast Global Consultancy - New Assessment\n\n` +
          `👤 Name: ${formData.name}\n` +
          `📱 WhatsApp: ${formData.whatsapp}\n` +
          `📧 Email: ${formData.email}\n` +
          `🎓 Education: ${formData.education}\n` +
          `🌍 Country Interest: ${formData.country_interest}\n` +
          `💰 Budget Range: ${formData.budget_range}\n` +
          `💬 Message: ${formData.message}\n\n` +
          `Please provide guidance for my visa application process.`
        )
        
        // Open WhatsApp after a short delay
        setTimeout(() => {
          window.open(`https://wa.me/923319406315?text=${whatsappMessage}`, '_blank')
        }, 2000)
        
        // Reset form
        setFormData({
          name: '',
          whatsapp: '',
          email: '',
          education: '',
          country_interest: '',
          budget_range: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="assessment-form" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-4 h-4 text-gold mr-2" />
              <span className="text-gold text-sm font-semibold">FREE ASSESSMENT</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Get Your Free
              <span className="block text-gradient-gold mt-2">Visa Assessment</span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Fill out the form below and our experts will contact you within 24 hours 
              with personalized guidance for your visa application.
            </p>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            {/* Success Message */}
            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <h3 className="font-semibold text-green-800">Assessment Submitted Successfully!</h3>
                    <p className="text-green-600 text-sm mt-1">
                      Redirecting you to WhatsApp for immediate assistance...
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8"
              >
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-6 h-6 text-red-600" />
                  <div>
                    <h3 className="font-semibold text-red-800">Submission Failed</h3>
                    <p className="text-red-600 text-sm mt-1">
                      Please try again or contact us directly on WhatsApp.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Two Column Layout */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <User className="w-4 h-4 text-gold" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* WhatsApp Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Phone className="w-4 h-4 text-gold" />
                    WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    placeholder="03XX XXXXXXX"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Mail className="w-4 h-4 text-gold" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Education Field */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <GraduationCap className="w-4 h-4 text-gold" />
                    Education Level *
                  </label>
                  <select
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Education Level</option>
                    {educationLevels.map(level => (
                      <option key={level} value={level}>{level}</option>
                    ))}
                  </select>
                </div>

                {/* Country Interest */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <Globe className="w-4 h-4 text-gold" />
                    Country Interest *
                  </label>
                  <select
                    name="country_interest"
                    value={formData.country_interest}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Country</option>
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                    <DollarSign className="w-4 h-4 text-gold" />
                    Budget Range *
                  </label>
                  <select
                    name="budget_range"
                    value={formData.budget_range}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select Budget Range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                  <MessageSquare className="w-4 h-4 text-gold" />
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your specific requirements or questions..."
                />
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold inline-flex items-center gap-2 px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Submit Assessment
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  By submitting this form, you agree to be contacted via WhatsApp and email.
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AssessmentForm
