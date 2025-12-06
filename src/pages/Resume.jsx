import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: 'Backend Engineer',
      company: 'Personal Projects & Open Source',
      period: '2023 - Present',
      location: 'Remote',
      highlights: [
        'Built distributed systems processing 10M+ events/day with 99.9% uptime',
        'Reduced infrastructure costs by 22% through optimization and automation',
        'Implemented microservices architecture with event-driven patterns'
      ],
      tech: ['Java', 'Spring Boot', 'AWS', 'Kubernetes', 'PostgreSQL']
    },
    {
      title: 'Data Science Engineer',
      company: 'Research & Development',
      period: '2022 - Present',
      location: 'Kolkata, India',
      highlights: [
        'Developed ML models achieving 94%+ accuracy on production datasets',
        'Built real-time fraud detection system preventing $2.3M in losses',
        'Automated data pipelines reducing processing time by 48%'
      ],
      tech: ['Python', 'TensorFlow', 'Kafka', 'Docker', 'AWS']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Heritage Institute of Technology',
      location: 'Kolkata, India',
      period: '2021 - 2025',
      gpa: '7.3/10',
      highlights: [
        'Relevant Coursework: Data Structures, Algorithms, Database Systems, Computer Networks',
        'Active member of Technical Society and Coding Club',
        'Led team projects in IoT and embedded systems development'
      ]
    }
  ];

  const certifications = [
    {
      name: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2023',
      credentialId: 'IBM-DS-2023-001'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-CP-2023-002'
    },
    {
      name: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: '2023',
      credentialId: 'SF-AI-2023-003'
    }
  ];

  const skills = [
    {
      category: 'Programming Languages',
      items: ['Java', 'Python', 'Go', 'JavaScript', 'SQL', 'C++']
    },
    {
      category: 'Frameworks & Libraries',
      items: ['Spring Boot', 'React', 'TensorFlow', 'FastAPI', 'Gin', 'Express']
    },
    {
      category: 'Databases & Storage',
      items: ['PostgreSQL', 'MongoDB', 'Redis', 'SQLite', 'ClickHouse']
    },
    {
      category: 'Cloud & DevOps',
      items: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins', 'Prometheus']
    },
    {
      category: 'Data Science & ML',
      items: ['Pandas', 'Scikit-learn', 'Kafka', 'Apache Spark', 'Jupyter', 'MLflow']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'Linux', 'Postman', 'Grafana', 'ElasticSearch', 'RabbitMQ']
    }
  ];

  const projects = [
    {
      title: 'Distributed File Pipeline',
      description: 'Scalable data processing system handling 10M+ events daily',
      impact: 'Reduced processing time by 48%, lowered costs by 22%',
      tech: ['Java', 'Kafka', 'AWS', 'Docker']
    },
    {
      title: 'ML Fraud Detection',
      description: 'Real-time anomaly detection for financial transactions',
      impact: 'Achieved 94.2% accuracy, prevented $2.3M in fraud',
      tech: ['Python', 'TensorFlow', 'Redis', 'PostgreSQL']
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Infrastructure as Code for multi-region deployment',
      impact: 'Reduced deployment time from 4 hours to 12 minutes',
      tech: ['Terraform', 'Kubernetes', 'AWS', 'Jenkins']
    }
  ];

  return (
    <div>
      <main id="main-content">
        {/* Header */}
        <section className="section">
          <div className="container">
            <div className="text-center mb-xl">
              <h1 className="mb-md">Resume</h1>
              <p className="text-muted mb-lg" style={{ maxWidth: '600px', margin: '0 auto 32px' }}>
                Comprehensive overview of my technical skills, experience, and achievements
              </p>
              
              {/* Download CTA */}
              <div className="flex justify-center gap-md">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7,10 12,15 17,10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                  </svg>
                  Download PDF
                </a>
                <a
                  href="mailto:skmdrizwan2003@gmail.com"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Professional Summary */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: 0 }}>
          <div className="container">
            <div className="card" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="mb-md text-center">Professional Summary</h2>
              <p className="text-center" style={{ fontSize: '18px', lineHeight: '1.6' }}>
                Final-year <strong>Electronics & Communication Engineering</strong> student with expertise in 
                <strong> backend development</strong>, <strong>data science</strong>, and <strong>cloud infrastructure</strong>. 
                Proven track record of building scalable systems that process millions of events daily and deliver 
                measurable business impact. Seeking full-time opportunities in <strong>software engineering</strong> 
                and <strong>data engineering</strong> roles.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Grid */}
        <section className="section">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-2xl)', alignItems: 'start' }}>
              
              {/* Left Column - Experience & Education */}
              <div>
                {/* Experience */}
                <div className="mb-2xl">
                  <h2 className="mb-xl">Professional Experience</h2>
                  <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                      <div key={index} className="experience-item">
                        <div className="experience-header">
                          <h3 className="experience-title">{exp.title}</h3>
                          <div className="flex justify-between items-center mb-xs">
                            <span className="experience-company">{exp.company}</span>
                            <span className="experience-date">{exp.period}</span>
                          </div>
                          <p className="text-muted text-small">{exp.location}</p>
                        </div>
                        
                        <ul className="experience-highlights mb-md">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                          ))}
                        </ul>
                        
                        <div className="flex flex-wrap gap-xs">
                          {exp.tech.map((tech, idx) => (
                            <span key={idx} className="badge">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education */}
                <div className="mb-2xl">
                  <h2 className="mb-xl">Education</h2>
                  {education.map((edu, index) => (
                    <div key={index} className="card">
                      <div className="flex justify-between items-start mb-md">
                        <div>
                          <h3 className="mb-xs">{edu.degree}</h3>
                          <p className="text-primary font-medium">{edu.institution}</p>
                          <p className="text-muted text-small">{edu.location}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{edu.period}</p>
                          <p className="text-primary font-bold">GPA: {edu.gpa}</p>
                        </div>
                      </div>
                      
                      <ul className="experience-highlights">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx}>{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Key Projects */}
                <div>
                  <h2 className="mb-xl">Key Projects</h2>
                  <div className="grid gap-lg">
                    {projects.map((project, index) => (
                      <div key={index} className="card">
                        <h3 className="mb-sm">{project.title}</h3>
                        <p className="text-muted mb-sm">{project.description}</p>
                        <p className="mb-md" style={{ color: 'var(--color-secondary)', fontWeight: '500' }}>
                          <strong>Impact:</strong> {project.impact}
                        </p>
                        <div className="flex flex-wrap gap-xs">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="badge">{tech}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Skills & Certifications */}
              <div>
                {/* Skills */}
                <div className="mb-2xl">
                  <h2 className="mb-xl">Technical Skills</h2>
                  <div className="grid gap-lg">
                    {skills.map((skillGroup, index) => (
                      <div key={index} className="card">
                        <h3 className="mb-md text-small">{skillGroup.category}</h3>
                        <div className="flex flex-wrap gap-xs">
                          {skillGroup.items.map((skill, idx) => (
                            <span key={idx} className="badge">{skill}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-2xl">
                  <h2 className="mb-xl">Certifications</h2>
                  <div className="grid gap-md">
                    {certifications.map((cert, index) => (
                      <div key={index} className="card">
                        <h3 className="text-small mb-xs">{cert.name}</h3>
                        <p className="text-primary text-small font-medium mb-xs">{cert.issuer}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-muted text-xs">{cert.date}</span>
                          <span className="badge badge-primary">Verified</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="card">
                  <h2 className="mb-md">Contact Information</h2>
                  <div className="grid gap-sm">
                    <div className="flex items-center gap-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      <a href="mailto:skmdrizwan2003@gmail.com" className="text-small">
                        skmdrizwan2003@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center gap-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                      <a href="https://www.linkedin.com/in/skmdrizwan/" target="_blank" rel="noopener noreferrer" className="text-small">
                        LinkedIn Profile
                      </a>
                    </div>
                    <div className="flex items-center gap-sm">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <a href="https://github.com/Rizwan102003" target="_blank" rel="noopener noreferrer" className="text-small">
                        GitHub Profile
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-md pt-md" style={{ borderTop: '1px solid var(--color-border)' }}>
                    <div className="flex items-center gap-sm mb-sm">
                      <div style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-secondary)', borderRadius: '50%' }}></div>
                      <span className="text-small font-medium">Available for Full-time Roles</span>
                    </div>
                    <p className="text-xs text-muted">
                      Open to backend, data science, and cloud engineering positions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
          <div className="container">
            <div className="text-center">
              <h2 className="mb-md">Ready to Contribute</h2>
              <p className="text-muted mb-xl" style={{ maxWidth: '600px', margin: '0 auto 48px' }}>
                I'm excited to bring my technical skills and passion for building scalable systems 
                to your team. Let's discuss how I can contribute to your next project.
              </p>
              <div className="flex justify-center gap-md">
                <a href="mailto:skmdrizwan2003@gmail.com" className="btn btn-primary">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  Email Me
                </a>
                <a
                  href="https://calendly.com/skmdrizwan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Schedule Call
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Resume;