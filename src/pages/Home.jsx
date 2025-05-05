import React from 'react';
import { Link } from 'react-router-dom';
import profilePic from '../assets/profile.jpg';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-8">
      <img
        src={profilePic}
        alt="Profile"
        className="w-40 h-40 rounded-full border-4 border-blue-500 shadow-lg mb-6"
      />
      <h1 className="text-4xl font-bold mb-2 text-gray-900">Hi, I'm Sk Md Rizwan</h1>
      <p className="text-lg text-gray-700 max-w-xl">
        Data Science | Java | Cloud & DevOps | Software Engineering | ECE
      </p>
      <p className="mt-4 max-w-2xl text-md text-gray-600">
        I'm passionate about solving real-world problems through software. With hands-on experience across backend development (Go/Java), AI/ML, cloud infrastructure, and electronics, I bring an engineering mindset to every challenge.
      </p>
      <div className="mt-6 space-x-4">
        <Link
          to="/projects"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-xl transition"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
};

export default Home;
