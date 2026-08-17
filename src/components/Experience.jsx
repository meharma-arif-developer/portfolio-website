import React from 'react';

const journeyData = [
  {
    role: "Web Developer Intern",
    period: "2026",
    company: "TechTide co.",
    description: "Built responsive web solutions with a focus on performance and user experience.Collaborated on real-world projects, transforming ideas into functional web interface.Enhanced problem-solving and frontend development skills through hands on development tasks.",
    skills: ["REACT.JS", "TAILWIND CSS", "JAVASCRIPT","Bootstarp","Git & GitHub"],
    yearMark: "2026",
    align: "left"
  },
  {
    role: "Front-End Developer Intern",
    period: "2025",
    company: "U Devs",
    description: "Developed and optimized responsive web interfaces using React.js and Tailwind CSS. Built modern user experience layouts with clean component architecture.",
    skills: ["REACT.JS", "TAILWIND CSS", "JAVASCRIPT"],
    yearMark: "2026",
    align: "right"
  },
  {
    role: "Software Engineering Student",
    period: "2024 - Present",
    company: "Green International University",
    description: "Pursuing Bachelor's degree in Software Engineering. Focusing on software architecture, object-oriented design, database design, and web development.",
    skills: ["C++", "SOFTWARE ARCHITECTURE", "DATABASE","OOP","Python"],
    yearMark: "2024",
    align: "left"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="w-full bg-[#050505] text-white py-24 px-4 sm:px-6 lg:px-8 font-sans relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121217] border border-slate-800/80 text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-4">
            CAREER PATH
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            My Professional <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-md mx-auto">
            From academic foundations to hands-on software development. Here is the timeline of my growth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          
          {/* Vertical Glowing Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-purple-500/20 via-indigo-500/50 to-purple-500/20 -translate-x-1/2"></div>

          <div className="space-y-16 md:space-y-24">
            {journeyData.map((item, index) => {
              const isLeft = item.align === "left";
              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">
                  
                  {/* Center Glowing Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-8 z-10 items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-indigo-500/30 border border-indigo-400 flex items-center justify-center shadow-[0_0_12px_rgba(129,140,248,0.8)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                  </div>

                  {/* Left Column Container */}
                  <div className={`w-full md:w-[45%] ${isLeft ? 'order-1' : 'order-1 md:order-2 md:text-right'}`}>
                    <div className="bg-[#0e0e11] border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700/80 transition relative shadow-lg">
                      
                      <h3 className="text-xl font-bold text-white mb-2">{item.role}</h3>
                      
                      <div className={`flex items-center gap-2 mb-4 text-xs ${isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        <span className="px-2.5 py-1 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-400 font-bold">
                          {item.period}
                        </span>
                        <span className="text-slate-400 font-medium">
                          @ {item.company}
                        </span>
                      </div>

                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
                        {item.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-bold uppercase tracking-wider bg-[#141418] border border-slate-800 text-purple-300 px-2.5 py-1 rounded-md">
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Right Watermark Year Column */}
                  <div className={`hidden md:flex w-full md:w-[45%] items-center ${isLeft ? 'order-2 justify-start pl-12' : 'order-1 justify-end pr-12'}`}>
                    <span className="text-6xl lg:text-7xl font-extrabold text-slate-800/40 select-none font-mono">
                      {item.yearMark}
                    </span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Experience;