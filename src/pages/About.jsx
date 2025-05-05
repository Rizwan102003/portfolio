import React from 'react';

const About = () => {
  return (
    <div className="px-8 py-12 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-4 text-blue-700">About Me</h2>
      <p className="mb-4 text-lg">
        I'm a third-year B.Tech student in Electronics & Communication Engineering (ECE) from Heritage Institute of Technology, Kolkata.
        With a GPA of 7.3, I'm actively exploring the intersection of hardware and software to build intelligent, impactful systems.
      </p>

      <p className="mb-4 text-lg">
        My long-term goal is to secure a top-ranking position in the IT industry. Simultaneously,
        I’m building industry-level skills in Data Science, Full Stack Java Development, Cloud Computing, and DevOps.
      </p>

      <p className="mb-4 text-lg">
        I’ve completed several professional certifications (IBM, AWS, Salesforce AI Associate) and have hands-on experience building projects using:
      </p>

      <ul className="list-disc list-inside text-md mb-4">
        <li><strong>Data Science:</strong> Python, Pandas, Scikit-learn, ML pipelines</li>
        <li><strong>Backend Development:</strong> Golang, Java (Spring Boot), SQLite/PostgreSQL</li>
        <li><strong>Frontend:</strong> React, Tailwind CSS</li>
        <li><strong>Cloud & DevOps:</strong> AWS, Docker, GitHub Actions</li>
        <li><strong>Scripting & Automation:</strong> Bash, Python, Selenium</li>
      </ul>

      <p className="text-lg">
        I’m currently working on multiple impactful projects including an AI-powered farming system, a Golang CMS with live schema editing,
        and a SecureHire platform to digitally empower security personnel across India.
      </p>
    </div>
  );
};

export default About;
