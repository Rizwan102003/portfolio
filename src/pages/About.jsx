import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const skills = [
    { name: 'Backend Development', level: 90, description: 'Java, Spring Boot, microservices' },
    { name: 'Data Science & ML', level: 85, description: 'Python, TensorFlow, data pipelines' },
    { name: 'Cloud & DevOps', level: 80, description: 'AWS, Docker, Kubernetes, Terraform' },
    { name: 'Database Systems', level: 85, description: 'PostgreSQL, MongoDB, Redis' },
    { name: 'Frontend Development', level: 75, description: 'React, JavaScript, responsive design' },
    { name: 'System Design', level: 80, description: 'Distributed systems, scalability' }
  ];

  const achievements = [
    {
      icon: '🏆',
      title: 'IBM Data Science Certification',
      description: 'Professional certification in Data Science and Machine Learning',
      year: '2023'
    },
    {
      icon: '☁️',
      title: 'AWS Cloud Practitioner',
      description: 'Certified in Amazon Web Services cloud computing',
      year: '2023'
    },
    {
      icon: '🤖',
      title: 'Salesforce AI Associate',
      description: 'Specialized in AI and automation solutions',
      year: '2023'
    },
    {
      icon: '📊',
      title: 'High-Impact Projects',
      description: 'Built systems processing 10M+ events daily',
      year: '2023-24'
    }
  ];

  const timeline = [
    {
      year: '2021',
      title: 'Started B.Tech ECE',
      description: 'Began Electronics & Communication Engineering at Heritage Institute of Technology'
    },
    {
      year: '2022',
      title: 'Discovered Programming',
      description: 'Started with Python and data structures, fell in love with problem-solving'
    },
    {
      year: '2023',
      title: 'First Major Project',
      description: 'Built Smart Farming System with IoT and ML, achieving 35% accuracy improvement'
    },
    {
      year: '2024',
      title: 'Advanced Systems',
      description: 'Developed distributed systems and cloud infrastructure, focusing on scalability'
    },
    {
      year: '2025',
      title: 'Ready for Industry',
      description: 'Graduating with strong foundation in backend, ML, and cloud technologies'
    }
  ];

  return (
    <div>
      <main id="main-content">
        {/* Header */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h1 className="mb-md">About Me</h1>
              <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
                Passionate about building scalable systems that solve real-world problems
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: 0 }}>
          <div className="container">
            <div className="card" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="text-center mb-xl">
                <h2 className="mb-lg">My Journey</h2>
                
                <div style={{ 
                  padding: 'var(--space-lg)', 
                  backgroundColor: 'var(--color-surface)', 
                  borderRadius: 'var(--border-radius)', 
                  border: '1px solid var(--color-border)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '14px',
                  textAlign: 'left',
                  marginBottom: 'var(--space-xl)'
                }}>
                  <div style={{ color: 'var(--color-secondary)' }}>const</div>
                  <span style={{ color: 'var(--color-text)' }}> developer = {'{'}</span>
                  <div style={{ marginLeft: 'var(--space-md)', color: 'var(--color-text-muted)' }}>
                    <span style={{ color: 'var(--color-secondary)' }}>name:</span> 
                    <span style={{ color: 'var(--color-primary)' }}> "Sk Md Rizwan"</span>,<br/>
                    <span style={{ color: 'var(--color-secondary)' }}>education:</span> 
                    <span style={{ color: 'var(--color-primary)' }}> "B.Tech ECE"</span>,<br/>
                    <span style={{ color: 'var(--color-secondary)' }}>gpa:</span> 
                    <span style={{ color: 'var(--color-primary)' }}> 7.3</span>,<br/>
                    <span style={{ color: 'var(--color-secondary)' }}>passion:</span> 
                    <span style={{ color: 'var(--color-primary)' }}> "Building Scalable Systems"</span>,<br/>
                    <span style={{ color: 'var(--color-secondary)' }}>impact:</span> 
                    <span style={{ color: 'var(--color-primary)' }}> "10M+ events processed daily"</span>
                  </div>
                  <span style={{ color: 'var(--color-text)' }}>{'};'}</span>
                </div>
              </div>

              <div style={{ fontSize: '18px', lineHeight: '1.6' }}>
                <p className="mb-lg">
                  I'm a final-year <strong>Electronics & Communication Engineering</strong> student 
                  from Heritage Institute of Technology, Kolkata, with a passion for building 
                  <strong> scalable backend systems</strong> and <strong>data-driven solutions</strong>.
                </p>

                <p className="mb-lg">
                  My journey started with curiosity about how large-scale systems work. This led me to 
                  dive deep into <strong>distributed systems</strong>, <strong>machine learning</strong>, 
                  and <strong>cloud infrastructure</strong>. I've built systems that process millions of 
                  events daily and deliver measurable business impact.
                </p>

                <p className="mb-lg">
                  What excites me most is the intersection of <strong>engineering excellence</strong> and 
                  <strong>real-world impact</strong>. Whether it's reducing processing time by 48% or 
                  preventing $2.3M in fraudulent transactions, I focus on building solutions that matter.
                </p>

                <p>
                  I'm actively seeking opportunities to contribute to <strong>high-scale systems</strong> 
                  at companies like Google, where I can apply my skills in backend development, 
                  data engineering, and cloud infrastructure to solve complex technical challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h2 className="mb-md">Technical Expertise</h2>
              <p className="text-muted">
                Skills developed through hands-on projects and real-world applications
              </p>
            </div>
            
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div className="grid gap-lg">
                {skills.map((skill, index) => (
                  <div key={index} className="card">
                    <div className="flex justify-between items-center mb-sm">
                      <h3 className="text-small font-medium">{skill.name}</h3>
                      <span className="text-xs text-muted font-mono">{skill.level}%</span>
                    </div>
                    <div style={{ 
                      width: '100%', 
                      height: '6px', 
                      backgroundColor: 'var(--color-surface)', 
                      borderRadius: '3px',
                      overflow: 'hidden',
                      marginBottom: 'var(--space-sm)'
                    }}>
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: `linear-gradient(90deg, var(--color-primary), var(--color-secondary))`,
                          borderRadius: '3px',
                          transition: 'width 1s ease-out'
                        }}
                      ></div>
                    </div>
                    <p className="text-muted text-small">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center mb-xl">
              <h2 className="mb-md">My Timeline</h2>
              <p className="text-muted">
                Key milestones in my technical journey
              </p>
            </div>
            
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="experience-timeline">
                {timeline.map((item, index) => (
                  <div key={index} className="experience-item">
                    <div className="flex justify-between items-center mb-sm">
                      <h3 className="font-medium">{item.title}</h3>
                      <span className="badge badge-primary">{item.year}</span>
                    </div>
                    <p className="text-muted">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h2 className="mb-md">Achievements & Certifications</h2>
              <p className="text-muted">
                Recognition and validation of technical skills
              </p>
            </div>
            
            <div className="grid grid-2" style={{ maxWidth: '800px', margin: '0 auto' }}>
              {achievements.map((achievement, index) => (
                <div key={index} className="card text-center">
                  <div style={{ fontSize: '48px', marginBottom: 'var(--space-md)' }}>
                    {achievement.icon}
                  </div>
                  <h3 className="mb-sm">{achievement.title}</h3>
                  <p className="text-muted text-small mb-md">{achievement.description}</p>
                  <span className="badge badge-secondary">{achievement.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Info */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center mb-xl">
              <h2 className="mb-md">Beyond Code</h2>
              <p className="text-muted">
                What drives me outside of technical work
              </p>
            </div>
            
            <div className="grid grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div className="card text-center">
                <h3 className="mb-md">🎯 Problem Solving</h3>
                <p className="text-muted text-small">
                  I love tackling complex algorithmic challenges and optimizing system performance. 
                  Regular participant in coding competitions and hackathons.
                </p>
              </div>
              
              <div className="card text-center">
                <h3 className="mb-md">📚 Continuous Learning</h3>
                <p className="text-muted text-small">
                  Always exploring new technologies and best practices. Currently diving deep into 
                  distributed systems design and advanced ML techniques.
                </p>
              </div>
              
              <div className="card text-center">
                <h3 className="mb-md">🌱 Open Source</h3>
                <p className="text-muted text-small">
                  Contributing to open source projects and sharing knowledge with the developer community. 
                  Believe in building tools that help others succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-md">Let's Build Something Amazing</h2>
              <p className="text-muted mb-xl" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
                I'm excited to bring my passion for scalable systems and data-driven solutions 
                to your team. Let's discuss how I can contribute to your next big project.
              </p>
              <div className="flex justify-center gap-md">
                <Link to="/contact" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Get In Touch
                </Link>
                <Link to="/projects" className="btn btn-secondary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="9" cy="9" r="2"/>
                    <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                  </svg>
                  View Projects
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;