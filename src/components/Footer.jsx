import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaYoutube, 
  FaWhatsapp, 
  FaArrowRight, 
  FaEnvelope 
} from 'react-icons/fa';
import { HiOutlineCpuChip } from 'react-icons/hi2';
import { personalInfo } from '../data';

const Footer = () => {
  const [time, setTime] = useState('');

  // Live PKT Time clock setup
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="w-full bg-[#050505] text-slate-300 font-sans border-t border-slate-900/80">
      
      {/* 1. Top CTA Banner */}
      <div className="w-full border-b border-slate-800/60 py-8 px-6 sm:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-100 mt-1">
              <HiOutlineCpuChip className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Ready to build something amazing?
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Let's architect and launch your next high-performance Web or Software solution together.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-sm hover:bg-slate-200 transition shrink-0"
          >
            Start a Project <FaArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* 2. Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Column 1: Brand / Urdu Name / Bio / PKT Badge */}
        <div className="space-y-5">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold text-white tracking-wide font-serif">
              مہرما عارف
            </h2>
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
              MEHARMA ARIF
            </p>
          </div>

          <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
            Bridging the gap between <strong className="text-white font-semibold">Complex Logic</strong> and <strong className="text-white font-semibold">User Experience</strong>. I build software that is smart, scalable, and intuitive.
          </p>

          {/* PKT Live Time Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-[11px] font-medium tracking-wider">
              PKT: {time || '11:06:04 AM'}
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 pt-2">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition">
              <FaGithub className="w-4 h-4" />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition">
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition">
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-2">
            <span className="text-slate-500">|</span> NAVIGATION
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#about" className="hover:text-white transition">About Me</a></li>
            <li><a href="#projects" className="hover:text-white transition">Recent Projects</a></li>
            <li><a href="#skills" className="hover:text-white transition">Technical Skills</a></li>
          </ul>
        </div>

        {/* Column 3: Expertise */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-2">
            <span className="text-slate-500">|</span> EXPERTISE
          </h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex items-center gap-2"><span className="text-slate-600">•</span> Frontend Development</li>
            <li className="flex items-center gap-2"><span className="text-slate-600">•</span> React.js & Modern UI</li>
            <li className="flex items-center gap-2"><span className="text-slate-600">•</span> Object-Oriented Programming</li>
            <li className="flex items-center gap-2"><span className="text-slate-600">•</span> Responsive Web Design</li>
          </ul>
        </div>

        {/* Column 4: Join The Circle / Subscribe & Contacts */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 flex items-center gap-2">
            <span className="text-slate-500">|</span> JOIN THE CIRCLE
          </h4>
          <p className="text-xs text-slate-400 leading-relaxed">
            Subscribe for project releases, web dev updates, and frontend engineering logs.
          </p>

          {/* Subscribe Form Input */}
          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-3 pr-24 py-2 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 transition"
            />
            <button
              type="submit"
              className="absolute right-1 px-3 py-1 bg-white text-black font-bold text-[10px] tracking-wider uppercase rounded-md hover:bg-slate-200 transition"
            >
              SUBSCRIBE
            </button>
          </form>

          {/* Quick Contact Links */}
          <div className="space-y-2 pt-2 text-xs text-slate-400">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2.5 hover:text-white transition">
              <FaEnvelope className="w-3.5 h-3.5 text-slate-500" />
              <span>{personalInfo.email}</span>
            </a>
            <a href="https://wa.me/923258713722" target="_blank" rel="noreferrer" className="flex items-center gap-2.5 hover:text-white transition">
              <FaWhatsapp className="w-3.5 h-3.5 text-slate-500" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>

      {/* 3. Bottom Copyright Line */}
      <div className="border-t border-slate-900/90 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;