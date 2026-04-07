import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'
import { 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock,
  Send,
  CheckCircle,
  Navigation,
  Building
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const seoData = {
    title: "Contact Fast Global Consultancy | 6th Road Rawalpindi Office",
    description: "Visit our SECP-registered consultancy office at 6th Road Rawalpindi. Get expert visa guidance via WhatsApp, phone, or in-person consultation.",
    keywords: "visa consultant rawalpindi, 6th road consultancy, contact fast global, whatsapp visa consultant, office location rawalpindi",
    canonicalUrl: "https://visaconsultant.fastjobcareer.com/contact"
  }

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
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hi! I'm interested in your visa consultancy services. I'd like to schedule a consultation.")
    window.open(`https://wa.me/923319406315?text=${message}`, '_blank')
  }

  const handleDirectionsClick = () => {
    window.open('https://maps.google.com/?q=Taj+Mahal+Plaza+6th+Road+Satellite+Town+Rawalpindi+Pakistan', '_blank')
  }

  const officeInfo = {
    address: "Office No. 13B, 2nd Floor, Taj Mahal Plaza, 6th Road, Satellite Town, Rawalpindi, Pakistan",
    phone: "+92 331 9406315",
    email: "info@fastglobalconsultancy.com",
    hours: "Monday - Saturday: 10:00 AM - 06:00 PM (Closed on Sundays & Public Holidays)",
    coordinates: "33.5651, 73.0169"
  }

  const services = [
    "Work Visa Consultation",
    "Study Visa Guidance", 
    "Visit Visa Processing",
    "Immigration Support",
    "Documentation Audit",
    "General Inquiry"
  ]

  return (
    <>
      <SEOHelmet {...seoData} />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-navy text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center bg-gold/20 border border-gold/50 rounded-full px-6 py-3 mb-8">
                <Building className="w-5 h-5 text-gold mr-2" />
                <span className="text-gold font-semibold">SECP Registered Office</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Visit Our
                <span className="block text-gradient-gold mt-2">6th Road Office</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Expert guidance is just a visit away. Our centrally located office in Rawalpindi 
                provides face-to-face consultations for your visa and immigration needs.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info & Map */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-navy mb-8">
                  Get in <span className="text-gradient-gold">Touch</span>
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Office Address</h3>
                      <p className="text-gray-600">{officeInfo.address}</p>
                      <button
                        onClick={handleDirectionsClick}
                        className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium mt-2"
                      >
                        Get Directions →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Phone</h3>
                      <p className="text-gray-600">{officeInfo.phone}</p>
                      <button
                        onClick={() => window.open(`tel:${officeInfo.phone.replace(/\s/g, '')}`)}
                        className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium mt-2"
                      >
                        Call Now →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Email</h3>
                      <p className="text-gray-600">{officeInfo.email}</p>
                      <button
                        onClick={() => window.open(`mailto:${officeInfo.email}`)}
                        className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium mt-2"
                      >
                        Send Email →
                      </button>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-navy mb-2">Office Hours</h3>
                      <p className="text-gray-600">{officeInfo.hours}</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                    <h3 className="font-bold text-green-800">WhatsApp Support</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Get instant responses and document sharing via WhatsApp for faster consultation.
                  </p>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Message on WhatsApp
                  </button>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-navy mb-8">
                  Office <span className="text-gradient-gold">Location</span>
                </h2>
                
                <div className="bg-gray-100 rounded-2xl overflow-hidden h-96 relative">
                    {/* Placeholder for Google Maps */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <div className="text-center">
                        <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-600 font-medium">Interactive Map</p>
                        <p className="text-gray-500 text-sm">Taj Mahal Plaza, 6th Road, Satellite Town</p>
                        <button
                          onClick={handleDirectionsClick}
                          className="mt-4 text-gold hover:text-gold-light font-medium"
                        >
                          Open in Google Maps →
                        </button>
                      </div>
                    </div>
                  </div>
                
                <div className="mt-6 text-center">
                  <p className="text-gray-600 mb-4">
                    Visit us for personalized consultation and document verification.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Send us a <span className="text-gradient-gold">Message</span>
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-xl p-6 mb-8"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600" />
                      <div>
                        <h3 className="font-semibold text-green-800">Message Sent Successfully!</h3>
                        <p className="text-green-600 text-sm mt-1">
                          We'll contact you within 24 hours.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-white font-bold">!</div>
                      <div>
                        <h3 className="font-semibold text-red-800">Submission Failed</h3>
                        <p className="text-red-600 text-sm mt-1">
                          Please try again or contact us directly.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
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

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                        placeholder="03XX XXXXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a service</option>
                        {services.map(service => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us about your visa requirements..."
                    />
                  </div>

                  <div className="text-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-gold px-8 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-navy border-t-transparent rounded-full animate-spin inline-block mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 inline-block mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="bg-gradient-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Immediate
                <span className="block text-gradient-gold mt-2">Assistance?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Our visa experts are available to provide immediate guidance for your international journey.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="btn-gold"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </button>
                <button
                  onClick={() => window.open(`tel:${officeInfo.phone.replace(/\s/g, '')}`)}
                  className="btn-gold-outline"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Office
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact
