import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'
import { 
  Users, 
  Globe, 
  Award, 
  CheckCircle,
  Clock,
  Target,
  Shield,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  TrendingUp,
  Home
} from 'lucide-react'

const Immigration = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const seoData = {
    title: "Canada & Australia Immigration | Skilled Migration from Pakistan",
    description: "Expert guidance for Canada Express Entry and Australia skilled migration. Complete PR roadmap from our SECP-registered Rawalpindi consultancy.",
    keywords: "canada immigration from pakistan, australia skilled migration, express entry, permanent residency, skilled worker visa, immigration consultancy",
    canonicalUrl: "https://visaconsultant.fastjobcareer.com/services/immigration"
  }

  const countries = [
    {
      name: "Canada",
      flag: "🇨🇦",
      processingTime: "6-12 months",
      successRate: "85%",
      description: "Express Entry and Provincial Nominee Programs",
      highlights: ["Express Entry", "PR Pathway", "Family Sponsorship", "High Standard of Living"]
    },
    {
      name: "Australia", 
      flag: "🇦🇺",
      processingTime: "8-14 months",
      successRate: "82%",
      description: "Skilled Migration and Employer Sponsored visas",
      highlights: ["Points System", "Skilled Migration", "Regional Opportunities", "PR Pathway"]
    },
    {
      name: "New Zealand",
      flag: "🇳🇿", 
      processingTime: "6-9 months",
      successRate: "80%",
      description: "Skilled Migrant Category and Resident visas",
      highlights: ["Skilled Migrant", "Work to Residence", "Points Based", "Quality Life"]
    }
  ]

  const services = [
    {
      icon: Target,
      title: "Eligibility Assessment",
      description: "Comprehensive evaluation of your profile against immigration point systems and requirements."
    },
    {
      icon: Shield,
      title: "Documentation Strategy", 
      description: "Strategic preparation of all required documents including educational assessments and work experience verification."
    },
    {
      icon: Award,
      title: "Application Management",
      description: "Complete handling of your immigration application from submission to approval."
    },
    {
      icon: Home,
      title: "Settlement Support",
      description: "Guidance for post-landing procedures, job search, and community integration."
    }
  ]

  const documentChecklist = [
    "Valid Passport (6+ months validity)",
    "Educational Credential Assessment (ECA)",
    "Language Test Results (IELTS/CELPIP/TOEFL)",
    "Work Experience References",
    "Police Clearance Certificates",
    "Medical Examination Results",
    "Proof of Funds",
    "Expression of Interest (EOI)"
  ]

  const faqs = [
    {
      question: "Is your company registered for immigration consultancy?",
      answer: "Yes, Fast Global Consultancy (Pvt) Ltd is SECP-registered and provides legal guidance for immigration processes."
    },
    {
      question: "What is Canada Express Entry?",
      answer: "Express Entry is Canada's online immigration system for skilled workers. Candidates are ranked based on age, education, experience, and language skills."
    },
    {
      question: "How many points are needed for Australia?",
      answer: "Australia requires minimum 65 points for skilled migration, but competitive occupations typically need 80-90+ points for invitation."
    },
    {
      question: "Do you guarantee immigration approval?",
      answer: "No, we provide documentation guidance and strategic advice. Immigration decisions are made solely by immigration authorities."
    },
    {
      question: "What is the processing time for PR?",
      answer: "Canada Express Entry: 6 months, Australia: 8-14 months, New Zealand: 6-9 months depending on visa category and completeness."
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
                <Globe className="w-5 h-5 text-gold mr-2" />
                <span className="text-gold font-semibold">Immigration Consultancy</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Skilled Migration:
                <span className="block text-gradient-gold mt-2">Canada & Australia PR</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Navigate the complex immigration pathways with expert guidance. Our SECP-registered 
                consultancy provides strategic roadmaps for permanent residency in top destinations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Free Immigration Assessment
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/923001234567?text=${encodeURIComponent("Hi! I need help with Canada/Australia immigration guidance.")}`, '_blank')}
                  className="btn-gold-outline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Immigration Expert
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Countries Section */}
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
                Popular Immigration <span className="text-gradient-gold">Destinations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We specialize in skilled migration pathways with comprehensive support for 
                permanent residency applications and settlement assistance.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
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
                Immigration <span className="text-gradient-gold">Services</span>
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

        {/* Immigration Process */}
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
                Immigration <span className="text-gradient-gold">Process</span>
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "1", title: "Profile Assessment", desc: "Evaluate your eligibility against point systems" },
                  { step: "2", title: "Document Preparation", desc: "Gather and verify all required documents" },
                  { step: "3", title: "Application Submission", desc: "Submit complete application with supporting evidence" },
                  { step: "4", title: "Approval & Landing", desc: "Receive approval and prepare for settlement" }
                ].map((item, index) => (
                  <motion.div
                    key={item.step}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-navy mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Document Checklist */}
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
                Immigration <span className="text-gradient-gold">Documents</span>
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
                    Our immigration experts ensure your document portfolio meets all requirements for maximum approval chances.
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
                Immigration <span className="text-gradient-gold">FAQs</span>
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
                Start Your PR
                <span className="block text-gradient-gold mt-2">Journey Today</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get expert guidance for skilled migration and permanent residency pathways in top destinations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Free Immigration Assessment
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

export default Immigration
