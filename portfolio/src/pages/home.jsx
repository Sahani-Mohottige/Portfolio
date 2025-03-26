import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6">
  <div className="md:w-1/2 flex flex-col items-start text-left">
    <h1 className="text-5xl font-bold mb-4 animate-fade-in">
      Hi! I'm <span className="text-yellow-300">Sahani Mohotiige</span>
    </h1>
    <p className="text-xl bg-white text-gray-900 px-4 py-2 rounded-lg shadow-lg">
      A Full Stack Developer
    </p>
  </div>
      <div className="md:w-1/2 flex justify-end ">
        <img src="/assets/my_pic.JPG" alt="Profile" style={{  width: '450px', height: '400px'}} className="rounded-full shadow-lg" />
      </div>
    </div>
  );
};

export default Home;