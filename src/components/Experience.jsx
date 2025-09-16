import { motion } from 'framer-motion'

const Experience = ({ data }) => {
  return (
    <section id="experience" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Professional Experience
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
          
          {data.map((exp, index) => (
            <motion.div
              key={index}
              className={`mb-8 flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="flex justify-center md:justify-start md:px-4">
                <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-white shadow-md z-10"></div>
              </div>
              
              {/* Content */}
              <div className="flex-1 bg-white rounded-xl shadow-md p-6 mx-4 mt-2 md:mt-0 card-hover">
                <div className="flex flex-col md:flex-row justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900">{exp.role}</h3>
                  <span className="text-blue-600 font-medium">{exp.period}</span>
                </div>
                <p className="text-gray-700 font-medium mb-3">{exp.company}</p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {exp.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
