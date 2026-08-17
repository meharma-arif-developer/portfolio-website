import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaInstagram, 
  FaRegCopy, 
  FaCheck 
} from 'react-icons/fa';

import { 
  HiOutlineCalendar, 
  HiOutlineClock, 
  HiOutlineLocationMarker, 
  HiOutlineSearch, 
  HiOutlinePencilAlt, 
  HiOutlineTerminal 
} from 'react-icons/hi';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const [timeString, setTimeString] = useState('');
  
  // Controlled Form State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    organization: '',
    budget: '',
    timeline: '',
    message: ''
  });

  // Live Pakistan Time Clock
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Karachi',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeString(now.toLocaleTimeString('en-US', options));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('meharmaarif42@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., Web3Forms or EmailJS API integration)
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Top Header Badge & Main Grid */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#101015] border border-emerald-500/30 text-emerald-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            AVAILABLE FOR NEW PROJECTS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-10">
            Get in <span className="text-slate-500 italic font-normal">touch.</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Socials, Availability, Live Context */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Connect Section */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-4">
                  CONNECT
                </span>
                <div className="space-y-3">
                  <a 
                    href="https://github.com/meharma-arif-developer" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-4 p-3 rounded-xl bg-[#0b0b0e] border border-slate-800/80 hover:border-slate-700 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#141419] border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-white">
                      <FaGithub className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-300 group-hover:text-white">GITHUB</span>
                  </a>

                  <a 
                    href="https://www.linkedin.com/in/meharma-arif-developer/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-4 p-3 rounded-xl bg-[#0b0b0e] border border-slate-800/80 hover:border-slate-700 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#141419] border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-white">
                      <FaLinkedinIn className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-300 group-hover:text-white">LINKEDIN</span>
                  </a>

                  <a 
                    href="https://instagram.com" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center gap-4 p-3 rounded-xl bg-[#0b0b0e] border border-slate-800/80 hover:border-slate-700 transition group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#141419] border border-slate-800 flex items-center justify-center text-slate-300 group-hover:text-white">
                      <FaInstagram className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold tracking-wider uppercase text-slate-300 group-hover:text-white">INSTAGRAM</span>
                  </a>
                </div>
              </div>

              {/* Weekly Availability Card */}
              <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-2xl p-6 relative">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">
                      WEEKLY AVAILABILITY
                    </span>
                    <h3 className="text-sm font-bold text-white">Week Capacity Reached</h3>
                  </div>
                  <div className="text-right">
                    <span className="w-2 h-2 rounded-full bg-red-500 inline-block mr-1"></span>
                    <span className="text-xs font-extrabold text-red-500">0</span>
                    <span className="text-[8px] uppercase tracking-wider text-slate-500 block">SLOTS LEFT</span>
                  </div>
                </div>

                <div className="w-full bg-[#121217] h-1.5 rounded-full my-4 overflow-hidden flex gap-1">
                  <div className="bg-red-500/80 h-full w-full rounded-full"></div>
                </div>

                <button 
                  disabled
                  className="w-full py-3 rounded-xl bg-[#15151c] border border-slate-800 text-slate-400 font-bold text-xs flex items-center justify-center gap-2 cursor-not-allowed opacity-80"
                >
                  <HiOutlineCalendar className="w-4 h-4" />
                  <span>BOOK A MEETING</span>
                  <span>&rarr;</span>
                </button>
                <p className="text-[10px] text-slate-600 text-center uppercase tracking-wider mt-3">
                  ALL DISCOVERY SLOTS FOR THIS WEEK ARE FULLY BOOKED.
                </p>
              </div>

              {/* Live Context Section */}
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-3">
                  LIVE CONTEXT
                </span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-2xl p-4">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                      <HiOutlineClock className="w-3.5 h-3.5" />
                      LOCAL TIME
                    </div>
                    <p className="text-sm font-bold text-white font-mono">{timeString || '02:50:26 PM'}</p>
                  </div>

                  <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-2xl p-4">
                    <div className="flex items-center gap-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-2">
                      <HiOutlineLocationMarker className="w-3.5 h-3.5" />
                      BASE
                    </div>
                    <p className="text-sm font-bold text-white">Lahore, PK</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: White Project Details Contact Card */}
            <div className="lg:col-span-7">
              <div className="bg-white text-black rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-4 bg-black rounded-full"></span>
                    <h2 className="text-xs font-extrabold tracking-widest uppercase text-black">
                      PROJECT DETAILS
                    </h2>
                  </div>
                  <span className="text-4xl font-extrabold text-slate-100 select-none pointer-events-none uppercase tracking-wider">
                    CONTACT
                  </span>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                        FULL NAME *
                      </label>
                      <input 
                        type="text" 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                        WORK EMAIL *
                      </label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="HELLO@EXAMPLE.COM"
                        className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                        SUBJECT *
                      </label>
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="WEB DEVELOPMENT"
                        className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                        ORGANIZATION
                      </label>
                      <input 
                        type="text" 
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="IF ANY"
                        className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                        BUDGET RANGE
                      </label>
                      <input 
                        type="text" 
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        placeholder="E.G. $500 - $1,000"
                        className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                        TIMELINE
                      </label>
                      <input 
                        type="text" 
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        placeholder="TIME DURATION"
                        className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-extrabold tracking-widest uppercase text-slate-400 block mb-2">
                      MESSAGE *
                    </label>
                    <textarea 
                      rows={3} 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="HOW CAN I HELP YOU?"
                      className="w-full bg-slate-50 border-b border-slate-200 py-2.5 px-3 text-xs font-semibold text-black placeholder-slate-300 focus:outline-none focus:border-black transition resize-none"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full bg-black text-white font-extrabold text-xs tracking-widest uppercase py-4 rounded-xl hover:bg-slate-800 transition shadow-lg mt-4"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>

        <hr className="border-slate-800/60" />

        {/* Section 2: My Process Steps */}
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-8">
            MY PROCESS
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="space-y-4 relative">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b0b0e] border border-slate-800 flex items-center justify-center text-slate-300">
                  <HiOutlineSearch className="w-5 h-5" />
                </div>
                <div className="h-[1px] bg-slate-800 flex-1"></div>
                <span className="text-xs font-mono text-slate-600 font-bold">01</span>
              </div>
              <h3 className="text-lg font-bold text-white">Listen</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Talking about your goals and what you need to build.
              </p>
            </div>

            {/* Step 2 */}
            <div className="space-y-4 relative">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b0b0e] border border-slate-800 flex items-center justify-center text-slate-300">
                  <HiOutlinePencilAlt className="w-5 h-5" />
                </div>
                <div className="h-[1px] bg-slate-800 flex-1"></div>
                <span className="text-xs font-mono text-slate-600 font-bold">02</span>
              </div>
              <h3 className="text-lg font-bold text-white">Plan</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Creating a clear strategy and a high-quality design.
              </p>
            </div>

            {/* Step 3 */}
            <div className="space-y-4 relative">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0b0b0e] border border-slate-800 flex items-center justify-center text-slate-300">
                  <HiOutlineTerminal className="w-5 h-5" />
                </div>
                <div className="h-[1px] bg-slate-800 flex-1"></div>
                <span className="text-xs font-mono text-slate-600 font-bold">03</span>
              </div>
              <h3 className="text-lg font-bold text-white">Build</h3>
              <p className="text-slate-400 text-xs leading-relaxed max-w-xs">
                Writing clean code and launching your project.
              </p>
            </div>

          </div>
        </div>

        <hr className="border-slate-800/60" />

        {/* Section 3: Working Hours & Direct Contact Footer */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-1">
              WORKING HOURS
            </span>
            <p className="text-base sm:text-lg font-extrabold italic text-white mb-1">
              Mon — Fri, 9:00 AM — 6:00 PM
            </p>
            <p className="text-[11px] text-slate-500">
              Response time usually within 24 hours.
            </p>
          </div>

          <div className="sm:text-right">
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 block mb-2">
              DIRECT CONTACT
            </span>
            <button 
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-white hover:text-slate-300 transition"
            >
              <span>meharmaarif42@gmail.com</span>
              {copied ? (
                <FaCheck className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <FaRegCopy className="w-3.5 h-3.5 text-slate-400" />
              )}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;