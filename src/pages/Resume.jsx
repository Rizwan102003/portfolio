import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects & Freelance',
      period: '2023 - Present',
      description: 'Building end-to-end applications using modern tech stack including Go, React, and cloud services.',
      achievements: [
        'Developed 15+ full-stack applications with modern architecture',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Optimized database queries improving response time by 40%',
        'Built scalable microservices handling 10K+ concurrent users'
      ],
      tech: ['Go', 'React', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Data Science Engineer',
      company: 'Research & Development',
      period: '2022 - Present',
      description: 'Exploring machine learning, data analysis, and AI applications in real-world scenarios.',
      achievements: [
        'Completed IBM Data Science Professional Certificate',
        'Built ML models achieving 85%+ accuracy on complex datasets',
        'Analyzed datasets with 100K+ records using advanced techniques',
        'Developed AI-powered farming system with IoT integration'
      ],
      tech: ['Python', 'TensorFlow', 'Pandas', 'Scikit-learn', 'AWS']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Heritage Institute of Technology, Kolkata',
      period: '2021 - 2025',
      gpa: '7.3/10',
      highlights: [
        'Relevant Coursework: DSP, Microprocessors, Communication Systems, Data Structures',
        'Active member of Technical Society and Coding Club',
        'Participated in multiple hackathons and coding competitions',
        'Led team projects in embedded systems and IoT applications'
      ]
    }
  ];

  const certifications = [
    {
      name: 'IBM Data Science Professional Certificate',
      issuer: 'IBM',
      date: '2023',
      skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL']
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Architecture']
    },
    {
      name: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: '2023',
      skills: ['AI/ML', 'Automation', 'CRM', 'Data Analysis']
    }
  ];

  const skillCategories = [
    { category: 'Languages', skills: ['Python', 'Java', 'Go', 'JavaScript', 'C++'] },
    { category: 'Frameworks', skills: ['React', 'Spring Boot', 'Gin', 'FastAPI'] },
    { category: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'] },
    { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
    { category: 'Data Science', skills: ['Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib'] }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-h1 text-gray-900 mb-6">Resume</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto mb-8">
              Comprehensive overview of my skills, experience, and achievements
            </p>
            
            {/* Download Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download PDF
            </a>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Experience Section */}
              <div className="card">
                <div className="card-content">
                  <h2 className="text-h2 text-gray-900 mb-8">Experience</h2>
                  
                  <div className="space-y-8">
                    {experiences.map((exp, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-start gap-4">
                          <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-4 mb-4 border border-gray-200">
                              <h3 className="text-h3 text-gray-900">{exp.title}</h3>
                              <p className="text-accent font-medium">{exp.company}</p>
                              <p className="text-muted text-small font-mono">{exp.period}</p>
                            </div>
                            
                            <p className="text-gray-700 mb-4">{exp.description}</p>
                            
                            <div className="mb-4">
                              <h4 className="text-small font-medium text-gray-700 mb-2">
                                Key Achievements
                              </h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, idx) => (
                                  <li key={idx} className="text-gray-600 text-small flex items-start gap-2">
                                    <span className="text-green-500 mt-1">•</span>
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((tech, idx) => (
                                <span key={idx} className="badge">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        {index < experiences.length - 1 && (
                          <div className="w-px h-8 bg-gray-300 ml-1.5 mt-4"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Education Section */}
              <div className="card">
                <div className="card-content">
                  <h2 className="text-h2 text-gray-900 mb-8">Education</h2>
                  
                  {education.map((edu, index) => (
                    <div key={index} className="space-y-4">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="text-h3 text-gray-900">{edu.degree}</h3>
                        <p className="text-accent font-medium">{edu.institution}</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-muted font-mono">{edu.period}</p>
                          <p className="text-green-600 font-bold">GPA: {edu.gpa}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-small font-medium text-gray-700 mb-2">
                          Highlights
                        </h4>
                        <ul className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <li key={idx} className="text-gray-600 text-small flex items-start gap-2">
                              <span className="text-yellow-500 mt-1">★</span>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Skills Section */}
              <div className="card">
                <div className="card-content">
                  <h2 className="text-h2 text-gray-900 mb-6">Skills</h2>
                  
                  <div className="space-y-6">
                    {skillCategories.map((skillGroup, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h3 className="text-small font-medium text-gray-700 mb-3">
                          {skillGroup.category}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {skillGroup.skills.map((skill, idx) => (
                            <span key={idx} className="badge">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Certifications Section */}
              <div className="card">
                <div className="card-content">
                  <h2 className="text-h2 text-gray-900 mb-6">Certifications</h2>
                  
                  <div className="space-y-6">
                    {certifications.map((cert, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-600">
                        <h3 className="font-bold text-gray-900 text-small">{cert.name}</h3>
                        <p className="text-accent text-small">{cert.issuer}</p>
                        <p className="text-muted text-caption mb-2">{cert.date}</p>
                        <div className="flex flex-wrap gap-1">
                          {cert.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="bg-blue-50 text-blue-700 text-caption px-2 py-1 rounded border"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="card">
                <div className="card-content">
                  <h2 className="text-h2 text-gray-900 mb-6">Current Status</h2>
                  
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="space-y-2 text-small">
                      <p className="flex items-center gap-2">
                        <div className="status-dot"></div>
                        <span className="font-medium">Actively seeking opportunities</span>
                      </p>
                      <p className="text-muted">
                        Interests: Data Science, Backend Development, Cloud, DevOps
                      </p>
                      <p className="text-muted">
                        Availability: Immediate
                      </p>
                      <p className="text-muted">
                        Location: Remote/Hybrid/On-site
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-subtle">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-h2 text-gray-900 mb-4">Ready to contribute</h2>
            <p className="text-muted mb-8">
              I'm excited to bring my skills and passion to your next project. 
              Let's discuss how I can contribute to your team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn btn-primary">
                Let's Connect
              </a>
              <a href="/projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;