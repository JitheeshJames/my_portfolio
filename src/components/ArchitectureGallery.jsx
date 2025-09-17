// ArchitectureGallery.jsx - Updated with detailed architecture information
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ArchitectureGallery = () => {
  const architectures = [
    { 
      id: 1, 
      title: "AWS High Availability Infrastructure", 
      image: "/aws-arch-1.png",
      description: "Multi-AZ deployment with load balancing and automated failover",
      detailsPage: "/architecture/aws-ha-infrastructure",
      technologies: ["Route 53", "ELB", "EC2", "RDS Multi-AZ", "VPC"],
      features: [
        "Highly available architecture across multiple availability zones",
        "Automated failover with Amazon RDS Multi-AZ",
        "Scalable web tier with Elastic Load Balancing",
        "Secure VPC configuration with public and private subnets"
      ]
    },
    { 
      id: 2, 
      title: "API Gateway & Microservices", 
      image: "/aws-arch-2.png",
      description: "Scalable API architecture with microservices and serverless components",
      detailsPage: "/architecture/api-gateway",
      technologies: ["API Gateway", "Lambda", "DynamoDB", "S3", "SNS"],
      features: [
        "Serverless API architecture with AWS API Gateway",
        "Microservices implementation with AWS Lambda",
        "Dynamic content handling with S3 and DynamoDB",
        "Real-time notifications with Amazon SNS"
      ]
    },
    { 
      id: 3, 
      title: "Serverless E-Commerce Platform", 
      image: "/aws-arch-3.png",
      description: "Complete serverless e-commerce solution with real-time notifications",
      detailsPage: "/architecture/serverless-ecommerce",
      technologies: ["React", "Lambda", "DynamoDB", "S3", "SNS", "CloudWatch"],
      features: [
        "Full-stack serverless architecture",
        "React frontend with serverless backend",
        "Real-time inventory management",
        "Automated email notifications for orders"
      ]
    }
  ]

  return (
    <section id="architecture" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-3xl font-bold text-center text-gray-900 mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Architecture Gallery
        </motion.h2>
        
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          Explore my AWS architecture designs with detailed explanations, technical specifications, and GitHub repositories.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.id}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-lg card-hover"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Clickable Architecture Image */}
              <Link to={arch.detailsPage}>
                <div className="h-48 bg-gray-200 flex items-center justify-center relative group overflow-hidden">
                  <img 
                    src={arch.image} 
                    alt={arch.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback placeholder (hidden by default) */}
                  <div className="h-48 w-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center hidden">
                    <div className="text-white text-center p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-sm">Architecture Diagram</p>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{arch.title}</h3>
                <p className="text-gray-700 mb-4">{arch.description}</p>
                
                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {arch.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* GitHub and WhatsApp Links */}
                <div className="flex justify-between items-center mt-4">
                  <a 
                    href={arch.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-blue-600 flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  
                  <a 
                    href={`https://wa.me/919846278548?text=Hi%20Jitheesh,%20I'm%20interested%20in%20your%20${encodeURIComponent(arch.title)}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-green-600 flex items-center text-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.450-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
                    </svg>
                    Discuss
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArchitectureGallery
