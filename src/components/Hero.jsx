import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { personalInfo } from '../data';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-black text-white relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-sm font-medium mb-6">
          Frontend Developer & Software Engineer
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-500">{personalInfo.name}</span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo.summary}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          {/* Download CV Button */}
          <a
            href={personalInfo.resumeUrl}
            download="Meharma_Arif_Resume.pdf"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold flex items-center justify-center gap-2 transition shadow-lg shadow-indigo-600/30"
          >
            <FaDownload className="w-4 h-4" />
            Download CV
          </a>

          {/* Contact Button */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold flex items-center justify-center gap-2 transition"
          >
            <FaPaperPlane className="w-4 h-4" />
            Hire Me / Contact
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 text-slate-400">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110">
            <FaGithub className="w-6 h-6" />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white transition transform hover:scale-110">
            <FaLinkedin className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;