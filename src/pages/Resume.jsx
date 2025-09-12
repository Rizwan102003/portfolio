import React from 'react';

const Resume = () => {
  const experiences = [
    {
      title: 'Full Stack Developer',
      company: 'Personal Projects',
      period: '2023 - Present',
      description: 'Building end-to-end applications using modern tech stack including Go, React, and cloud services.',
      achievements: [
        'Developed 15+ full-stack applications',
        'Implemented CI/CD pipelines with GitHub Actions',
        'Optimized database queries reducing response time by 40%'
      ]
    },
    {
      title: 'Data Science Enthusiast',
      company: 'Self-Learning & Projects',
      period: '2022 - Present',
      description: 'Exploring machine learning, data analysis, and AI applications in real-world scenarios.',
      achievements: [
        'Completed IBM Data Science Professional Certificate',
        'Built ML models with 85%+ accuracy',
        'Analyzed datasets with 100K+ records'
      ]
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Electronics & Communication Engineering',
      institution: 'Heritage Institute of Technology, Kolkata',
      period: '2021 - 2025',
      gpa: '7.3/10',
      highlights: [
        'Relevant Coursework: Digital Signal Processing, Microprocessors, Communication Systems',
        'Active member of Technical Society',
        'Participated in multiple hackathons and coding competitions'
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

  return (
    <div className="min-h-screen animated-bg pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            My <span className="gradient-text bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my skills, experience, and achievements
          </p>
          
          {/* Download Button */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 inline-flex items-center gap-3 shadow-2xl"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume PDF
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">💼</span>
                Experience
              </h3>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-purple-300 font-semibold">{exp.company}</p>
                        <p className="text-white/60 text-sm mb-3">{exp.period}</p>
                        <p className="text-white/80 mb-4">{exp.description}</p>
                        
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                              <span className="text-green-400 mt-1">✓</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-transparent ml-2 mt-4"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
                <span className="mr-3">🎓</span>
                Education
              </h3>
              
              {education.map((edu, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                    <p className="text-blue-300 font-semibold">{edu.institution}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-white/60">{edu.period}</p>
                      <p className="text-green-400 font-bold">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-white/70 text-sm flex items-start gap-2">
                        <span className="text-yellow-400 mt-1">★</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Skills Section */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">⚡</span>
                Core Skills
              </h3>
              
              <div className="space-y-6">
                {[
                  { category: 'Languages', skills: ['Python', 'Java', 'Go', 'JavaScript', 'C++'] },
                  { category: 'Frameworks', skills: ['React', 'Spring Boot', 'Gin', 'FastAPI'] },
                  { category: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Redis'] },
                  { category: 'Cloud & DevOps', skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'] },
                  { category: 'Data Science', skills: ['Pandas', 'Scikit-learn', 'TensorFlow', 'Matplotlib'] }
                ].map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="text-white font-semibold mb-3">{skillGroup.category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs px-3 py-1 rounded-full"
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
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🏆</span>
                Certifications
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="border-l-4 border-gradient-to-b from-yellow-400 to-orange-500 pl-4">
                    <h4 className="text-white font-bold text-sm">{cert.name}</h4>
                    <p className="text-blue-300 text-sm">{cert.issuer}</p>
                    <p className="text-white/60 text-xs mb-2">{cert.date}</p>
                    <div className="flex flex-wrap gap-1">
                      {cert.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-white/70 text-xs px-2 py-1 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Aspirations Section */}
            <div className="glass rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="mr-3">🎯</span>
                Career Goals
              </h3>
              
              <div className="space-y-4 text-white/80 text-sm">
                <p>
                  Seeking opportunities in:
                </p>
                <ul className="space-y-2">
                  {[
                    'Data Science & Machine Learning',
                    'Backend Development (Java/Go)',
                    'Cloud & DevOps Engineering',
                    'Full Stack Development'
                  ].map((goal, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-green-400">→</span>
                      {goal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;