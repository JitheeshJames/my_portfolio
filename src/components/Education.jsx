import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Education = ({ data }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Enhanced education data with details and certificates
  const educationData = [
    {
      degree: "MCA (Master of Computer Applications)",
      institution: "SASTRA University",
      period: "2018-2021",
      description: "Specialized in cloud computing and distributed systems. Completed projects on AWS infrastructure and serverless architectures.",
      grades: "CGPA: 8.5/10",
      achievements: [
        "Completed capstone project on AWS Cloud Migration"
      ],
      certificates: [
        {
          name: "Degree Certificate",
          url: "/mca-degree.pdf",
          type: "pdf"
        },
        {
          name: "consolidated marksheet",
          url: "/consolidatedmca.pdf",
          type: "pdf"
        }
      ],
      skills: ["Cloud Computing", "Distributed Systems", "Java", "Python", "Database Management"]
    },
    {
      degree: "BCA (Bachelor of Computer Applications)",
      institution: "BVM Holy Cross College",
      period: "2014-2017",
      description: "Focused on foundational computer science concepts and programming fundamentals. Developed several web applications as part of coursework.",
      grades: "Percentage: 78%",
      achievements: [
        "Class Representative for Computer Applications Department"
      ],
      certificates: [
        {
          name: "Degree Certificate",
          url: "/bca-degree.pdf",
          type: "pdf"
        },
        {
          name: "consolidated marksheet",
          url: "/consoliadatedbca.pdf",
          type: "pdf"
        }
      ],
      skills: ["Programming Fundamentals", "Web Development", "C/C++", "HTML/CSS", "JavaScript"]
    }
  ];

  return (
    <section id="education" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div key={index} className="mb-6">
              <motion.div 
                className="bg-gray-50 rounded-xl p-6 shadow-md cursor-pointer card-hover"
                onClick={() => toggleExpand(index)}
                whileHover={{ y: -2 }}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{edu.degree}</h3>
                    <p className="text-gray-700 font-medium">{edu.institution}</p>
                    <p className="text-blue-600">{edu.period}</p>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </div>
                
                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 overflow-hidden"
                    >
                      <div className="border-t pt-6">
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">About This Program</h4>
                        <p className="text-gray-700 mb-4">{edu.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Grades & Achievements</h4>
                            <p className="text-gray-700 mb-2"><span className="font-medium">Grades:</span> {edu.grades}</p>
                            <ul className="list-disc list-inside text-gray-700">
                              {edu.achievements.map((achievement, i) => (
                                <li key={i}>{achievement}</li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-lg font-semibold text-gray-800 mb-3">Skills Gained</h4>
                            <div className="flex flex-wrap gap-2">
                              {edu.skills.map((skill, i) => (
                                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-3">Certificates & Documents</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {edu.certificates.map((cert, i) => (
                              <a
                                key={i}
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 transition-colors"
                              >
                                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V极 a2 2 0 01-2 2z" />
                                  </svg>
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-900">{cert.name}</p>
                                  <p className="text-xs text-gray-500">Click to view</p>
                                </div>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
