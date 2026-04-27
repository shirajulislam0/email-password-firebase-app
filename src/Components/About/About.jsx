import React from 'react';

const About = () => {
  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-1 items-center">

        {/* Left Side - Image */}
        <div>
          <img
            src="/src/assets/WhatsApp_Image_2025-11-21_at_19.48.25_721da4aa-removebg-preview.png"
            alt="Sirajul Islam"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            About Me
          </h2>

          <p className="text-gray-300 mb-4">
            Hello! I'm <span className="text-emerald-400 font-semibold">Sirajul Islam</span>, a passionate Frontend Developer from Bangladesh. 
            I specialize in building modern, responsive, and user-friendly web applications using React.
          </p>

          <p className="text-gray-300 mb-6">
            I have strong problem-solving skills and experience working with JavaScript, React, and modern UI frameworks. 
            My goal is to create clean, efficient, and scalable web applications.
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded">React</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded">JavaScript</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded">Tailwind</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded">Firebase</span>
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded">MongoDB</span>
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 transition rounded-md">
            Download CV
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;