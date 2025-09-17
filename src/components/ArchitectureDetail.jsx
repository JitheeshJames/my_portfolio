import { useParams, Link } from 'react-router-dom';

const ArchitectureDetail = () => {
  const { id } = useParams();
  
  // Sample architecture data - replace with your actual data
  const architectures = {
    "aws-ha-infrastructure": {
      title: "AWS High Availability Infrastructure",
      image: "/aws-arch-1.png",
      description: "Multi-AZ deployment with load balancing and automated failover",
      githubUrl: "https://github.com/JitheeshJames/aws-ha-infrastructure",
      technologies: ["Route 53", "ELB", "EC2", "RDS Multi-AZ", "VPC"],
      features: [
        "Highly available architecture across multiple availability zones",
        "Automated failover with Amazon RDS Multi-AZ",
        "Scalable web tier with Elastic Load Balancing",
        "Secure VPC configuration with public and private subnets"
      ]
    },
    "api-gateway": {
      title: "API Gateway & Microservices",
      image: "/aws-arch-2.png",
      description: "Scalable API architecture with microservices and serverless components",
      githubUrl: "https://github.com/JitheeshJames/api-gateway-microservices",
      technologies: ["API Gateway", "Lambda", "DynamoDB", "S3", "SNS"],
      features: [
        "Serverless API architecture with AWS API Gateway",
        "Microservices implementation with AWS Lambda",
        "Dynamic content handling with S3 and DynamoDB",
        "Real-time notifications with Amazon SNS"
      ]
    },
    "serverless-ecommerce": {
      title: "Serverless E-Commerce Platform",
      image: "/aws-arch-3.png",
      description: "Complete serverless e-commerce solution with real-time notifications",
      githubUrl: "https://github.com/jitheeshjames96/serverless-ecommerce",
      technologies: ["React", "Lambda", "DynamoDB", "S3", "SNS", "CloudWatch"],
      features: [
        "Full-stack serverless architecture",
        "React frontend with serverless backend",
        "Real-time inventory management",
        "Automated email notifications for orders"
      ]
    }
  };

  const architecture = architectures[id];

  if (!architecture) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Architecture Not Found</h1>
          <Link to="/" className="text-blue-600 hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 极 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Back to Portfolio
        </Link>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{architecture.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{architecture.description}</p>
            
            <div className="mb-8">
              <img 
                src={architecture.image} 
                alt={architecture.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {architecture.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Key Features</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {architecture.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href={architecture.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 极 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.极-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.极 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureDetail;
