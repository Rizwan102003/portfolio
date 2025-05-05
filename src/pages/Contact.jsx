import React from 'react';

const Contact = () => {
  return (
    <div className="px-8 py-12 max-w-4xl mx-auto text-gray-800">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Contact Me</h2>

      <p className="mb-6 text-lg">
        Feel free to reach out to me for collaborations, job opportunities, or if you just want to connect! You can also find my contact details below.
      </p>

      <div className="space-y-4 mb-8">
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">📧 Email:</span>
          <a href="mailto:your-email@example.com" className="text-blue-600 hover:underline">
            skmdrizwan2003@gmail.com
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">🔗 LinkedIn:</span>
          <a
            href="https://www.linkedin.com/in/skmdrizwan/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">🐙 GitHub:</span>
          <a
            href="https://github.com/Rizwan102003"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-4">Drop me a message:</h3>
        <form
          action="https://formspree.io/f/maykdyyj" // Example Formspree endpoint for form submission
          method="POST"
          className="space-y-4"
        >
          <div>
            <label htmlFor="name" className="block text-md font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 mt-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-md font-medium text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 mt-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-md font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows="4"
              className="w-full p-3 mt-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
