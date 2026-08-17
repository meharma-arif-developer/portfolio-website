import React, { useState } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaYoutube, 
  FaInstagram, 
  FaCommentDots, 
  FaPaperPlane 
} from 'react-icons/fa';
import { personalInfo } from '../data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const subjectText = encodeURIComponent(formData.subject.trim() || "Portfolio Inquiry");
  const bodyText = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);

  // Directly open Gmail web client in new tab
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=${subjectText}&body=${bodyText}`;
  window.open(gmailUrl, '_blank');
};

  return (
    <section id="contact" className="w-full bg-[#050505] text-white py-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Let's <span className="bg-gradient-to-r from-purple-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">Collaborate</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Turning complex ideas into high-performance code.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Side: Bento Info Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Current Status */}
            <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-3">
                CURRENT STATUS
              </span>
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-bold text-white tracking-wide">
                  Available for Work
                </span>
              </div>
            </div>

            {/* Card 2: Drop A Line */}
            <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-5 shadow-sm space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  DROP A LINE
                </span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm font-bold text-white hover:text-indigo-400 transition break-all"
                >
                  {personalInfo.email}
                </a>
              </div>

              <div className="border-t border-slate-800/60 pt-4 flex items-center gap-3">
                <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#16161a] text-slate-400 hover:text-white transition">
                  <FaGithub className="w-4 h-4" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#16161a] text-slate-400 hover:text-white transition">
                  <FaLinkedinIn className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-[#16161a] text-slate-400 hover:text-white transition">
                  <FaYoutube className="w-4 h-4" />
                </a>
                <a href="#" className="p-2.5 rounded-full bg-[#16161a] text-slate-400 hover:text-white transition">
                  <FaInstagram className="w-4 h-4" />
                </a>
                <a href="https://wa.me/923258713722" target="_blank" rel="noreferrer" className="p-2.5 rounded-full bg-[#16161a] text-slate-400 hover:text-white transition">
                  <FaCommentDots className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: Location */}
            <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-5 shadow-sm">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
                LOCATION
              </span>
              <div className="flex items-baseline gap-1.5">
                <h4 className="text-sm font-bold text-white">
                  {personalInfo.location}
                </h4>
                <span className="text-[10px] font-bold text-slate-500 uppercase">PK</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium mt-1">
                Remote Available (UTC+5)
              </p>
            </div>

          </div>

          {/* Right Side: Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 sm:p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Name & Email Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    NAME <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#141417] border border-slate-800/90 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                    EMAIL <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#141417] border border-slate-800/90 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 transition"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  SUBJECT
                </label>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Project Inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-[#141417] border border-slate-800/90 rounded-xl pl-4 pr-10 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 transition"
                  />
                  <FaPaperPlane className="absolute right-3.5 text-slate-600 text-xs pointer-events-none" />
                </div>
              </div>

              {/* Message Input */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  MESSAGE <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows="4"
                  name="message"
                  required
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#141417] border border-slate-800/90 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-slate-600 transition resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 bg-white text-black font-semibold text-sm rounded-xl hover:bg-slate-200 transition shadow-sm mt-2"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;