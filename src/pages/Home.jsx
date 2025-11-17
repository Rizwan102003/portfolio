import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section pt-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-small font-medium mb-4">
                  <div className="status-dot"></div>
                  Available for work
                </div>
                <h1 className="text-h1 text-gray-900 mb-4">
                  Hi, I'm <span className="text-accent">Rizwan</span>
                </h1>
                <div className="h-8 mb-6">
                  <p className="text-xl text-muted font-mono">
                    {typedText}<span className="animate-pulse">|</span>
                  </p>
                </div>
                <p className="text-body text-muted mb-8 max-w-lg">
                  Passionate about solving real-world problems through innovative software solutions. 
                  Specializing in backend systems, AI/ML, and cloud infrastructure.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get in touch
                </Link>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-h2 font-bold text-gray-900">15+</div>
                  <div className="text-small text-muted">Projects</div>
                </div>
                <div>
                  <div className="text-h2 font-bold text-gray-900">3+</div>
                  <div className="text-small text-muted">Years</div>
                </div>
                <div>
                  <div className="text-h2 font-bold text-gray-900">8+</div>
                  <div className="text-small text-muted">Technologies</div>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src={profilePic}
                  alt="Rizwan"
                  className="w-80 h-80 rounded-2xl object-cover shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg border border-gray-200">
                  <div className="flex items-center gap-2">
                    <div className="status-dot"></div>
                    <span className="text-small font-medium">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section bg-subtle">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-gray-900 mb-4">Tech Stack</h2>
            <p className="text-muted max-w-2xl mx-auto">
              Technologies and tools I use to build modern, scalable applications
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Java', icon: '☕' },
              { name: 'Go', icon: '🔷' },
              { name: 'React', icon: '⚛️' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Git', icon: '📝' }
            ].map((tech, index) => (
              <div
                key={index}
                className="card text-center p-6 hover:shadow-md transition-all duration-200"
              >
                <div className="text-3xl mb-2">{tech.icon}</div>
                <div className="text-small font-medium text-gray-700">{tech.name}</div>
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
              <h2 className="text-h2 text-gray-900 mb-2">Featured Projects</h2>
              <p className="text-muted">Some of my recent work</p>
            </div>
            <Link to="/projects" className="btn btn-ghost">
              View all projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart Farming System',
                description: 'AI-powered agriculture ecosystem with IoT sensors and machine learning.',
                tech: ['Python', 'ML', 'IoT', 'Firebase'],
                status: 'Completed'
              },
              {
                title: 'GoCommerce Backend',
                description: 'Full-featured e-commerce backend built with Golang and PostgreSQL.',
                tech: ['Go', 'PostgreSQL', 'Docker', 'JWT'],
                status: 'Completed'
              },
              {
                title: 'Dynamic CMS',
                description: 'Reflection-powered CMS with hot-reloading and RBAC.',
                tech: ['Go', 'Gin', 'SQLite', 'React'],
                status: 'In Progress'
              }
            ].map((project, index) => (
              <div key={index} className="card">
                <div className="card-content">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-h3 text-gray-900">{project.title}</h3>
                    <span className={`badge ${
                      project.status === 'Completed' ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-muted mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-subtle">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-gray-900 mb-4">Let's work together</h2>
            <p className="text-muted mb-8">
              I'm always interested in new opportunities and exciting projects. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn btn-primary">
                Start a conversation
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary"
              >
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