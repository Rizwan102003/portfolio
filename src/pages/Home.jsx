import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full-stack | Data Science | Cloud & DevOps";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const featuredProjects = [
    {
      title: 'Distributed File Pipeline',
      tagline: 'Scalable ingestion & processing for telemetry data',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Reduced processing time by 48% and lowered infra costs by 22%',
        'Handles 10M+ events/day with 99.9% uptime'
      ],
      tech: ['Java', 'Spring Boot', 'Kafka', 'AWS', 'Docker'],
      role: 'Lead Backend Engineer',
      caseStudyLink: '/projects/distributed-pipeline',
      codeLink: 'https://github.com/Rizwan102003/distributed-pipeline'
    },
    {
      title: 'ML-Powered Fraud Detection',
      tagline: 'Real-time anomaly detection for financial transactions',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Achieved 94.2% accuracy with <50ms latency',
        'Prevented $2.3M in fraudulent transactions'
      ],
      tech: ['Python', 'TensorFlow', 'Kafka', 'Redis', 'PostgreSQL'],
      role: 'ML Engineer',
      caseStudyLink: '/projects/fraud-detection',
      codeLink: 'https://github.com/Rizwan102003/fraud-detection'
    },
    {
      title: 'Cloud Infrastructure Automation',
      tagline: 'Infrastructure as Code for multi-region deployment',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1200&h=675&fit=crop',
      highlights: [
        'Reduced deployment time from 4 hours to 12 minutes',
        'Achieved 99.99% availability across 3 AWS regions'
      ],
      tech: ['Terraform', 'AWS', 'Kubernetes', 'Jenkins', 'Prometheus'],
      role: 'DevOps Engineer',
      caseStudyLink: '/projects/cloud-automation',
      codeLink: 'https://github.com/Rizwan102003/cloud-automation'
    }
  ];

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Java', 'Python', 'Golang', 'JavaScript', 'SQL']
    },
    {
      category: 'Frameworks',
      skills: ['Spring Boot', 'React', 'TensorFlow', 'FastAPI']
    },
    {
      category: 'Cloud & DevOps',
      skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      category: 'Data & ML',
      skills: ['PostgreSQL', 'Kafka', 'Pandas', 'Scikit-learn']
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container">
            <div className="hero-content animate-fade-in">
              <h1 id="hero-title" className="hero-title">
                Hi, I'm <span style={{ color: 'var(--color-primary)' }}>Sk Md Rizwan</span>
              </h1>
              
              <p className="hero-tagline">
                {typedText}<span className="animate-pulse">|</span>
              </p>
              
              <p className="hero-description">
                I design and ship data-driven backend systems and ML features that reduce latency and scale. 
                Building production-ready solutions for high-impact problems.
              </p>
              
              <div className="hero-actions">
                <Link to="/projects" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  View Projects
                </Link>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="section" aria-labelledby="about-title">
          <div className="container">
            <div className="text-center mb-xl">
              <h2 id="about-title" className="mb-md">About</h2>
              <div className="max-width-800 mx-auto">
                <p className="text-large mb-lg" style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto 32px' }}>
                  I'm a final-year <strong>Electronics & Communication Engineering</strong> student from Heritage Institute of Technology, 
                  specializing in <strong>backend systems</strong>, <strong>machine learning</strong>, and <strong>cloud infrastructure</strong>. 
                  I enjoy building scalable solutions that solve real-world problems and deliver measurable impact.
                </p>
                <p className="text-muted mb-lg">
                  <strong>Recent achievement:</strong> Built a distributed data pipeline that processes 10M+ events daily, 
                  reducing processing time by 48% and infrastructure costs by 22%.
                </p>
                <Link to="/resume" className="btn btn-ghost">
                  View Full Resume →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }} aria-labelledby="projects-title">
          <div className="container">
            <div className="text-center mb-xl">
              <h2 id="projects-title" className="mb-md">Featured Projects</h2>
              <p className="text-muted">
                High-impact projects showcasing full-stack development, ML, and cloud expertise
              </p>
            </div>
            
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <article key={index} className="project-card">
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
                      <span className="badge badge-primary">{project.role}</span>
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
              ))}
            </div>
            
            <div className="text-center mt-xl">
              <Link to="/projects" className="btn btn-secondary">
                View All Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section" aria-labelledby="skills-title">
          <div className="container">
            <div className="text-center mb-xl">
              <h2 id="skills-title" className="mb-md">Skills & Technologies</h2>
              <p className="text-muted">
                Technologies I use to build scalable, production-ready systems
              </p>
            </div>
            
            <div className="skills-grid">
              {skillCategories.map((category, index) => (
                <div key={index} className="skill-category">
                  <h3>{category.category}</h3>
                  <div className="skill-list">
                    {category.skills.map((skill, idx) => (
                      <span key={idx} className="badge">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center">
              <h2 className="mb-md">Let's Build Something Great</h2>
              <p className="text-muted mb-xl" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
                I'm actively seeking full-time opportunities in backend development, data science, 
                and cloud engineering. Let's discuss how I can contribute to your team.
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
                  href="https://www.linkedin.com/in/skmdrizwan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;