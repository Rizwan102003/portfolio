import React from 'react';

const Resume = () => {
  return (
    <div className="px-8 py-12 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Resume</h2>

      <div className="mb-8">
        <p className="text-lg mb-2">Click below to view or download my latest resume:</p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
        >
          View Resume (PDF)
        </a>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Key Skills</h3>
        <ul className="list-disc list-inside space-y-1 text-md">
          <li>🧠 Data Science & Machine Learning (Python, Sklearn, Pandas, Matplotlib)</li>
          <li>☁️ Cloud & DevOps (AWS, Docker, GitHub Actions)</li>
          <li>💻 Backend Development (Golang, Java, Spring Boot, PostgreSQL, REST APIs)</li>
          <li>🎯 Competitive Programming & DSA (Java, C++)</li>
          <li>📡 Electronics & Communication Engineering (Digital, Analog, Signals & Systems)</li>
        </ul>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-3">Aspirations</h3>
        <p className="text-md">
          Exploring roles in:
          <span className="font-medium"> Data Science, Software Development, Java Backend, Cloud & DevOps Engineering.</span>
        </p>
      </div>
    </div>
  );
};

export default Resume;
