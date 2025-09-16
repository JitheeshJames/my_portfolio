import { motion } from 'framer-motion'

const ArchitectureGallery = () => {
  const architectures = [
    { id: 1, title: "AWS Infrastructure Design", image: "/aws-arch-1.png" },
    { id: 2, title: "Security & Compliance Architecture", image: "/aws-arch-2.png" },
    { id: 3, title: "Cloud Migration Framework", image: "/aws-arch-3.png" }
  ]

  return (
    <section id="architecture" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Architecture Gallery
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <div className="text-white text-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <p className="text-sm">Architecture Diagram</p>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{arch.title}</h3>
                <p className="text-gray-700">AWS architecture design for scalable and secure cloud solutions.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArchitectureGallery
