import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HiOutlineSparkles, 
  HiOutlineLightningBolt, 
  HiOutlineUsers, 
  HiOutlineTerminal 
} from 'react-icons/hi';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Section 1: Top Hero & Quote */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121217] border border-slate-800 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            MY STORY
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-6">
            Committed to being the only <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">variable</span>
          </h1>
          <blockquote className="text-slate-400 italic text-sm sm:text-base max-w-2xl mx-auto leading-relaxed border-t border-b border-slate-800/60 py-6">
            "I never go halfway, I go deep, feeling every resistance, pushing until the system is fully responsive. It's an intimate, exhausting dance of hardware and software, and I don't stop until I've got full control over every single byte."
          </blockquote>
        </div>

        {/* Section 2: Main Bio Card with Profile */}
        <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-3xl p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                AVAILABLE FOR COLLABORATION
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold leading-snug">
                I build modern web apps and make them smarter with AI.
              </h2>

              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Currently pursuing Software Engineering. My focus is on building solid web applications using React, Python, and integrating intelligent features to create smart, automated solutions.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800/80">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">MAIN STACK</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">React, Python, JS</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">FOCUS</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">Full-Stack & Web Dev</p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider block mb-1">EXPERIENCE</span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-200">2+ Years coding</p>
                </div>
              </div>
            </div>

            {/* Right Profile Image Box */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-[#121216] aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5] flex items-end">
                {/* Replace src with your image path */}
                <img 
                  src="/public/images/IMG-20251022-WA0045.jpg" 
                  alt="Profile" 
                  className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125"
                />
                <div className="relative z-10 m-4 p-3 bg-[#121217]/90 backdrop-blur-md border border-slate-800 rounded-xl w-full">
                  <span className="text-[10px] uppercase font-bold text-slate-400 block mb-0.5">BASED IN</span>
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <span>Lahore, PK</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 3: Core Mission & Code Engine Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Mission Text */}
          <div className="lg:col-span-7 bg-[#0b0b0e] border border-slate-800/80 rounded-3xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <HiOutlineSparkles className="w-5 h-5" />
              </div>
              <h3 className="text-2xl font-bold mb-4">My Core Mission</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                My goal is to build web applications that do more than just display information. I focus on building fast and reliable web platforms from the ground up, integrating intelligent automation to actively assist users and streamline complex workflows.
              </p>
            </div>
            <p className="text-xs text-slate-500 italic border-t border-slate-800/60 pt-4">
              "Code that works. Software that thinks."
            </p>
          </div>

          {/* Live Code Widget */}
          <div className="lg:col-span-5 bg-[#0b0b0e] border border-slate-800/80 rounded-3xl p-6 flex flex-col justify-between">
            <div>
              {/* Window Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">&gt;_ app_engine.py</span>
              </div>

              {/* Code Snippet Box */}
              <div className="bg-[#050507] border border-slate-800/80 rounded-xl p-4 font-mono text-xs text-slate-300 space-y-1.5 leading-relaxed">
                <p><span className="text-purple-400">def</span> <span className="text-cyan-400">query_system</span>(prompt):</p>
                <p className="text-slate-500 pl-4"># Data processing flow</p>
                <p className="pl-4">emb = <span className="text-emerald-400">embed</span>(prompt)</p>
                <p className="pl-4">ctx = db.<span className="text-emerald-400">search</span>(emb)</p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-cyan-400">app</span>(context=ctx)</p>
              </div>
            </div>

            {/* Status Footer */}
            <div className="mt-6 bg-[#121217] border border-slate-800/80 rounded-xl p-3 flex items-center justify-between text-xs">
              <div>
                <span className="font-bold text-white block text-[11px]">APP ENGINE ACTIVE</span>
                <span className="text-slate-500 text-[10px]">latency: <strong className="text-emerald-400 font-normal">14ms</strong> | accuracy: <strong className="text-emerald-400 font-normal">98.4%</strong></span>
              </div>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                LIVE
              </span>
            </div>
          </div>

        </div>

        {/* Section 4: Technical Arsenal Progress Bars */}
        <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-3xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold">Technical Arsenal</h3>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">OPTIMIZED IMPLEMENTATION</span>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#121217] border border-slate-800 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              PERFORMANCE FIRST
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            
            {/* Skill 1 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">DSA & PROBLEM SOLVING</span>
                <span className="text-purple-400">90%</span>
              </div>
              <div className="w-full bg-[#141418] h-2 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">PYTHON & SOFTWARE LOGIC</span>
                <span className="text-yellow-400">85%</span>
              </div>
              <div className="w-full bg-[#141418] h-2 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-yellow-500 to-amber-500 h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">FULL-STACK DEV (REACT/TAILWIND)</span>
                <span className="text-cyan-400">88%</span>
              </div>
              <div className="w-full bg-[#141418] h-2 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 h-full rounded-full" style={{ width: '88%' }}></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300">DEVOPS & TOOLS (GIT/VITE)</span>
                <span className="text-emerald-400">72%</span>
              </div>
              <div className="w-full bg-[#141418] h-2 rounded-full overflow-hidden border border-slate-800">
                <div className="bg-gradient-to-r from-emerald-400 to-teal-500 h-full rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>

          </div>
        </div>

        {/* Section 5: Leadership */}
        <div>
          <h3 className="text-2xl font-bold mb-6">Leadership</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            
            <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                <HiOutlineLightningBolt className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Academic Projects</h4>
              <span className="text-xs text-slate-500 block mt-1">LEAD DEVELOPER</span>
            </div>

            <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                <HiOutlineUsers className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Management Lead</h4>
              <span className="text-xs text-slate-500 block mt-1">STUDENT SOCIETY</span>
            </div>

            <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-2xl p-6 hover:border-slate-700 transition">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                <HiOutlineTerminal className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">Tech Lead</h4>
              <span className="text-xs text-slate-500 block mt-1">CAMPUS INITIATIVE</span>
            </div>

          </div>
        </div>

        {/* Section 6: Call To Action Banner */}
        <div className="bg-[#0b0b0e] border border-slate-800/80 rounded-3xl p-10 text-center relative overflow-hidden">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
            Ready to build something <span className="underline decoration-purple-500 underline-offset-8">extraordinary?</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-md mx-auto mb-8">
            See how we can transform your next big idea into a production reality.
          </p>
          <Link 
            to="/projects" 
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-bold text-sm hover:bg-slate-200 transition shadow-lg"
          >
            Explore Projects &rarr;
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;