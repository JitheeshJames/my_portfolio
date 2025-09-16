import { motion } from 'framer-motion'

const Certifications = ({ data }) => {
  // AWS certification data with icons and descriptions
  const awsCerts = [
    {
      name: "AWS Solutions Architect - Associate",
      icon: "/aws-saa-icon.png",
      description: "Validates ability to design and deploy scalable systems on AWS",
      verifyUrl: "https://www.credly.com/earner/earned/badge/your-badge-id"
    },
    {
      name: "AWS Solutions Architect - Professional",
      icon: "/aws-sap-icon.png", 
      description: "Advanced technical skills and experience in designing distributed systems",
      verifyUrl: "https://www.credly.com/earner/earned/badge/your-badge-id"
    },
    {
      name: "AWS Data Analytics Specialty",
      icon: "/aws-data-icon.png",
      description: "Expertise in using AWS data lakes and analytics services",
      verifyUrl: "https://www.credly.com/earner/earned/badge/your-badge-id"
    },
    {
      name: "AWS Security Specialty", 
      icon: "/aws-security-icon.png",
      description: "Specialized knowledge in securing AWS workloads and architectures",
      verifyUrl: "https://www.credly.com/badges/7fb0ac81-b278-42d1-be2c-3774d2c0fef5/public_url"
    }
  ]

  return (
    <section id="certifications" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Certifications
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awsCerts.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md card-hover flex flex-col"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* AWS Certification Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <img 
                  src={cert.icon} 
                  alt={`${cert.name} icon`}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    // Fallback to AWS logo if icon fails to load
                    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23232F3E'%3E%3Cpath d='M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z'/%3E%3Cpath d='M12 6c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 10c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4z'/%3E%3C/svg%3E";
                  }}
                />
              </div>
              
              {/* Certification Name */}
              <h3 className="font-semibold text-gray-900 text-center mb-2">{cert.name}</h3>
              
              {/* Certification Description */}
              <p className="text-gray-600 text-sm text-center mb-4 flex-grow">{cert.description}</p>
              
              {/* Verification Link */}
              <a 
                href={cert.verifyUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-sm font-medium text-center flex items-center justify-center"
              >
                Verify credential
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
