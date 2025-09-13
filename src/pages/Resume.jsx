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
      skills: ['Python', 'Machine Learning', 'Data Visualization', 'SQL'],
      credentialId: 'IBM-DS-2023-001'
    },
    {
      name: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2023',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Architecture'],
      credentialId: 'AWS-CP-2023-002'
    },
    {
      name: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: '2023',
      skills: ['AI/ML', 'Automation', 'CRM', 'Data Analysis'],
      credentialId: 'SF-AI-2023-003'
    }
  ];

  return (
    <div className="min-h-screen tech-bg pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tech-font">
            <span className="text-cyan-400">&lt;</span>
            <span className="gradient-text">Resume</span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mb-8 mono-font">
            <span className="text-cyan-400">// </span>
            Comprehensive overview of skills, experience, and achievements
          </p>
          
          {/* Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-tech text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl mono-font"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume.pdf
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="glass rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center tech-font">
                <span className="mr-3 text-cyan-400">💼</span>
                <span className="gradient-text">Experience</span>
                <span className="ml-3 text-cyan-400">.log</span>
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mt-2 flex-shrink-0 neon-cyan"></div>
                      <div className="flex-1">
                        <div className="bg-gray-900/50 rounded-lg p-4 mb-4 border border-cyan-400/30">
                          <h4 className="text-xl font-bold text-cyan-400 tech-font">{exp.title}</h4>
                          <p className="text-blue-300 font-semibold mono-font">{exp.company}</p>
                          <p className="text-blue-200/60 text-sm mono-font">{exp.period}</p>
                        </div>
                        
                        <p className="text-blue-100 mb-4">{exp.description}</p>
                        
                        <div className="mb-4">
                          <h5 className="text-cyan-400 font-semibold mb-2 mono-font text-sm">
                            $ achievements --list
                          </h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-blue-200 text-sm flex items-start gap-2">
                                <span className="text-green-400 mt-1 mono-font">&gt</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full font-medium mono-font border border-cyan-400/30"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-px h-8 bg-gradient-to-b from-cyan-400 to-transparent ml-2 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="glass rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center tech-font">
                <span className="mr-3 text-cyan-400">🎓</span>
                <span className="gradient-text">Education</span>
                <span className="ml-3 text-cyan-400">.edu</span>
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="space-y-4">
                  <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-400/30">
                    <h4 className="text-xl font-bold text-cyan-400 tech-font">{edu.degree}</h4>
                    <p className="text-blue-300 font-semibold mono-font">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-blue-200/60 mono-font">{edu.period}</p>
                      <p className="text-green-400 font-bold mono-font">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-cyan-400 font-semibold mb-2 mono-font text-sm">
                      $ highlights --show
                    </h5>
                    <ul className="space-y-2">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-blue-200 text-sm flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">★</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="glass rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center tech-font">
                <span className="mr-3 text-cyan-400">⚡</span>
                <span className="gradient-text">Skills</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  { category: 'Languages', skills: ['Python', 'Java', 'Go', 'JavaScript', 'C++'], icon: '💻' },
                  { category: 'Frameworks', skills: ['React', 'Spring Boot', 'Gin', 'FastAPI'], icon: '🔧' },
                  { category: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'], icon: '🗄️' },
                  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'], icon: '☁️' },
                  { category: 'Data Science', skills: ['Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib'], icon: '📊' }
                ].map((skillGroup, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/20">
                    <h4 className="text-cyan-400 font-semibold mb-3 flex items-center mono-font">
                      <span className="mr-2">{skillGroup.icon}</span>
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-xs px-3 py-1 rounded-full mono-font border border-cyan-400/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="glass rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center tech-font">
                <span className="mr-3 text-cyan-400">🏆</span>
                <span className="gradient-text">Certifications</span>
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-4 border-l-4 border-cyan-400">
                    <h4 className="text-white font-bold text-sm tech-font">{cert.name}</h4>
                    <p className="text-blue-300 text-sm mono-font">{cert.issuer}</p>
                    <p className="text-blue-200/60 text-xs mb-2 mono-font">{cert.date}</p>
                    <p className="text-cyan-400 text-xs mb-2 mono-font">ID: {cert.credentialId}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-blue-800/30 text-blue-200 text-xs px-2 py-1 rounded mono-font border border-blue-500/30"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* System Status */}
            <div className="glass rounded-3xl p-8 border border-blue-500/30">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center tech-font">
                <span className="mr-3 text-cyan-400">🎯</span>
                <span className="gradient-text">Status</span>
              </h3>
              
              <div className="bg-gray-900/80 rounded-lg p-4 border border-cyan-400/30">
                <p className="text-cyan-400 mono-font text-sm mb-2">
                  $ career --status
                </p>
                <div className="space-y-2 text-sm mono-font">
                  <p className="text-green-400">
                    &gt Status: ACTIVELY_SEEKING
                  </p>
                  <p className="text-blue-200">
                    &gt Interests: [Data Science, Backend Dev, Cloud, DevOps]
                  </p>
                  <p className="text-yellow-400">
                    &gt Availability: IMMEDIATE
                  </p>
                  <p className="text-purple-400">
                    &gt Location: Remote/Hybrid/On-site
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-2 text-blue-200 text-sm">
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-400 rounded-full status-online"></span>
                  <span className="mono-font">Open to opportunities</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                  <span className="mono-font">Continuous learning mode</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                  <span className="mono-font">Building innovative solutions</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Terminal CTA */}
        <div className="mt-16 glass rounded-3xl p-8 border border-blue-500/30">
          <div className="bg-gray-900/80 rounded-lg p-6 border border-cyan-400/30">
            <p className="text-cyan-400 mono-font text-sm mb-2">
              $ contact --hire --developer="rizwan"
            </p>
            <p className="text-green-400 mono-font text-sm mb-2">
              Initializing connection...
            </p>
            <p className="text-blue-200 mono-font text-sm mb-4">
              Ready to contribute to your next big project!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="btn-tech text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 mono-font"
              >
                <span className="text-cyan-400">&lt;</span>
                Let's Connect
                <span className="text-cyan-400">/&gt;</span>
              </a>
              <a
                href="/projects"
                className="btn-outline px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 inline-flex items-center gap-2 mono-font"
              >
                <span className="text-cyan-400">[</span>
                View Projects
                <span className="text-cyan-400">]</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;