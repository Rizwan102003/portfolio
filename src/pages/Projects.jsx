import React, { useState } from 'react';

const projects = [
  {
    title: 'ML-Based Smart Farming System',
    description: 'An intelligent agriculture ecosystem combining IoT sensors, AI-based soil analysis, weather-based fertilization, pest control, and voice assistant for farmers.',
    tech: ['Python', 'ML', 'Tesseract', 'Firebase', 'React Native'],
    github: 'https://github.com/Rizwan102003/smart-farming',
    category: 'AI/ML',
    status: 'Completed',
    features: ['IoT Integration', 'Voice Assistant', 'Weather API', 'Crop Prediction']
  },
  {
    title: 'GoCommerce - E-Commerce Backend',
    description: 'A fully featured e-commerce backend written in Golang with JWT-based auth, REST APIs, Docker, PostgreSQL, and comprehensive testing.',
    tech: ['Golang', 'Gin', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/Rizwan102003/go-commerce',
    category: 'Backend',
    status: 'Completed',
    features: ['REST APIs', 'Authentication', 'Database Design', 'Testing']
  },
  {
    title: 'Dynamic CMS in Golang',
    description: 'A reflection-powered CMS with hot-reloading, smart UI forms, RBAC, audit logs, multi-language support, and pluggable storage interfaces.',
    tech: ['Go', 'Gin', 'Reflection', 'SQLite'],
    github: 'https://github.com/Rizwan102003/dynamic-cms',
    category: 'Full Stack',
    status: 'In Progress',
    features: ['Hot Reloading', 'RBAC', 'Multi-language', 'Audit Logs']
  },
  {
    title: 'GuardHire Platform',
    description: 'A hiring platform for security guards with Aadhaar/PAN verification, user reviews, role-based access, and search filters. Built using only free tools.',
    tech: ['React', 'Go', 'MongoDB', 'JWT'],
    github: 'https://github.com/Rizwan102003/GaurdHire',
    category: 'Full Stack',
    status: 'Completed',
    features: ['Identity Verification', 'Review System', 'Search Filters', 'Role Management']
  },
  {
    title: 'CSES GitHub Extension',
    description: 'An open-source extension to sync CSES problem submissions to GitHub with metadata, tags, and auto-folder structuring.',
    tech: ['JavaScript', 'GitHub API', 'Web Scraping'],
    github: 'https://github.com/Rizwan102003/cses-github-extension',
    category: 'Tools',
    status: 'Completed',
    features: ['Auto Sync', 'Metadata Extraction', 'Folder Structure', 'GitHub Integration']
  },
  {
    title: 'AI Code Review Assistant',
    description: 'An intelligent code review system that analyzes code quality, suggests improvements, and detects potential bugs using machine learning.',
    tech: ['Python', 'TensorFlow', 'NLP', 'FastAPI'],
    github: '#',
    category: 'AI/ML',
    status: 'Planning',
    features: ['Code Analysis', 'Bug Detection', 'Quality Metrics', 'Suggestions']
  }
];

const categories = ['All', 'AI/ML', 'Backend', 'Full Stack', 'Tools'];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Completed':
        return 'badge-success';
      case 'In Progress':
        return 'badge-warning';
      case 'Planning':
        return 'badge-accent';
      default:
        return 'badge';
    }
  };

  return (
    <div className="min-h-screen bg-primary pt-24">
      {/* Header */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-primary mb-6">Projects</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              A collection of projects showcasing my technical skills and problem-solving approach
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn ${
                  selectedCategory === category
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div key={index} className="card">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <span className="badge badge-accent">
                    {project.category}
                  </span>
                  <span className={`badge ${getStatusBadge(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-primary font-semibold mb-3">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-primary mb-2">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-tertiary text-muted px-2 py-1 rounded border text-center"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-primary mb-2">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge">
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
                    className="btn btn-ghost text-sm"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-primary mb-4">Interested in collaborating?</h2>
            <p className="text-muted mb-8 leading-relaxed">
              I'm always excited to work on innovative projects and cutting-edge solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Let's Connect
              </a>
              <a 
                href="https://github.com/Rizwan102003" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;