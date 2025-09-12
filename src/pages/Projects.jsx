import React, { useState } from 'react';

const projects = [
  {
    title: 'ML-Based Smart Farming System',
    description: 'An intelligent agriculture system combining IoT sensors, AI-based soil analysis, weather-based fertilization, pest control, and a voice assistant for farmers.',
    tech: ['Python', 'ML', 'Tesseract', 'Firebase', 'React Native'],
    github: 'https://github.com/Rizwan102003/smart-farming',
    category: 'AI/ML',
    status: 'Completed',
    image: '🌱',
    features: ['IoT Integration', 'Voice Assistant', 'Weather API', 'Crop Prediction']
  },
  {
    title: 'GoCommerce - E-Commerce Backend',
    description: 'A fully featured e-commerce backend written in Golang with JWT-based auth, REST APIs, Docker, PostgreSQL, and comprehensive testing.',
    tech: ['Golang', 'Gin', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/Rizwan102003/go-commerce',
    category: 'Backend',
    status: 'Completed',
    image: '🛒',
    features: ['REST APIs', 'Authentication', 'Database Design', 'Testing']
  },
  {
    title: 'Dynamic CMS in Golang',
    description: 'A reflection-powered CMS with hot-reloading, smart UI forms, RBAC, audit logs, multi-language support, and pluggable storage interfaces.',
    tech: ['Go', 'Gin', 'Reflection', 'SQLite'],
    github: 'https://github.com/Rizwan102003/dynamic-cms',
    category: 'Full Stack',
    status: 'In Progress',
    image: '⚡',
    features: ['Hot Reloading', 'RBAC', 'Multi-language', 'Audit Logs']
  },
  {
    title: 'GuardHire Platform',
    description: 'A hiring platform for security guards with Aadhaar/PAN verification, user reviews, role-based access, and search filters. Built using only free tools.',
    tech: ['React', 'Go', 'MongoDB', 'JWT'],
    github: 'https://github.com/Rizwan102003/GaurdHire',
    category: 'Full Stack',
    status: 'Completed',
    image: '🛡️',
    features: ['Identity Verification', 'Review System', 'Search Filters', 'Role Management']
  },
  {
    title: 'CSES GitHub Extension',
    description: 'An open-source extension to sync CSES problem submissions to GitHub with metadata, tags, and auto-folder structuring.',
    tech: ['JavaScript', 'GitHub API', 'Web Scraping'],
    github: 'https://github.com/Rizwan102003/cses-github-extension',
    category: 'Tools',
    status: 'Completed',
    image: '🔧',
    features: ['Auto Sync', 'Metadata Extraction', 'Folder Structure', 'GitHub Integration']
  },
  {
    title: 'AI Code Review Assistant',
    description: 'An intelligent code review system that analyzes code quality, suggests improvements, and detects potential bugs using machine learning.',
    tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    github: '#',
    category: 'AI/ML',
    status: 'Planning',
    image: '🤖',
    features: ['Code Analysis', 'Bug Detection', 'Quality Metrics', 'Suggestions']
  }
];

const categories = ['All', 'AI/ML', 'Backend', 'Full Stack', 'Tools'];
const statusColors = {
  'Completed': 'bg-green-500',
  'In Progress': 'bg-yellow-500',
  'Planning': 'bg-blue-500'
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen animated-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            My <span className="gradient-text bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A showcase of innovative solutions and technical excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-purple-600 shadow-lg scale-105'
                  : 'glass text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-6 card-hover relative overflow-hidden group"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className={`absolute top-4 right-4 ${statusColors[project.status]} text-white text-xs px-3 py-1 rounded-full font-semibold`}>
                {project.status}
              </div>

              {/* Project Icon */}
              <div className="text-6xl mb-4 text-center">
                {project.image}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors">
                {project.title}
              </h3>

              {/* Category */}
              <div className="text-purple-300 text-sm font-semibold mb-3">
                {project.category}
              </div>

              {/* Description */}
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-white font-semibold mb-2 text-sm">Key Features:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 text-white/70 px-2 py-1 rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* GitHub Link */}
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>

                {/* Hover Effect Indicator */}
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  hoveredProject === index ? 'bg-yellow-400 scale-125' : 'bg-white/30'
                }`}></div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl transition-opacity duration-300 ${
                hoveredProject === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Interested in Collaboration?
            </h3>
            <p className="text-white/80 mb-6">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <a
              href="/contact"
              className="btn-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 inline-block"
            >
              Let's Work Together 🚀
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;