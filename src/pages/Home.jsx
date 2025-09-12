import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 50; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 20,
        size: Math.random() * 4 + 2,
      });
    }
    setParticles(particleArray);
  }, []);

  return (
    <div className="particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: `${particle.left}%`,
            animationDelay: `${particle.animationDelay}s`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Data Science | Java | Cloud & DevOps | Software Engineering | ECE";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen animated-bg relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        {/* Profile Image with Glow Effect */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 blur-lg opacity-75 animate-pulse"></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/30 shadow-2xl float"
          />
        </div>

        {/* Main Heading with Gradient */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-white">
          Hi, I'm{' '}
          <span className="gradient-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
            Rizwan
          </span>
        </h1>

        {/* Typing Animation */}
        <div className="h-8 mb-6">
          <p className="text-xl md:text-2xl text-white/90 font-mono">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/80 max-w-4xl mb-8 leading-relaxed">
          I'm passionate about solving real-world problems through software. With hands-on experience across 
          <span className="font-semibold text-yellow-300"> backend development (Go/Java)</span>, 
          <span className="font-semibold text-blue-300"> AI/ML</span>, 
          <span className="font-semibold text-green-300"> cloud infrastructure</span>, and 
          <span className="font-semibold text-purple-300"> electronics</span>, 
          I bring an engineering mindset to every challenge.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/projects"
            className="btn-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            🚀 View My Projects
          </Link>
          <Link
            to="/contact"
            className="btn-secondary text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl"
          >
            💬 Let's Connect
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
          <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-white/70">Projects Completed</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">5+</div>
            <div className="text-white/70">Technologies Mastered</div>
          </div>
          <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-3xl font-bold text-white mb-2">3+</div>
            <div className="text-white/70">Certifications Earned</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;