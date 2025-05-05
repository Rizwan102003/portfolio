import React from 'react';

const projects = [
  {
    title: 'ML-Based Smart Farming System',
    description: 'An intelligent agriculture system combining IoT sensors, AI-based soil analysis, weather-based fertilization, pest control, and a voice assistant for farmers.',
    tech: ['Python', 'ML', 'Tesseract', 'Firebase', 'React Native'],
    github: 'https://github.com/Rizwan102003/smart-farming',
  },
  {
    title: 'GoCommerce - E-Commerce Backend in Go',
    description: 'A fully featured e-commerce backend written in Golang with JWT-based auth, REST APIs, Docker, PostgreSQL, and testing.',
    tech: ['Golang', 'Gin', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com/Rizwan102003/go-commerce',
  },
  {
    title: 'Dynamic CMS in Golang',
    description: 'A reflection-powered CMS with hot-reloading, smart UI forms, RBAC, audit logs, multi-language support, and pluggable storage interfaces.',
    tech: ['Go', 'Gin', 'Reflection', 'SQLite'],
    github: 'https://github.com/Rizwan102003/dynamic-cms',
  },
  {
    title: 'GaurdHire Platform',
    description: 'A hiring platform for security guards with Aadhaar/PAN verification, user reviews, role-based access, and search filters. Built using only free tools.',
    tech: ['React', 'Go', 'MongoDB', 'JWT'],
    github: 'https://github.com/Rizwan102003/GaurdHire',
  },
  {
    title: 'CSES GitHub Extension',
    description: 'An open-source extension to sync CSES problem submissions to GitHub with metadata, tags, and auto-folder structuring.',
    tech: ['JavaScript', 'GitHub API', 'Web Scraping'],
    github: 'https://github.com/Rizwan102003/cses-github-extension',
  },
];

const Projects = () => {
  return (
    <div className="px-8 py-12 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div key={idx} className="border rounded-2xl p-6 shadow hover:shadow-lg transition bg-white">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-3">{project.description}</p>
            <div className="flex flex-wrap gap-2 text-sm mb-3">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md">{tech}</span>
              ))}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              GitHub Repo →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
