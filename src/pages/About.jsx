import React from 'react';

const SkillBar = ({ skill, percentage, delay }) => (
  <div className="mb-6">
    <div className="flex justify-between mb-2">
      <span className="text-white font-medium">{skill}</span>
      <span className="text-white/70">{percentage}%</span>
    </div>
    <div className="w-full bg-white/20 rounded-full h-3">
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
      description: 'Professional certification in Data Science and Machine Learning'
    },
    {
      icon: '☁️',
      title: 'AWS Cloud Practitioner',
      description: 'Certified in Amazon Web Services cloud computing'
    },
    {
      icon: '🤖',
      title: 'Salesforce AI Associate',
      description: 'Specialized in AI and automation solutions'
    },
    {
      icon: '🎓',
      title: 'ECE Engineering',
      description: 'B.Tech in Electronics & Communication from Heritage Institute'
    }
  ];

  return (
    <div className="min-h-screen animated-bg pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            About <span className="gradient-text bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Passionate engineer building the future through code and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story Section */}
          <div className="glass rounded-3xl p-8 card-hover">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="mr-3">🚀</span>
              My Journey
            </h3>
            
            <div className="space-y-6 text-white/90 text-lg leading-relaxed">
              <p>
                I'm a third-year <span className="font-semibold text-blue-300">B.Tech student in Electronics & Communication Engineering</span> from Heritage Institute of Technology, Kolkata, maintaining a <span className="font-semibold text-green-300">GPA of 7.3</span>.
              </p>

              <p>
                My passion lies in exploring the intersection of <span className="font-semibold text-purple-300">hardware and software</span> to build intelligent, impactful systems that solve real-world problems.
              </p>

              <p>
                My long-term goal is to secure a top-ranking position in the IT industry while continuously building industry-level skills in <span className="font-semibold text-yellow-300">Data Science</span>, <span className="font-semibold text-red-300">Full Stack Development</span>, <span className="font-semibold text-blue-300">Cloud Computing</span>, and <span className="font-semibold text-green-300">DevOps</span>.
              </p>

              <p>
                Currently working on multiple impactful projects including an <span className="font-semibold text-pink-300">AI-powered farming system</span>, a <span className="font-semibold text-indigo-300">Golang CMS with live schema editing</span>, and a <span className="font-semibold text-orange-300">SecureHire platform</span> to digitally empower security personnel across India.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="glass rounded-3xl p-8 card-hover">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <span className="mr-3">⚡</span>
              Technical Skills
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
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-16">
          <h3 className="text-4xl font-bold text-white text-center mb-12">
            🏅 Achievements & Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass rounded-2xl p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">
                  {achievement.title}
                </h4>
                <p className="text-white/70 text-sm">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-16 glass rounded-3xl p-8">
          <h3 className="text-3xl font-bold text-white text-center mb-8">
            🛠️ Technology Stack
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Python', color: 'from-yellow-400 to-yellow-600' },
              { name: 'Java', color: 'from-red-500 to-red-700' },
              { name: 'Golang', color: 'from-blue-400 to-blue-600' },
              { name: 'React', color: 'from-cyan-400 to-cyan-600' },
              { name: 'AWS', color: 'from-orange-400 to-orange-600' },
              { name: 'Docker', color: 'from-blue-500 to-blue-700' },
              { name: 'PostgreSQL', color: 'from-indigo-400 to-indigo-600' },
              { name: 'Git', color: 'from-gray-400 to-gray-600' },
              { name: 'Linux', color: 'from-green-400 to-green-600' },
              { name: 'Kubernetes', color: 'from-purple-400 to-purple-600' },
              { name: 'TensorFlow', color: 'from-orange-500 to-orange-700' },
              { name: 'Spring Boot', color: 'from-green-500 to-green-700' },
            ].map((tech, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${tech.color} rounded-xl p-4 text-center text-white font-semibold hover:scale-105 transition-all duration-300 shadow-lg`}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;