import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[700px]">

      {/* Background Image */}
      <img
        src="/src/assets/ChatGPT Image Apr 27, 2026, 10_19_02 PM.png"
        alt="banner"
        className="w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-2xl px-8 text-white">

          <p className="text-sm tracking-widest text-gray-300 mb-2">
            HI, I'M
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Sirajul Islam
          </h1>

          <h2 className="text-2xl md:text-3xl text-emerald-400 font-semibold mb-4">
            Frontend Developer
          </h2>

          <p className="text-gray-300 mb-6">
            I build modern, responsive, and user-friendly web applications using React and modern technologies.
          </p>

          <button className="px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition duration-300 rounded-md">
            View My Work →
          </button>

        </div>
      </div>
    </div>
  );
};

export default Banner;