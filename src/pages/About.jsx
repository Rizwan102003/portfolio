import React from 'react';

const SkillBar = ({ skill, percentage, delay }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-small font-medium text-gray-700">{skill}</span>
      <span className="text-small text-muted font-mono">{percentage}%</span>
    </div>
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${percentage}%`,
          animationDelay: `${delay}s`
        }}
      ></div>
    </div>
  </div>
);

const About = () => {
  const skills = [
    { name: 'Python & Data Science', percentage: 90, delay: 0.2 },
    { name: 'Java & Spring Boot', percentage: 85, delay: 0.4 },
    { name: 'Golang', percentage: 80, delay: 0.6 },
    { name: 'Cloud & DevOps', percentage: 75, delay: 0.8 },
    { name: 'React & Frontend', percentage: 85, delay: 1.0 },
    { name: 'Database Design', percentage: 80, delay: 1.2 },
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
      icon: '🎓',
      title: 'ECE Engineering',
      description: 'B.Tech in Electronics & Communication from Heritage Institute',
      year: '2021-2025'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Header */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-h1 text-gray-900 mb-6">About Me</h1>
            <p className="text-xl text-muted max-w-3xl mx-auto">
              Engineering the future through code and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story Section */}
            <div className="card">
              <div className="card-content">
                <h2 className="text-h2 text-gray-900 mb-6">My Journey</h2>
                
                <div className="space-y-6 text-body text-gray-700">
                  <div className="code-block">
                    <div className="font-mono text-small">
                      <div className="text-blue-400">const</div> <span className="text-yellow-300">developer</span> = {'{'}
                      <div className="ml-4">
                        <span className="text-green-400">name:</span> <span className="text-orange-300">"Sk Md Rizwan"</span>,<br/>
                        <span className="text-green-400">education:</span> <span className="text-orange-300">"B.Tech ECE"</span>,<br/>
                        <span className="text-green-400">gpa:</span> <span className="text-purple-300">7.3</span>,<br/>
                        <span className="text-green-400">passion:</span> <span className="text-orange-300">"Problem Solving"</span>
                      </div>
                      {'};'}
                    </div>
                  </div>

                  <p>
                    I'm a third-year <strong>Electronics & Communication Engineering</strong> student 
                    from Heritage Institute of Technology, Kolkata, with a strong foundation in both 
                    hardware and software domains.
                  </p>

                  <p>
                    My expertise spans across <strong>Data Science</strong>, 
                    <strong> Backend Development</strong>, 
                    <strong> Cloud Computing</strong>, and 
                    <strong> DevOps</strong> - building scalable, 
                    intelligent systems that make a real impact.
                  </p>

                  <p>
                    Currently architecting innovative solutions including an 
                    <strong> AI-powered farming ecosystem</strong>, 
                    a <strong>dynamic CMS with live schema editing</strong>, 
                    and a <strong>comprehensive hiring platform</strong> 
                    for the security industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="card">
              <div className="card-content">
                <h2 className="text-h2 text-gray-900 mb-8">Technical Skills</h2>
                
                <div className="space-y-4">
                  {skills.map((skill, index) => (
                    <SkillBar
                      key={index}
                      skill={skill.name}
                      percentage={skill.percentage}
                      delay={skill.delay}
                    />
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <p className="text-small text-muted font-mono mb-2">
                    Status: Continuously learning and evolving...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-subtle">
        <div className="container">
          <h2 className="text-h2 text-gray-900 text-center mb-12">Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center">
                <div className="card-content">
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h3 className="text-h3 text-gray-900 mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted text-small mb-3">
                    {achievement.description}
                  </p>
                  <div className="badge">
                    {achievement.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <h2 className="text-h2 text-gray-900 text-center mb-12">Technology Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', icon: '🐍' },
              { name: 'Java', icon: '☕' },
              { name: 'Golang', icon: '🔷' },
              { name: 'React', icon: '⚛️' },
              { name: 'AWS', icon: '☁️' },
              { name: 'Docker', icon: '🐳' },
              { name: 'PostgreSQL', icon: '🐘' },
              { name: 'Git', icon: '📝' },
              { name: 'Linux', icon: '🐧' },
              { name: 'Kubernetes', icon: '⚙️' },
              { name: 'TensorFlow', icon: '🧠' },
              { name: 'Spring Boot', icon: '🍃' },
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

      {/* Personal Info */}
      <section className="section bg-subtle">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="card">
                <div className="card-content text-center">
                  <h3 className="text-h3 text-gray-900 mb-4">Education</h3>
                  <p className="text-muted mb-2">B.Tech ECE</p>
                  <p className="text-small text-gray-600">Heritage Institute of Technology</p>
                  <p className="text-small text-gray-500">GPA: 7.3/10</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content text-center">
                  <h3 className="text-h3 text-gray-900 mb-4">Location</h3>
                  <p className="text-muted mb-2">Kolkata, India</p>
                  <p className="text-small text-gray-600">Open to Remote Work</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <div className="status-dot"></div>
                    <span className="text-small">Available</span>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-content text-center">
                  <h3 className="text-h3 text-gray-900 mb-4">Interests</h3>
                  <p className="text-muted mb-2">AI/ML Research</p>
                  <p className="text-small text-gray-600">Cloud Architecture</p>
                  <p className="text-small text-gray-500">Open Source</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;