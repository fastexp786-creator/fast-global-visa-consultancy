import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'
import { 
  Briefcase, 
  Shield, 
  FileText, 
  Users, 
  CheckCircle,
  Clock,
  Globe,
  Award,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react'

const WorkVisa = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const seoData = {
    title: "European Work Permit Documentation | Serbia & Poland Work Visa Help",
    description: "Get expert guidance on Serbia work visa documentation from Pakistan. Professional audit for Serbian work permits (D-Type) at our 6th Road, Rawalpindi office.",
    keywords: "serbia work permit from pakistan, poland work visa documentation, europe work consultancy, romania work visa, legal work permit guidance",
    canonicalUrl: "https://visaconsultant.fastjobcareer.com/services/work-visa"
  }

  const countries = [
    {
      name: "Serbia",
      flag: "🇷🇸",
      processingTime: "2-3 months",
      successRate: "90%",
      description: "Fast-track work permits with Single Permit system",
      highlights: ["No IELTS Required", "Fast Processing", "Low Investment", "EU Pathway"]
    },
    {
      name: "Poland", 
      flag: "🇵🇱",
      processingTime: "3-4 months",
      successRate: "85%",
      description: "EU work permits with residence benefits",
      highlights: ["EU Member State", "Work Permit", "Family Sponsorship", "PR Opportunities"]
    },
    {
      name: "Romania",
      flag: "🇷🇴", 
      processingTime: "4-5 months",
      successRate: "82%",
      description: "Emerging EU market with skilled worker demand",
      highlights: ["Skilled Worker Focus", "Growing Economy", "EU Access", "Low Competition"]
    }
  ]

  const services = [
    {
      icon: FileText,
      title: "Document Audit",
      description: "We verify and audit your educational documents, experience letters, and police character certificates to ensure embassy compliance."
    },
    {
      icon: Shield,
      title: "Single Permit Guidance", 
      description: "Serbia's new 'Unified Permit' system requires precise documentation - we ensure your file meets all requirements."
    },
    {
      icon: Users,
      title: "Embassy Interview Prep",
      description: "Comprehensive preparation for Serbian Embassy Islamabad interviews with mock sessions and Q&A practice."
    },
    {
      icon: Briefcase,
      title: "Work Contract Review",
      description: "Legal verification of your Serbian employer contract to protect your rights and ensure compliance."
    }
  ]

  const documentChecklist = [
    "Valid Passport (6 months validity)",
    "Educational Degrees (Attested)",
    "Police Character Certificate", 
    "Medical Insurance for Serbia",
    "Work Contract/Offer Letter (Audit required)",
    "Bank Statement (3-6 months)",
    "Professional Experience Letters"
  ]

  const faqs = [
    {
      question: "Is your company registered?",
      answer: "Yes, Fast Global Consultancy (Pvt) Ltd is registered with SECP and operates as a legal documentation consultancy firm."
    },
    {
      question: "What is the success rate for Serbia work visa?",
      answer: "Our documentation audit service has a 90% success rate for Serbian work permit applications when clients follow our guidelines completely."
    },
    {
      question: "Do you guarantee work visas?",
      answer: "No, we provide documentation audit and strategic guidance. Visa decisions are made solely by embassies based on individual merit."
    },
    {
      question: "How long does Serbia work visa processing take?",
      answer: "Typically 2-3 months from application submission, depending on embassy workload and document completeness."
    },
    {
      question: "What documents are required for Serbia work visa?",
      answer: "Valid passport, attested degrees, police certificate, medical insurance, work contract, and financial proof are the main requirements."
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
                <Briefcase className="w-5 h-5 text-gold mr-2" />
                <span className="text-gold font-semibold">Professional Documentation Consultancy</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Serbia Work Visa:
                <span className="block text-gradient-gold mt-2">Professional Documentation & Roadmap</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Navigate the Serbian labor market with precision. Our SECP-registered consultancy provides 
                a complete legal roadmap for your international career through expert documentation audits.
              </p>
              
              <button
                onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                Get Free Serbia Assessment
              </button>
            </motion.div>
          </div>
        </section>

        {/* Why Serbia Section */}
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
                Why <span className="text-gradient-gold">Serbia in 2026?</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Serbia is currently a top destination for Pakistani skilled workers and professionals due to its 
                growing economy and simplified 'Single Permit' system. As a Private Limited Consultancy, 
                we help you prepare a foolproof document file that meets the latest Serbian Embassy standards.
              </p>
            </motion.div>

            {/* Countries Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {countries.map((country, index) => (
                <motion.div
                  key={country.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-5xl text-center mb-4">{country.flag}</div>
                  <h3 className="text-xl font-bold text-navy mb-3 text-center">{country.name}</h3>
                  <p className="text-gray-600 text-center mb-4">{country.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{country.processingTime}</div>
                      <div className="text-xs text-gray-500">Processing Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gold">{country.successRate}</div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {country.highlights.map((highlight, idx) => (
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
                Our Specialized <span className="text-gradient-gold">Consultancy Services</span>
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
                Essential Document <span className="text-gradient-gold">Checklist</span>
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
                    For a complete assessment of your documents, visit our 6th Road office or 
                    schedule a consultation with our experts.
                  </p>
                  <button
                    onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-gold"
                  >
                    Get Document Assessment
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
                Frequently Asked <span className="text-gradient-gold">Questions</span>
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
                Start Your Serbia Work
                <span className="block text-gradient-gold mt-2">Journey Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get a professional documentation audit and strategic guidance for your Serbian work permit application.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Free Serbia Assessment
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/923001234567?text=${encodeURIComponent("Hi! I'm interested in Serbia work visa documentation services.")}`, '_blank')}
                  className="btn-gold-outline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Consultation
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default WorkVisa
