import React, { useState } from 'react';

const projects = [
  {
    title: 'ML-Based Smart Farming System',
    description: 'An intelligent agriculture ecosystem combining IoT sensors, AI-based soil analysis, weather-based fertilization, pest control, and voice assistant for farmers.',
    tech: ['Python', 'ML', 'Tesseract', 'Firebase', 'React Native'],
    github: 'https://github.com/Rizwan102003/smart-farming',
    category: 'AI/ML',
    status: 'Completed',
    icon: '🌱',
    features: ['IoT Integration', 'Voice Assistant', 'Weather API', 'Crop Prediction'],
    complexity: 'High'
  },
  {
    title: 'GoCommerce - E-Commerce Backend',
    description: 'A fully featured e-commerce backend written in Golang with JWT-based auth, REST APIs, Docker, PostgreSQL, and comprehensive testing.',
    tech: ['Golang', 'Gin', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/Rizwan102003/go-commerce',
    category: 'Backend',
    status: 'Completed',
    icon: '🛒',
    features: ['REST APIs', 'Authentication', 'Database Design', 'Testing'],
    complexity: 'Medium'
  },
  {
    title: 'Dynamic CMS in Golang',
    description: 'A reflection-powered CMS with hot-reloading, smart UI forms, RBAC, audit logs, multi-language support, and pluggable storage interfaces.',
    tech: ['Go', 'Gin', 'Reflection', 'SQLite'],
    github: 'https://github.com/Rizwan102003/dynamic-cms',
    category: 'Full Stack',
    status: 'In Progress',
    icon: '⚡',
    features: ['Hot Reloading', 'RBAC', 'Multi-language', 'Audit Logs'],
    complexity: 'High'
  },
  {
    title: 'GuardHire Platform',
    description: 'A hiring platform for security guards with Aadhaar/PAN verification, user reviews, role-based access, and search filters. Built using only free tools.',
    tech: ['React', 'Go', 'MongoDB', 'JWT'],
    github: 'https://github.com/Rizwan102003/GaurdHire',
    category: 'Full Stack',
    status: 'Completed',
    icon: '🛡️',
    features: ['Identity Verification', 'Review System', 'Search Filters', 'Role Management'],
    complexity: 'Medium'
  },
  {
    title: 'CSES GitHub Extension',
    description: 'An open-source extension to sync CSES problem submissions to GitHub with metadata, tags, and auto-folder structuring.',
    tech: ['JavaScript', 'GitHub API', 'Web Scraping'],
    github: 'https://github.com/Rizwan102003/cses-github-extension',
    category: 'Tools',
    status: 'Completed',
    icon: '🔧',
    features: ['Auto Sync', 'Metadata Extraction', 'Folder Structure', 'GitHub Integration'],
    complexity: 'Low'
  },
  {
    title: 'AI Code Review Assistant',
    description: 'An intelligent code review system that analyzes code quality, suggests improvements, and detects potential bugs using machine learning.',
    tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    github: '#',
    category: 'AI/ML',
    status: 'Planning',
    icon: '🤖',
    features: ['Code Analysis', 'Bug Detection', 'Quality Metrics', 'Suggestions'],
    complexity: 'High'
  }
];

const categories = ['All', 'AI/ML', 'Backend', 'Full Stack', 'Tools'];
const statusColors = {
  'Completed': 'bg-green-500',
  'In Progress': 'bg-yellow-500',
  'Planning': 'bg-blue-500'
};

const complexityColors = {
  'Low': 'text-green-400',
  'Medium': 'text-yellow-400',
  'High': 'text-red-400'
};

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen tech-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tech-font">
            <span className="text-cyan-400">&lt;</span>
            <span className="gradient-text">Projects</span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mono-font">
            <span className="text-cyan-400">// </span>
            Innovative solutions and technical excellence
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mono-font border ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-black border-cyan-400 neon-cyan'
                  : 'glass text-blue-200 hover:bg-blue-500/20 border-blue-500/30 hover:border-cyan-400/50'
              }`}
            >
              <span className="text-cyan-400">[</span>
              {category}
              <span className="text-cyan-400">]</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-3xl p-6 card-hover relative overflow-hidden group border border-blue-500/30"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status and Complexity Badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <div className={`${statusColors[project.status]} text-white text-xs px-3 py-1 rounded-full font-semibold mono-font`}>
                  {project.status}
                </div>
                <div className={`bg-gray-800/80 ${complexityColors[project.complexity]} text-xs px-3 py-1 rounded-full font-semibold mono-font border border-gray-600`}>
                  {project.complexity}
                </div>
              </div>

              {/* Project Icon */}
              <div className="text-6xl mb-4 text-center">
                {project.icon}
              </div>

              {/* Project Title */}
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors tech-font">
                {project.title}
              </h3>

              {/* Category */}
              <div className="text-cyan-400 text-sm font-semibold mb-3 mono-font">
                <span className="text-blue-400">//</span> {project.category}
              </div>

              {/* Description */}
              <p className="text-blue-100 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Features */}
              <div className="mb-4">
                <h4 className="text-cyan-400 font-semibold mb-2 text-sm mono-font">
                  $ features --list
                </h4>
                <div className="grid grid-cols-2 gap-1">
                  {project.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-gray-800/50 text-blue-200 px-2 py-1 rounded-md mono-font border border-blue-500/20"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-cyan-400 font-semibold mb-2 text-sm mono-font">
                  $ tech --stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full font-medium mono-font border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub Link */}
              <div className="flex justify-between items-center">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-tech text-white px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition-all duration-300 flex items-center gap-2 mono-font"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View Code
                </a>

                {/* Hover Effect Indicator */}
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  hoveredProject === index ? 'bg-cyan-400 scale-125 neon-cyan' : 'bg-blue-500/30'
                }`}></div>
              </div>

              {/* Hover Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl transition-opacity duration-300 ${
                hoveredProject === index ? 'opacity-100' : 'opacity-0'
              }`}></div>

              {/* Circuit Pattern Overlay */}
              <div className={`absolute inset-0 circuit-pattern rounded-3xl transition-opacity duration-300 ${
                hoveredProject === index ? 'opacity-20' : 'opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Terminal-style CTA */}
        <div className="text-center mt-16">
          <div className="glass rounded-3xl p-8 max-w-3xl mx-auto border border-blue-500/30">
            <div className="bg-gray-900/80 rounded-lg p-6 mb-6 border border-cyan-400/30">
              <p className="text-cyan-400 mono-font text-sm mb-2">
                $ collaboration --status
              </p>
              <p className="text-green-400 mono-font text-sm mb-2">
                Status: AVAILABLE
              </p>
              <p className="text-blue-200 mono-font text-sm">
                Ready for new projects and innovative challenges...
              </p>
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4 tech-font">
              <span className="gradient-text">Ready to Collaborate?</span>
            </h3>
            <p className="text-blue-200 mb-6">
              Let's build something extraordinary together. I'm always excited to work on 
              innovative projects and cutting-edge solutions.
            </p>
            <a
              href="/contact"
              className="btn-tech text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 inline-block mono-font"
            >
              <span className="text-cyan-400">&lt;</span> 
              Let's Connect 
              <span className="text-cyan-400">/&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;