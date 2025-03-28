import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-green-300 flex flex-col justify-center items-center p-6">
      <div className="max-w-4xl w-full text-center bg-white p-8 rounded-lg shadow-xl border border-gray-200 hover:shadow-2xl transition duration-300">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">About Me</h1>

        <p className="text-lg text-gray-700 mb-4">
          Hello, I'm a passionate software engineer with a strong background in web development and
          a love for creating visually appealing and functional applications. My goal is to craft
          seamless user experiences while building clean and maintainable code.
        </p>

        <p className="text-lg text-gray-700 mb-6">
          I enjoy solving complex problems and constantly learning new technologies to stay ahead in
          the ever-evolving tech landscape.
        </p>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills & Expertise</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Frontend Development Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:bg-green-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Frontend Development</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>React.js</li>
                <li>HTML5 & CSS3</li>
                <li>JavaScript (ES6+)</li>
              </ul>
            </div>

            {/* Backend Development Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:bg-green-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Backend Development</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Spring Boot</li>
                <li>PHP</li>
                <li>MySQL & MongoDB</li>
              </ul>
            </div>

            {/* Tools & Technologies Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg transition duration-300 hover:shadow-2xl hover:bg-green-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Tools & Technologies</h3>
              <ul className="list-disc pl-5 text-gray-600">
                <li>Git & GitHub</li>
                <li>VS Code</li>
                <li>Figma (UI/UX Design)</li>
                <li>IntelliJ IDEA</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-700 mb-4">
            Feel free to reach out if you'd like to collaborate or have any questions!
          </p>
          <p className="text-lg text-gray-700 mb-6">I'm always open to new opportunities and challenges!</p>
          <div className="flex justify-center space-x-8">
            {/* GitHub Button */}
            <a
              href="https://github.com/yourgithub"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition duration-300"
            >
              GitHub
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              LinkedIn
            </a>

            {/* Twitter Button */}
            <a
              href="https://twitter.com/yourtwitter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-500 transition duration-300"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
