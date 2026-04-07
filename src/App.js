import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

// Components
import Header from './components/Header'
import Footer from './components/Footer'
import AssessmentForm from './components/AssessmentForm'

// Pages
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import WorkVisa from './pages/WorkVisa'
import StudyVisa from './pages/StudyVisa'
import VisitVisa from './pages/VisitVisa'
import Immigration from './pages/Immigration'
import Contact from './pages/Contact'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services/work-visa" element={<WorkVisa />} />
              <Route path="/services/study-visa" element={<StudyVisa />} />
              <Route path="/services/visit-visa" element={<VisitVisa />} />
              <Route path="/services/immigration" element={<Immigration />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            
            {/* Global Assessment Form - Available on all pages */}
            <AssessmentForm />
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
