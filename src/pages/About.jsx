import React from 'react';

const SkillBar = ({ skill, percentage, delay }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-blue-100 font-medium mono-font">{skill}</span>
      <span className="text-cyan-400 mono-font">{percentage}%</span>
    </div>
    <div className="w-full bg-gray-800/50 rounded-full h-3 border border-blue-500/30">
      <div
        className="skill-bar h-3 rounded-full"
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
      tech: 'Python • ML • Analytics'
    },
    {
      icon: '☁️',
      title: 'AWS Cloud Practitioner',
      description: 'Certified in Amazon Web Services cloud computing',
      tech: 'AWS • Cloud • Infrastructure'
    },
    {
      icon: '🤖',
      title: 'Salesforce AI Associate',
      description: 'Specialized in AI and automation solutions',
      tech: 'AI • Automation • CRM'
    },
    {
      icon: '🎓',
      title: 'ECE Engineering',
      description: 'B.Tech in Electronics & Communication from Heritage Institute',
      tech: 'Electronics • Communication • Systems'
    }
  ];

  return (
    <div className="min-h-screen tech-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tech-font">
            <span className="text-cyan-400">&lt;</span>
            <span className="gradient-text">About</span>
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto mono-font">
            <span className="text-cyan-400">// </span>
            Engineering the future through code and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <div className="glass rounded-3xl p-8 card-hover border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center tech-font">
              <span className="mr-3 text-cyan-400">{'{'}</span>
              <span className="gradient-text">Journey</span>
              <span className="ml-3 text-cyan-400">{'}'}</span>
            </h3>
            
            <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
              <div className="code-block p-4 rounded-lg">
                <p className="mono-font text-sm">
                  <span className="text-cyan-400">const</span> <span className="text-yellow-300">developer</span> = {'{'}
                </p>
                <p className="mono-font text-sm ml-4">
                  <span className="text-blue-300">name:</span> <span className="text-green-300">"Sk Md Rizwan"</span>,
                </p>
                <p className="mono-font text-sm ml-4">
                  <span className="text-blue-300">education:</span> <span className="text-green-300">"B.Tech ECE"</span>,
                </p>
                <p className="mono-font text-sm ml-4">
                  <span className="text-blue-300">gpa:</span> <span className="text-orange-300">7.3</span>,
                </p>
                <p className="mono-font text-sm ml-4">
                  <span className="text-blue-300">passion:</span> <span className="text-green-300">"Problem Solving"</span>
                </p>
                <p className="mono-font text-sm">{'};'}</p>
              </div>

              <p>
                I'm a third-year <span className="font-semibold text-cyan-300">Electronics & Communication Engineering</span> student 
                from Heritage Institute of Technology, Kolkata, with a strong foundation in both 
                <span className="font-semibold text-blue-300"> hardware and software</span> domains.
              </p>

              <p>
                My expertise spans across <span className="font-semibold text-green-300">Data Science</span>, 
                <span className="font-semibold text-yellow-300"> Backend Development</span>, 
                <span className="font-semibold text-purple-300"> Cloud Computing</span>, and 
                <span className="font-semibold text-red-300"> DevOps</span> - building scalable, 
                intelligent systems that make a real impact.
              </p>

              <p>
                Currently architecting innovative solutions including an 
                <span className="font-semibold text-cyan-300"> AI-powered farming ecosystem</span>, 
                a <span className="font-semibold text-blue-300">dynamic CMS with live schema editing</span>, 
                and a <span className="font-semibold text-green-300">comprehensive hiring platform</span> 
                for the security industry.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="glass rounded-3xl p-8 card-hover border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center tech-font">
              <span className="mr-3 text-cyan-400">⚡</span>
              <span className="gradient-text">Skills</span>
              <span className="ml-3 text-cyan-400">.exe</span>
            </h3>
            
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

            <div className="mt-8 p-4 bg-gray-900/50 rounded-lg border border-cyan-400/30">
              <p className="text-cyan-400 mono-font text-sm mb-2">
                $ cat /proc/skills
              </p>
              <p className="text-blue-200 mono-font text-xs">
                Status: Continuously learning and evolving...
              </p>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12 tech-font">
            <span className="text-cyan-400">[</span>
            <span className="gradient-text">Achievements</span>
            <span className="text-cyan-400">]</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center card-hover border border-blue-500/30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-lg font-bold text-white mb-3 tech-font">
                  {achievement.title}
                </h4>
                <p className="text-blue-200 text-sm mb-3">
                  {achievement.description}
                </p>
                <div className="text-xs text-cyan-400 mono-font bg-gray-900/50 rounded px-2 py-1">
                  {achievement.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 glass rounded-3xl p-8 border border-blue-500/30">
          <h3 className="text-3xl font-bold text-white text-center mb-8 tech-font">
            <span className="text-cyan-400">&lt;</span>
            <span className="gradient-text">TechStack</span>
            <span className="text-cyan-400">/&gt;</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', color: 'from-yellow-400 to-yellow-600', icon: '🐍' },
              { name: 'Java', color: 'from-red-500 to-red-700', icon: '☕' },
              { name: 'Golang', color: 'from-blue-400 to-blue-600', icon: '🔷' },
              { name: 'React', color: 'from-cyan-400 to-cyan-600', icon: '⚛️' },
              { name: 'AWS', color: 'from-orange-400 to-orange-600', icon: '☁️' },
              { name: 'Docker', color: 'from-blue-500 to-blue-700', icon: '🐳' },
              { name: 'PostgreSQL', color: 'from-indigo-400 to-indigo-600', icon: '🐘' },
              { name: 'Git', color: 'from-gray-400 to-gray-600', icon: '📝' },
              { name: 'Linux', color: 'from-green-400 to-green-600', icon: '🐧' },
              { name: 'Kubernetes', color: 'from-purple-400 to-purple-600', icon: '⚙️' },
              { name: 'TensorFlow', color: 'from-orange-500 to-orange-700', icon: '🧠' },
              { name: 'Spring Boot', color: 'from-green-500 to-green-700', icon: '🍃' },
            ].map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tech.color} rounded-xl p-4 text-center text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg border border-cyan-400/30 card-hover`}
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-sm mono-font">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* System Info */}
        <div className="mt-16 glass rounded-3xl p-8 border border-blue-500/30">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 mono-font">
            $ system --info
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mono-font text-sm">
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-400/30">
              <p className="text-cyan-400 mb-2">OS: Developer v3.0</p>
              <p className="text-blue-200">Kernel: Innovation-Engine</p>
              <p className="text-blue-200">Shell: Problem-Solver</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-400/30">
              <p className="text-cyan-400 mb-2">CPU: Multi-Core Learning</p>
              <p className="text-blue-200">RAM: Unlimited Curiosity</p>
              <p className="text-blue-200">Storage: Growing Knowledge</p>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4 border border-cyan-400/30">
              <p className="text-cyan-400 mb-2">Network: Always Connected</p>
              <p className="text-blue-200">Status: Ready to Code</p>
              <p className="text-green-400">Uptime: 24/7 Learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;