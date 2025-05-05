import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-8">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Sk Md Rizwan. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/skmdrizwan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Rizwan102003"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition"
            >
              GitHub
            </a>
            <a
              href="mailto:skmdrizwan2003@gmail.com"
              className="text-white hover:text-blue-500 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
