import React,{ useState } from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-green-300 flex flex-col justify-center items-center p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Me</h1>

      {/* Contact Info */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full text-center">
        <p className="text-lg text-gray-700 mb-4">Feel free to reach out to me!</p>
        
        {/* Email */}
        <div className="flex items-center justify-center space-x-3 mb-3">
          <FaEnvelope className="text-green-600 text-xl" />
          <a href="mailto:sahanimohottige25@gmail.com" className="text-gray-800 font-medium hover:text-green-700">
            sahanimohottige25@gmail.com
          </a>
        </div>

        {/* Phone Number */}
        <div className="flex items-center justify-center space-x-3 mb-3">
          <FaPhone className="text-green-600 text-xl" />
          <p className="text-gray-800 font-medium">+94 71 234 5678</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-800 text-2xl hover:text-green-600 transition duration-300" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-gray-800 text-2xl hover:text-green-600 transition duration-300" />
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-gray-800 text-2xl hover:text-green-600 transition duration-300" />
          </a>
        </div>

        {/* Contact Form */}
        <form action="mailto:sahanimohottige25@gmail.com" method="POST" className="mt-6 space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
          <input type="email" name="email" placeholder="Your Email" className="w-full px-4 py-2 border rounded-lg" />
          <textarea name="message" placeholder="Your Message" rows="4" className="w-full px-4 py-2 border rounded-lg"></textarea>
          <button type="submit" className="w-full bg-green-700 text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition duration-300">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
