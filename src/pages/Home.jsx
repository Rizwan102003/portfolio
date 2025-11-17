import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer & Data Scientist";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  const techStack = [
    { name: 'Python', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Go', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git', category: 'Tools' }
  ];

  const featuredProjects = [
    {
      title: 'Smart Farming System',
      description: 'AI-powered agriculture ecosystem with IoT sensors and machine learning for crop optimization.',
      tech: ['Python', 'ML', 'IoT', 'Firebase'],
      status: 'Completed',
      github: 'https://github.com/Rizwan102003/smart-farming'
    },
    {
      title: 'GoCommerce Backend',
      description: 'Full-featured e-commerce backend built with Golang and PostgreSQL.',
      tech: ['Go', 'PostgreSQL', 'Docker', 'JWT'],
      status: 'Completed',
      github: 'https://github.com/Rizwan102003/go-commerce'
    },
    {
      title: 'Dynamic CMS',
      description: 'Reflection-powered CMS with hot-reloading and RBAC.',
      tech: ['Go', 'Gin', 'SQLite', 'React'],
      status: 'In Progress',
      github: 'https://github.com/Rizwan102003/dynamic-cms'
    }
  ];

  return (
    <div className="min-h-screen bg-primary">
      {/* Hero Section */}
      <section className="section pt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="animate-fade-in">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-tertiary border rounded-lg px-3 py-2 text-sm font-medium mb-6">
                  <div className="status-dot"></div>
                  <span className="text-muted">Available for work</span>
                </div>
                
                <h1 className="text-primary mb-4">
                  Hi, I'm <span className="text-accent">Rizwan</span>
                  <span className="block text-accent font-mono text-lg mt-2">
                    {typedText}<span className="animate-pulse">|</span>
                  </span>
                </h1>
                
                <p className="text-secondary text-lg mb-8 max-w-lg leading-relaxed">
                  Passionate about solving real-world problems through innovative software solutions. 
                  Specializing in backend systems, AI/ML, and cloud infrastructure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/projects" className="btn btn-primary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get in touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted">Years</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">8+</div>
                  <div className="text-sm text-muted">Technologies</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 bg-secondary border rounded-2xl flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-secondary border rounded-xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="status-dot"></div>
                    <span className="text-sm font-medium text-muted">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary mb-4">Tech Stack</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Technologies and tools I use to build modern, scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="card card-compact text-center hover:border-accent transition-all"
              >
                <div className="text-2xl mb-2">
                  {tech.name === 'Python' && '🐍'}
                  {tech.name === 'Java' && '☕'}
                  {tech.name === 'Go' && '🔷'}
                  {tech.name === 'React' && '⚛️'}
                  {tech.name === 'AWS' && '☁️'}
                  {tech.name === 'Docker' && '🐳'}
                  {tech.name === 'PostgreSQL' && '🐘'}
                  {tech.name === 'Git' && '📝'}
                </div>
                <div className="text-sm font-medium text-primary">{tech.name}</div>
                <div className="text-xs text-muted">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section">
        <div className="container">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-primary mb-2">Featured Projects</h2>
              <p className="text-muted">Some of my recent work</p>
            </div>
            <Link to="/projects" className="btn btn-ghost">
              View all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-primary font-semibold">{project.title}</h3>
                  <span className={`badge ${
                    project.status === 'Completed' ? 'badge-success' : 'badge-warning'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-muted mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>

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
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-primary mb-4">Let's work together</h2>
            <p className="text-muted mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Start a conversation
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;