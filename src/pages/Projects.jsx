import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      title: 'Distributed File Pipeline',
      tagline: 'Scalable ingestion & processing for telemetry data',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Reduced processing time by 48% and lowered infra costs by 22%',
        'Handles 10M+ events/day with 99.9% uptime',
        'Built with microservices architecture for horizontal scaling'
      ],
      tech: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Docker', 'PostgreSQL'],
      role: 'Lead Backend Engineer',
      category: 'Backend',
      timeline: '6 months',
      caseStudyLink: '/projects/distributed-pipeline',
      codeLink: 'https://github.com/Rizwan102003/distributed-pipeline',
      featured: true
    },
    {
      title: 'ML-Powered Fraud Detection',
      tagline: 'Real-time anomaly detection for financial transactions',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Achieved 94.2% accuracy with <50ms latency',
        'Prevented $2.3M in fraudulent transactions',
        'Deployed ensemble model with real-time feature engineering'
      ],
      tech: ['Python', 'TensorFlow', 'Kafka', 'Redis', 'PostgreSQL', 'Docker'],
      role: 'ML Engineer',
      category: 'Data Science',
      timeline: '4 months',
      caseStudyLink: '/projects/fraud-detection',
      codeLink: 'https://github.com/Rizwan102003/fraud-detection',
      featured: true
    },
    {
      title: 'Cloud Infrastructure Automation',
      tagline: 'Infrastructure as Code for multi-region deployment',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Reduced deployment time from 4 hours to 12 minutes',
        'Achieved 99.99% availability across 3 AWS regions',
        'Automated CI/CD pipeline with zero-downtime deployments'
      ],
      tech: ['Terraform', 'AWS', 'Kubernetes', 'Jenkins', 'Prometheus', 'Grafana'],
      role: 'DevOps Engineer',
      category: 'DevOps',
      timeline: '3 months',
      caseStudyLink: '/projects/cloud-automation',
      codeLink: 'https://github.com/Rizwan102003/cloud-automation',
      featured: true
    },
    {
      title: 'Smart Farming IoT System',
      tagline: 'AI-powered agriculture with IoT sensors and ML predictions',
      image: 'https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Increased crop yield predictions by 35% accuracy',
        'Reduced water usage by 28% through smart irrigation',
        'Real-time monitoring of 500+ IoT sensors'
      ],
      tech: ['Python', 'React Native', 'Firebase', 'TensorFlow', 'Arduino'],
      role: 'Full-stack Developer',
      category: 'Full Stack',
      timeline: '5 months',
      caseStudyLink: '/projects/smart-farming',
      codeLink: 'https://github.com/Rizwan102003/smart-farming',
      featured: false
    },
    {
      title: 'E-commerce Microservices',
      tagline: 'Scalable e-commerce backend with Go microservices',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Built 8 microservices handling 50K+ requests/minute',
        'Implemented event-driven architecture with CQRS',
        'Achieved 99.5% uptime with circuit breaker patterns'
      ],
      tech: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'gRPC'],
      role: 'Backend Engineer',
      category: 'Backend',
      timeline: '4 months',
      caseStudyLink: '/projects/ecommerce-microservices',
      codeLink: 'https://github.com/Rizwan102003/go-commerce',
      featured: false
    },
    {
      title: 'Real-time Analytics Dashboard',
      tagline: 'Live data visualization for business intelligence',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Processes 1M+ data points in real-time',
        'Custom visualization components with D3.js',
        'Sub-second query performance on large datasets'
      ],
      tech: ['React', 'Node.js', 'ClickHouse', 'WebSocket', 'D3.js', 'Docker'],
      role: 'Full-stack Developer',
      category: 'Full Stack',
      timeline: '3 months',
      caseStudyLink: '/projects/analytics-dashboard',
      codeLink: 'https://github.com/Rizwan102003/analytics-dashboard',
      featured: false
    }
  ];

  const categories = ['All', 'Backend', 'Data Science', 'DevOps', 'Full Stack'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <div>
      <main id="main-content">
        {/* Header */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h1 className="mb-md">Projects</h1>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                A collection of high-impact projects showcasing full-stack development, 
                machine learning, and cloud infrastructure expertise.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center gap-sm mb-xl" style={{ flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn ${
                    selectedCategory === category ? 'btn-primary' : 'btn-ghost'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        {selectedCategory === 'All' && (
          <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: 0 }}>
            <div className="container">
              <div className="text-center mb-xl">
                <h2 className="mb-md">Featured Projects</h2>
                <p className="text-muted">
                  Highlighted projects with significant impact and technical complexity
                </p>
              </div>
              
              <div className="projects-grid">
                {featuredProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} featured={true} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* All Projects */}
        <section className="section" style={{ paddingTop: selectedCategory === 'All' ? 'var(--space-xl)' : 'var(--space-2xl)' }}>
          <div className="container">
            {selectedCategory === 'All' && (
              <div className="text-center mb-xl">
                <h2 className="mb-md">All Projects</h2>
                <p className="text-muted">
                  Complete portfolio of technical projects and contributions
                </p>
              </div>
            )}
            
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center">
              <h2 className="mb-md">Interested in My Work?</h2>
              <p className="text-muted mb-xl" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
                I'm always excited to discuss technical challenges and innovative solutions. 
                Let's connect and explore how we can work together.
              </p>
              <div className="flex justify-center gap-md">
                <Link to="/contact" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Get In Touch
                </Link>
                <a
                  href="https://github.com/Rizwan102003"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project, featured = false }) => {
  return (
    <article className="project-card">
      <img
        src={project.image}
        alt={`${project.title} - ${project.tagline}`}
        className="project-image"
        loading="lazy"
      />
      
      <div className="project-content">
        <div className="project-header">
          <div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-tagline">{project.tagline}</p>
          </div>
          <div className="flex flex-col gap-xs">
            <span className="badge badge-primary">{project.role}</span>
            {featured && <span className="badge badge-secondary">Featured</span>}
          </div>
        </div>
        
        <div className="mb-md">
          <div className="flex gap-md mb-sm text-small text-muted">
            <span>📅 {project.timeline}</span>
            <span>🏷️ {project.category}</span>
          </div>
        </div>
        
        <ul className="project-highlights">
          {project.highlights.map((highlight, idx) => (
            <li key={idx}>{highlight}</li>
          ))}
        </ul>
        
        <div className="project-tech">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="badge">{tech}</span>
          ))}
        </div>
        
        <div className="project-actions">
          <Link to={project.caseStudyLink} className="btn btn-primary">
            Case Study
          </Link>
          <a
            href={project.codeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>
    </article>
  );
};

export default Projects;