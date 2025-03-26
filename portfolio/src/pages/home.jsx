import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen bg-gradient-to-r from-white to-green-500 text-gray-900 p-10">
      
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 flex flex-col items-start text-left space-y-4 pl-30">
        <h1 className="text-6xl font-extrabold animate-fade-in">
          Hi! I'm <span className="text-green-700"><br></br>Sahani Mohotiige</span>
        </h1>
        <p className="text-2xl bg-green-100 text-green-800 px-5 py-3 rounded-lg shadow-lg">
          A Passionate Full Stack Developer
        </p>
        <button className="mt-4 px-6 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-lg hover:bg-green-800 transition duration-300">
          View My Work
        </button>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center">
        <img 
          src="/assets/my_pic.jpg" 
          alt="Profile" 
          className="w-72 h-72 md:w-120 md:h-100 rounded-full shadow-2xl"
        />
      </div>
    </div>
  );
};

export default Home;
