My Portfolio - React Developer Portfolio

A modern, responsive portfolio website built with React, Vite, and TailwindCSS, deployed on Netlify.

https://via.placeholder.com/800x400?text=Jitheesh+PJ+Portfolio+Screenshot

🌐 Live Demo

Visit the live site: https://jitheeshportfolio.netlify.app/

🚀 Features

· Modern Design: Clean, professional layout with smooth animations
· Responsive: Fully responsive design that works on all devices
· AWS Focus: Highlights AWS architecture and certifications
· Interactive Elements: Hover effects and smooth transitions
· Contact Integration: Direct links to email, LinkedIn, GitHub, and WhatsApp

🛠️ Built With

· React - Frontend framework
· Vite - Build tool and development server
· TailwindCSS - Utility-first CSS framework
· Framer Motion - Animation library
· React Router - Routing library
· Netlify - Deployment platform

📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/JitheeshJames/my_portfolio.git
cd my_portfolio
```

1. Install dependencies:

```bash
npm install
```

1. Start the development server:

```bash
npm run dev
```

1. Open http://localhost:5173 to view it in the browser.

🚀 Deployment

This project is configured for deployment on Netlify:

1. Connect your repository to Netlify
2. Set the build command: npm run build
3. Set the publish directory: dist
4. Add environment variables if needed
5. Deploy!

Netlify Configuration

The project includes these Netlify-specific configurations:

· _redirects file for client-side routing
· Proper build settings in vite.config.js
· Optimized build output

📁 Project Structure

```
my_portfolio/
├── public/
│   ├── _redirects          # Netlify redirect rules
│   ├── aws-arch-1.png      # Architecture diagram 1
│   ├── aws-arch-2.png      # Architecture diagram 2
│   ├── aws-arch-3.png      # Architecture diagram 3
│   ├── profile.jpg         # Profile image
│   └── resume.pdf          # Downloadable resume
├── src/
│   ├── components/
│   │   ├── ArchitectureGallery.jsx
│   │   ├── Certifications.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/
│   │   └── profile.json    # All content data
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── index.html
```

🔧 Customization

Updating Content

All content is stored in src/data/profile.json. Update this file to change:

· Personal information
· Skills
· Projects
· Experience
· Education
· Certifications

Adding Images

1. Profile Image: Replace public/profile.jpg with your image
2. Architecture Diagrams: Replace public/aws-arch-1.png, public/aws-arch-2.png, and public/aws-arch-3.png
3. Resume: Replace public/resume.pdf with your resume

Styling

The project uses TailwindCSS for styling. Modify:

· tailwind.config.js for theme customization
· src/index.css for global styles
· Individual components for specific styling

🐛 Troubleshooting

Common Issues

1. Build fails on Netlify
   · Ensure all dependencies are in package.json
   · Check that build command is npm run build
   · Verify node version compatibility
2. Images not loading
   · Check file paths in components
   · Ensure images are in the public folder
   · Verify image filenames match the code
3. Routing issues on Netlify
   · Confirm _redirects file is in public folder
   · Check that the redirect rule is correct: /* /index.html 200
4. Styles not applying
   · Check TailwindCSS configuration
   · Verify all CSS files are imported correctly
5. Animations not working
   · Ensure Framer Motion is properly installed
   · Check animation props on components

Debugging Steps

1. Check the browser console for errors
2. Verify all dependencies are installed:

```bash
npm install
```

1. Test build locally:

```bash
npm run build
```

1. Serve built files locally:

```bash
npm run preview
```

📋 Scripts

· npm run dev - Start development server
· npm run build - Build for production
· npm run preview - Preview production build
· npm run lint - Run ESLint

🔍 References

· React Documentation
· Vite Documentation
· TailwindCSS Documentation
· Framer Motion Documentation
· Netlify Documentation
· React Router Documentation

📝 License

This project is open source and available under the MIT License.

🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check issues page.

📞 Contact

Jitheesh PJ - jitheeshjames27@gmail.com

Project Link: https://github.com/JitheeshJames/my_portfolio

🙏 Acknowledgments

· Thanks to Netlify for easy deployment
· React and Vite teams for excellent tools
· TailwindCSS for utility-first CSS framework
· Unsplash for placeholder images

---

⭐️ Feel free to star this repository if you find it helpful!
