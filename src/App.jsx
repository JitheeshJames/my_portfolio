import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Certifications from './components/Certifications'
import ArchitectureGallery from './components/ArchitectureGallery'
import ArchitectureDetail from './components/ArchitectureDetail'
import Contact from './components/Contact'
import profileData from './data/profile.json'

// Main portfolio component (your original App content)
function MainPortfolio() {
  return (
    <div className="min-h-screen bg-white">
      <Hero data={profileData.personal} />
      <Skills data={profileData.skills} />
      <Projects data={profileData.projects} />
      <Experience data={profileData.experience} />
      <Education data={profileData.education} />
      <Certifications data={profileData.certifications} />
      <ArchitectureGallery />
      <Contact data={profileData.personal} />
      
      {/* Resume Download Button - Fixed at bottom right */}
      <motion.div 
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <a 
          href="/resume.pdf" 
          download
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-full shadow-lg flex items-center space-x-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span>Download Resume</span>
        </a>
      </motion.div>
    </div>
  )
}

// Updated App component with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/architecture/:id" element={<ArchitectureDetail />} />
      </Routes>
    </Router>
  )
}

export default App
