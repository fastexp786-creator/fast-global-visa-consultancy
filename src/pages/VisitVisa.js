import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'
import { 
  Plane, 
  Camera, 
  MapPin, 
  Clock, 
  CheckCircle,
  Calendar,
  Shield,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Globe
} from 'lucide-react'

const VisitVisa = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const seoData = {
    title: "Tourist & Business Visit Visa | Fast Processing from Pakistan",
    description: "Expert tourist and business visa preparation for Europe, Gulf, and international destinations. Complete documentation support from our 6th Road Rawalpindi office.",
    keywords: "visit visa from pakistan, tourist visa documentation, business visa consultancy, schengen visa, gulf visit visa, fast track visa",
    canonicalUrl: "https://visaconsultant.fastjobcareer.com/services/visit-visa"
  }

  const visaTypes = [
    {
      name: "Schengen Tourist Visa",
      flag: "🇪🇺",
      processingTime: "15-20 days",
      successRate: "92%",
      description: "Visit 26 European countries with single visa",
      highlights: ["26 Countries", "90 Days Stay", "Multiple Entry", "Fast Processing"]
    },
    {
      name: "UK Visit Visa", 
      flag: "🇬🇧",
      processingTime: "3-4 weeks",
      successRate: "88%",
      description: "Tourist and business visits to United Kingdom",
      highlights: ["6 Months Validity", "Fast Track", "Business Tourism", "Family Visit"]
    },
    {
      name: "Gulf Countries",
      flag: "🇸🇦", 
      processingTime: "5-7 days",
      successRate: "95%",
      description: "Rapid processing for GCC countries",
      highlights: ["Express Processing", "Multiple Entry", "Business Focus", "High Success"]
    },
    {
      name: "Turkey Visit Visa",
      flag: "🇹🇷", 
      processingTime: "7-10 days",
      successRate: "90%",
      description: "E-Visa system for Turkish tourism and business",
      highlights: ["E-Visa System", "Instant Processing", "Tourism Hub", "Business Friendly"]
    }
  ]

  const services = [
    {
      icon: Globe,
      title: "Document Preparation",
      description: "Complete preparation of passport copies, photographs, bank statements, and travel itineraries."
    },
    {
      icon: Calendar,
      title: "Itinerary Planning", 
      description: "Professional travel itinerary, hotel bookings, and flight reservations for visa applications."
    },
    {
      icon: Shield,
      title: "Interview Preparation",
      description: "Mock interview sessions and guidance for embassy visit preparation."
    },
    {
      icon: Clock,
      title: "Fast Track Processing",
      description: "Expedited processing options and priority appointment scheduling."
    }
  ]

  const documentChecklist = [
    "Valid Passport (6+ months validity)",
    "Recent Passport-size Photographs",
    "Bank Statement (3-6 months)",
    "Travel Itinerary/Flight Booking",
    "Hotel Reservations",
    "Travel Medical Insurance",
    "Employment Verification (Business Visa)",
    "Invitation Letter (if applicable)"
  ]

  const faqs = [
    {
      question: "Is your company registered for visit visa consultancy?",
      answer: "Yes, Fast Global Consultancy (Pvt) Ltd is SECP-registered and provides legal documentation guidance for visit visas."
    },
    {
      question: "How long does Schengen visa processing take?",
      answer: "Typically 15-20 working days from application submission, depending on embassy workload and season."
    },
    {
      question: "What is the success rate for visit visas?",
      answer: "Our documentation preparation has a 92% success rate for Schengen visas and 95% for Gulf countries when guidelines are followed."
    },
    {
      question: "Do you guarantee visit visa approval?",
      answer: "No, we provide document preparation and guidance. Visa decisions are made solely by embassies based on individual applications."
    },
    {
      question: "Which countries can I visit with Schengen visa?",
      answer: "26 European countries including France, Germany, Italy, Spain, Netherlands, and many more for tourism and business."
    }
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

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
                <Plane className="w-5 h-5 text-gold mr-2" />
                <span className="text-gold font-semibold">Visit Visa Consultancy</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Tourist & Business
                <span className="block text-gradient-gold mt-2">Visit Visa Services</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Hassle-free tourist and business visa processing with fast track options. 
                Professional document preparation for international travel from our SECP-registered consultancy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Visit Visa Assessment
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/923001234567?text=${encodeURIComponent("Hi! I need help with visit visa documentation.")}`, '_blank')}
                  className="btn-gold-outline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Fast Track
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Visa Types Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Popular Visit <span className="text-gradient-gold">Destinations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We specialize in visit visa documentation for major tourist and business destinations 
                with high success rates and fast processing times.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {visaTypes.map((visa, index) => (
                <motion.div
                  key={visa.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-4xl text-center mb-4">{visa.flag}</div>
                  <h3 className="text-lg font-bold text-navy mb-3 text-center">{visa.name}</h3>
                  <p className="text-gray-600 text-center mb-4 text-sm">{visa.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{visa.processingTime}</div>
                      <div className="text-xs text-gray-500">Processing Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{visa.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {visa.highlights.map((highlight, idx) => (
                      <span key={idx} className="text-xs bg-gold/20 text-gold px-2 py-1 rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Visit Visa <span className="text-gradient-gold">Services</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-gold" />
                    </div>
                    <h3 className="text-lg font-bold text-navy mb-3">{service.title}</h3>
                    <p className="text-gray-600 text-sm">{service.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Document Checklist */}
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
                Essential Visit <span className="text-gradient-gold">Documents</span>
              </h2>
              
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-4">
                  {documentChecklist.map((doc, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{doc}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-gray-600 mb-6">
                    Our experts ensure all documents meet embassy requirements for maximum approval chances.
                  </p>
                  <button
                    onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-gold"
                  >
                    Get Document Review
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                Visit Visa <span className="text-gradient-gold">FAQs</span>
              </h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                    >
                      <span className="font-semibold text-navy">{faq.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gold" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gold" />
                      )}
                    </button>
                    
                    {expandedFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-4"
                      >
                        <p className="text-gray-600">{faq.answer}</p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-navy text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Start Your Journey
                <span className="block text-gradient-gold mt-2">Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get professional visit visa documentation and fast-track processing for your international travel.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Free Visit Visa Assessment
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="btn-gold-outline"
                >
                  Visit Our Office
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default VisitVisa
