import React from 'react';
import { 
  HiOutlineSquares2X2, 
  HiOutlineServer, 
  HiOutlineCpuChip, 
  HiOutlineCloud 
} from 'react-icons/hi2';

const techStackData = [
  {
    category: "Frontend",
    icon: <HiOutlineSquares2X2 className="w-5 h-5 text-purple-400" />,
    skills: ["React.js", "JavaScript", "Tailwind CSS", "HTML5 & CSS3"]
  },
  {
    category: "Backend & Databases",
    icon: <HiOutlineServer className="w-5 h-5 text-cyan-400" />,
    skills: ["Python", "C++", "MySQL"]
  },
  {
    category: "Core CS & Logic",
    icon: <HiOutlineCpuChip className="w-5 h-5 text-indigo-400" />,
    skills: ["OOP", "Data Structures", "Algorithms", "Kotlin"]
  },
  {
    category: "DevOps & Tools",
    icon: <HiOutlineCloud className="w-5 h-5 text-emerald-400" />,
    skills: ["Git", "GitHub", "Android Studio", "Vite"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="w-full bg-[#050505] text-white py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#121217] border border-slate-800/80 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
            TECHNICAL EXPERTISE
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-lg mx-auto">
            Architecting software with a curated selection of <strong className="text-white font-semibold">industry-standard</strong> technologies.
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {techStackData.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#0e0e11] border border-slate-800/80 rounded-3xl p-6 sm:p-7 flex flex-col justify-start hover:border-slate-700/80 transition group shadow-sm"
            >
              {/* Category Icon Box */}
              <div className="w-12 h-12 rounded-2xl bg-[#141418] border border-slate-800 flex items-center justify-center mb-6 group-hover:scale-105 transition">
                {item.icon}
              </div>

              {/* Category Title */}
              <h3 className="text-xl font-bold text-white mb-6">
                {item.category}
              </h3>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-2.5">
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-[#141417] border border-slate-800/90 text-xs font-semibold text-slate-300 hover:border-slate-700 hover:text-white transition"
                  >
                    {skill}
                    <span className="w-1 h-1 rounded-full bg-indigo-400/80"></span>
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;