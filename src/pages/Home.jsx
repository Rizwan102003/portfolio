import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

const ParticleBackground = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particleArray = [];
    for (let i = 0; i < 30; i++) {
      particleArray.push({
        id: i,
        left: Math.random() * 100,
        animationDelay: Math.random() * 15,
        size: Math.random() * 3 + 1,
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

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00a2ff';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);
    return () => clearInterval(interval);
  }, []);

  return <canvas id="matrix-canvas" className="matrix-bg"></canvas>;
};

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Full Stack Developer | Data Scientist | Cloud Engineer";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen tech-bg relative overflow-hidden">
      <MatrixRain />
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 pt-20">
        {/* Profile Image with Tech Glow */}
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 blur-xl opacity-60 animate-pulse"></div>
          <div className="absolute inset-2 rounded-full border-2 border-cyan-400/50 animate-spin" style={{animationDuration: '8s'}}></div>
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-cyan-400/30 shadow-2xl float pulse-blue"
          />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full status-online"></div>
        </div>

        {/* Main Heading with Tech Style */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 text-white tech-font">
          <span className="text-blue-200">Hello</span>
          <span className="gradient-text">World</span>
          <span className="text-cyan-400">()</span>
        </h1>

        <div className="text-2xl md:text-3xl mb-6 text-cyan-400 mono-font">
          I'm <span className="gradient-text font-bold">Rizwan</span>
        </div>

        {/* Typing Animation with Tech Style */}
        <div className="h-12 mb-8">
          <p className="text-lg md:text-xl text-blue-200 mono-font">
            <span className="text-cyan-400">$</span> echo "{typedText}
            <span className="animate-pulse text-cyan-400">|</span>"
          </p>
        </div>

        {/* Description */}
        <div className="max-w-4xl mb-8 glass rounded-2xl p-6 border border-blue-500/30">
          <p className="text-lg text-blue-100 leading-relaxed">
            <span className="text-cyan-400 mono-font">/* </span>
            Passionate about solving real-world problems through 
            <span className="font-semibold text-cyan-300"> innovative software solutions</span>. 
            Specializing in <span className="font-semibold text-blue-300">backend systems</span>, 
            <span className="font-semibold text-green-300"> AI/ML</span>, and 
            <span className="font-semibold text-yellow-300"> cloud infrastructure</span>.
            <span className="text-cyan-400 mono-font"> */</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Link
            to="/projects"
            className="btn-tech text-white px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl mono-font"
          >
            <span className="text-cyan-400">[</span> View Projects <span className="text-cyan-400">]</span>
          </Link>
          <Link
            to="/contact"
            className="btn-outline px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-2xl mono-font"
          >
            <span className="text-cyan-400">&lt;</span> Contact Me <span className="text-cyan-400">/&gt;</span>
          </Link>
        </div>

        {/* Tech Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl w-full">
          <div className="glass rounded-xl p-6 text-center card-hover border border-blue-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2 tech-font">15+</div>
            <div className="text-blue-200 text-sm mono-font">Projects</div>
            <div className="text-xs text-blue-400 mt-1">// Completed</div>
          </div>
          <div className="glass rounded-xl p-6 text-center card-hover border border-blue-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2 tech-font">8+</div>
            <div className="text-blue-200 text-sm mono-font">Technologies</div>
            <div className="text-xs text-blue-400 mt-1">// Mastered</div>
          </div>
          <div className="glass rounded-xl p-6 text-center card-hover border border-blue-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2 tech-font">3+</div>
            <div className="text-blue-200 text-sm mono-font">Certifications</div>
            <div className="text-xs text-blue-400 mt-1">// Earned</div>
          </div>
          <div className="glass rounded-xl p-6 text-center card-hover border border-blue-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2 tech-font">24/7</div>
            <div className="text-blue-200 text-sm mono-font">Availability</div>
            <div className="text-xs text-blue-400 mt-1">// Learning</div>
          </div>
        </div>

        {/* Tech Stack Preview */}
        <div className="mt-12 glass rounded-2xl p-6 border border-blue-500/30">
          <h3 className="text-xl font-bold text-cyan-400 mb-4 tech-font">
            &lt;TechStack/&gt;
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Java', 'Go', 'React', 'AWS', 'Docker', 'PostgreSQL', 'TensorFlow'].map((tech, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm px-4 py-2 rounded-full font-medium mono-font hover:scale-105 transition-transform border border-cyan-400/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;