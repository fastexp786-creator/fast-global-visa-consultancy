import React from 'react'
import { motion } from 'framer-motion'
import SEOHelmet from '../components/SEOHelmet'
import { 
  Award, 
  Building, 
  Users, 
  MapPin, 
  Phone, 
  Mail,
  Shield,
  Target,
  Globe,
  CheckCircle
} from 'lucide-react'

const AboutUs = () => {
  const seoData = {
    title: "About Fast Global Consultancy (Pvt) Ltd | Best Visa Consultant Rawalpindi",
    description: "Discover Fast Global Consultancy (Pvt) Ltd, an SECP-registered firm in Rawalpindi providing premium documentation audits and international career roadmaps.",
    keywords: "Fast Global Consultancy, SECP registered visa consultant Rawalpindi, 6th Road consultancy, professional immigration documentation Pakistan",
    canonicalUrl: "https://visaconsultant.fastjobcareer.com/about"
  }

  const teamMembers = [
    {
      name: "Senior Immigration Consultant",
      expertise: "15+ years experience in European immigration",
      icon: Award
    },
    {
      name: "Documentation Specialist",
      expertise: "Expert in embassy file preparation",
      icon: Shield
    },
    {
      name: "Policy Analyst",
      expertise: "Latest visa regulations and updates",
      icon: Target
    }
  ]

  const coreValues = [
    {
      title: "Transparency",
      description: "No hidden costs, no unrealistic promises",
      icon: CheckCircle
    },
    {
      title: "Professionalism", 
      description: "Every case handled with corporate approach",
      icon: Building
    },
    {
      title: "Accuracy",
      description: "Focus on minute details of immigration policies",
      icon: Target
    },
    {
      title: "Legal Compliance",
      description: "SECP registered and fully compliant",
      icon: Shield
    }
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
              {/* SECP Badge */}
              <div className="inline-flex items-center bg-gold/20 border border-gold/50 rounded-full px-6 py-3 mb-8">
                <Shield className="w-5 h-5 text-gold mr-2" />
                <span className="text-gold font-semibold">SECP Registered Private Limited Company</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Redefining Global Mobility with
                <span className="block text-gradient-gold mt-2">Professional Integrity</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Fast Global Consultancy (Pvt) Ltd is a premier, SECP-registered consultancy firm 
                headquartered in the commercial hub of 6th Road, Rawalpindi. We specialize in 
                high-end documentation audits, strategic career roadmaps, and global policy guidance 
                for individuals aspiring to study, work, or settle in international destinations.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>SECP Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span>5000+ Success Stories</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Why Choose <span className="text-gradient-gold">Fast Global</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {coreValues.map((value, index) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={value.title}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Icon className="w-10 h-10 text-gold" />
                      </div>
                      <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Company Identity */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid lg:grid-cols-2 gap-16 mb-20"
            >
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Our Corporate Identity</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Building className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">SECP-Registered Credibility</h4>
                      <p className="text-gray-600">
                        We are a legally incorporated entity, ensuring that our operations align with 
                        national and international standards. Your career goals are managed by a recognized corporate body.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Shield className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Documentation Excellence</h4>
                      <p className="text-gray-600">
                        The primary reason for visa rejection is often flawed documentation. Our team conducts 
                        rigorous Documentation Audits to ensure every file meets specific requirements of respective Embassies.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Target className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">Strategic Roadmaps</h4>
                      <p className="text-gray-600">
                        We don't just show a path; we build a strategy. From Netherlands and Canada to 
                        Serbia and Albania, we align your educational background and work experience with best global opportunities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-navy mb-6">Physical Presence</h3>
                <div className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-navy mb-1">6th Road, Rawalpindi Office</h4>
                      <p className="text-gray-600">
                        We believe in the power of face-to-face consultation. Our fully operational office 
                        in Rawalpindi allows you to discuss your profile with our experts in a professional environment.
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-navy mb-3">Office Hours</h5>
                      <p className="text-gray-600 text-sm">Monday – Saturday</p>
                      <p className="text-gold font-semibold">10:00 AM – 06:00 PM</p>
                    </div>
                    <div>
                      <h5 className="font-semibold text-navy mb-3">Contact</h5>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gold" />
                          <span className="text-gray-600">+92 300 1234567</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gold" />
                          <span className="text-gray-600">info@fastglobalconsultancy.com</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Team Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-bold text-navy text-center mb-12">Our Team Expertise</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, index) => {
                  const Icon = member.icon
                  return (
                    <motion.div
                      key={member.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                    >
                      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-gold" />
                      </div>
                      <h4 className="text-lg font-bold text-navy mb-2">{member.name}</h4>
                      <p className="text-gray-600 text-sm">{member.expertise}</p>
                    </motion.div>
                  )
                })}
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
                Ready to Start Your
                <span className="block text-gradient-gold mt-2">Global Journey?</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Expert guidance is just a visit away. Our office is centrally located on 6th Road, 
                Rawalpindi, where our consultants are ready to provide a personalized assessment of your profile.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="btn-gold"
                >
                  Visit Our Office
                </button>
                <button
                  onClick={() => window.location.href = '#assessment-form'}
                  className="btn-gold-outline"
                >
                  Get Free Assessment
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutUs
