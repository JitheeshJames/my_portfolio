import { motion } from 'framer-motion'

const Education = ({ data }) => {
  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-md card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
              <p className="text-gray-700 font-medium mb-2">{edu.institution}</p>
              <p className="text-blue-600">{edu.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
