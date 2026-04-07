import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'
import { 
  GraduationCap, 
  BookOpen, 
  Award, 
  Globe, 
  CheckCircle,
  Clock,
  Users,
  Target,
  Shield,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Star
} from 'lucide-react'

const StudyVisa = () => {
  const [expandedFaq, setExpandedFaq] = useState(null)

  const seoData = {
    title: "Study in Europe from Pakistan | Affordable University Admissions",
    description: "Get expert guidance for Netherlands, Germany and Serbia university admissions and visa processing. Complete documentation support from our 6th Road Rawalpindi office.",
    keywords: "study visa from pakistan, netherlands university admission, germany student visa, serbia study visa, europe education consultancy",
    canonicalUrl: "https://visaconsultant.fastjobcareer.com/services/study-visa"
  }

  const countries = [
    {
      name: "Netherlands",
      flag: "🇳🇱",
      processingTime: "3-4 months",
      successRate: "88%",
      description: "Top-ranked universities with English programs",
      highlights: ["English Taught", "Part-time Work", "Post-study Work Permit", "High Quality Education"]
    },
    {
      name: "Germany", 
      flag: "🇩🇪",
      processingTime: "4-6 months",
      successRate: "85%",
      description: "Free education with strong engineering programs",
      highlights: ["No Tuition Fees", "Research Excellence", "Strong Economy", "PR Opportunities"]
    },
    {
      name: "Serbia",
      flag: "🇷🇸", 
      processingTime: "2-3 months",
      successRate: "90%",
      description: "Affordable education with growing recognition",
      highlights: ["Low Cost", "Fast Processing", "English Programs", "EU Pathway"]
    }
  ]

  const services = [
    {
      icon: GraduationCap,
      title: "University Admission",
      description: "Complete guidance for university selection, application submission, and admission letter acquisition."
    },
    {
      icon: BookOpen,
      title: "Document Preparation", 
      description: "Professional preparation of academic transcripts, recommendation letters, and statement of purpose."
    },
    {
      icon: Award,
      title: "Scholarship Assistance",
      description: "Help identify and apply for scholarships, grants, and financial aid opportunities."
    },
    {
      icon: Globe,
      title: "Accommodation Support",
      description: "Guidance for student housing, dormitories, and private rental options."
    }
  ]

  const documentChecklist = [
    "Valid Passport (6 months validity)",
    "Academic Transcripts (Attested)",
    "Degree Certificates",
    "Language Proficiency Test (IELTS/TOEFL)",
    "Statement of Purpose (SOP)",
    "Letters of Recommendation",
    "Financial Proof/Sponsorship Letter",
    "Medical Insurance Coverage"
  ]

  const faqs = [
    {
      question: "Is your company registered for educational consultancy?",
      answer: "Yes, Fast Global Consultancy (Pvt) Ltd is SECP-registered and specializes in documentation guidance for international education."
    },
    {
      question: "Which country is best for Pakistani students?",
      answer: "Netherlands offers excellent English programs, Germany provides free education, and Serbia has affordable options - we help you choose based on your profile."
    },
    {
      question: "Do you guarantee university admission?",
      answer: "No, we provide admission guidance and document preparation. Admission decisions are made by universities based on academic merit."
    },
    {
      question: "What are the costs for studying in Europe?",
      answer: "Germany has minimal tuition fees, Netherlands ranges from €6,000-€15,000 annually, and Serbia is very affordable at €2,000-€5,000."
    },
    {
      question: "Can I work while studying?",
      answer: "Yes, Netherlands allows 16 hours/week, Germany permits 120 full days/year, and Serbia allows part-time work for international students."
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
                <GraduationCap className="w-5 h-5 text-gold mr-2" />
                <span className="text-gold font-semibold">Educational Consultancy Services</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Study in Europe:
                <span className="block text-gradient-gold mt-2">Affordable University Admissions</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Netherlands, Germany, and Serbia's top universities await. Get complete admission 
                guidance and visa processing from our SECP-registered consultancy firm.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Free Admission Assessment
                </button>
                <button
                  onClick={() => window.open(`https://wa.me/923001234567?text=${encodeURIComponent("Hi! I'm interested in study visa guidance for European universities.")}`, '_blank')}
                  className="btn-gold-outline"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp Education Counselor
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
                Popular Study <span className="text-gradient-gold">Destinations</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                We specialize in guiding Pakistani students to top European universities with 
                complete documentation support and visa processing assistance.
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
                Our Educational <span className="text-gradient-gold">Services</span>
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
                      <GraduationCap className="w-8 h-8 text-gold" />
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
                Essential Study <span className="text-gradient-gold">Documents</span>
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
                    Our experts will help you prepare and verify all required documents for your study visa application.
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
                Study Visa <span className="text-gradient-gold">FAQs</span>
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
                Start Your European
                <span className="block text-gradient-gold mt-2">Education Journey</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Get expert guidance for university admissions and complete visa processing support.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-gold"
                >
                  Get Free Education Assessment
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

export default StudyVisa
