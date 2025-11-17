import React from 'react';

const SkillBar = ({ skill, percentage, delay }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-sm font-medium text-primary">{skill}</span>
      <span className="text-sm text-muted font-mono">{percentage}%</span>
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

  const techStack = [
    { name: 'Python', category: 'Language' },
    { name: 'Java', category: 'Language' },
    { name: 'Golang', category: 'Language' },
    { name: 'React', category: 'Frontend' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Docker', category: 'DevOps' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'Git', category: 'Tools' },
    { name: 'Linux', category: 'OS' },
    { name: 'Kubernetes', category: 'DevOps' },
    { name: 'TensorFlow', category: 'ML' },
    { name: 'Spring Boot', category: 'Framework' },
  ];

  return (
    <div className="min-h-screen bg-primary pt-24">
      {/* Header */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-primary mb-6">About Me</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Engineering the future through code and innovation
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Story Section */}
            <div className="card">
              <h2 className="text-primary mb-6">My Journey</h2>
              
              <div className="space-y-6 text-secondary">
                <div className="code-block">
                  <div className="font-mono text-sm">
                    <div className="text-accent">const</div> <span className="text-primary">developer</span> = {'{'}
                    <div className="ml-4 text-muted">
                      <span className="text-accent">name:</span> <span className="text-primary">"Sk Md Rizwan"</span>,<br/>
                      <span className="text-accent">education:</span> <span className="text-primary">"B.Tech ECE"</span>,<br/>
                      <span className="text-accent">gpa:</span> <span className="text-primary">7.3</span>,<br/>
                      <span className="text-accent">passion:</span> <span className="text-primary">"Problem Solving"</span>
                    </div>
                    {'};'}
                  </div>
                </div>

                <p>
                  I'm a third-year <strong className="text-primary">Electronics & Communication Engineering</strong> student 
                  from Heritage Institute of Technology, Kolkata, with a strong foundation in both 
                  hardware and software domains.
                </p>

                <p>
                  My expertise spans across <strong className="text-primary">Data Science</strong>, 
                  <strong className="text-primary"> Backend Development</strong>, 
                  <strong className="text-primary"> Cloud Computing</strong>, and 
                  <strong className="text-primary"> DevOps</strong> - building scalable, 
                  intelligent systems that make a real impact.
                </p>

                <p>
                  Currently architecting innovative solutions including an 
                  <strong className="text-primary"> AI-powered farming ecosystem</strong>, 
                  a <strong className="text-primary">dynamic CMS with live schema editing</strong>, 
                  and a <strong className="text-primary">comprehensive hiring platform</strong> 
                  for the security industry.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div className="card">
              <h2 className="text-primary mb-8">Technical Skills</h2>
              
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

              <div className="mt-8 p-4 bg-tertiary rounded-lg border">
                <p className="text-sm text-muted font-mono mb-2">
                  <span className="text-accent">$</span> status --learning
                </p>
                <p className="text-sm text-muted">
                  Continuously learning and evolving...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-secondary">
        <div className="container">
          <h2 className="text-primary text-center mb-12">Achievements</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className="text-primary font-semibold mb-3">
                  {achievement.title}
                </h3>
                <p className="text-muted text-sm mb-3 leading-relaxed">
                  {achievement.description}
                </p>
                <div className="badge badge-accent">
                  {achievement.year}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section">
        <div className="container">
          <h2 className="text-primary text-center mb-12">Technology Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="card card-compact text-center hover:border-accent transition-all"
              >
                <div className="text-2xl mb-2">
                  {tech.name === 'Python' && '🐍'}
                  {tech.name === 'Java' && '☕'}
                  {tech.name === 'Golang' && '🔷'}
                  {tech.name === 'React' && '⚛️'}
                  {tech.name === 'AWS' && '☁️'}
                  {tech.name === 'Docker' && '🐳'}
                  {tech.name === 'PostgreSQL' && '🐘'}
                  {tech.name === 'Git' && '📝'}
                  {tech.name === 'Linux' && '🐧'}
                  {tech.name === 'Kubernetes' && '⚙️'}
                  {tech.name === 'TensorFlow' && '🧠'}
                  {tech.name === 'Spring Boot' && '🍃'}
                </div>
                <div className="text-sm font-medium text-primary">{tech.name}</div>
                <div className="text-xs text-muted">{tech.category}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="section bg-secondary">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="card text-center">
                <h3 className="text-primary font-semibold mb-4">Education</h3>
                <p className="text-muted mb-2">B.Tech ECE</p>
                <p className="text-sm text-subtle">Heritage Institute of Technology</p>
                <p className="text-sm text-subtle">GPA: 7.3/10</p>
              </div>
              
              <div className="card text-center">
                <h3 className="text-primary font-semibold mb-4">Location</h3>
                <p className="text-muted mb-2">Kolkata, India</p>
                <p className="text-sm text-subtle">Open to Remote Work</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <div className="status-dot"></div>
                  <span className="text-sm text-muted">Available</span>
                </div>
              </div>
              
              <div className="card text-center">
                <h3 className="text-primary font-semibold mb-4">Interests</h3>
                <p className="text-muted mb-2">AI/ML Research</p>
                <p className="text-sm text-subtle">Cloud Architecture</p>
                <p className="text-sm text-subtle">Open Source</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;