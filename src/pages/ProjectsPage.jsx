import React, { useState } from 'react';
import { 
  HiOutlineSearch, 
  HiOutlineExternalLink, 
  HiOutlineLockClosed 
} from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: "SHOP AI",
    category: "WEB DEV",
    badge: "FEATURED WORK",
    description: "SHOPAI is designed to make online shopping safer and more transparent by using Artificial Intelligence to detect suspicious online stores, analyze trust indicators, and provide users with a confidence score before making purchases. The platform helps customers identify authentic sellers, avoid scams, and make smarter shopping decisions.",
    image: "/public/images/SHOPAI1122.png",
    tags: ["HTML5", "CSS3", "JAVASCRIPT","AI API"],
    demoUrl: "https://www.linkedin.com/posts/meharma-arif-developer_artificialintelligence-cybersecurity-ecommerce-ugcPost-7489194856636993536-c3NN/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIdxfkBmZo6sza9dHsitKC8VMrEyvoICB8",
    githubUrl: "https://meharma-arif-developer.github.io/Shop-AI",
    isCompleted: true
  },
  {
    id: 2,
    title: "Cooking App",
    category: "WEB DEV",
    badge: "FEATURED WORK",
    description: "This application is designed to make cooking easier, smarter, and more enjoyable by providing users with a wide variety of recipes, step-by-step cooking instructions, ingredient details, and meal inspiration in one place.",
    image: "/public/images/CookingApp.png",
    tags: ["Kotlin", "Android Studio"],
    demoUrl: "https://www.linkedin.com/posts/meharma-arif-developer_mobileapp-appdevelopment-cookingapp-ugcPost-7456322144050946048-OL27/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFIdxfkBmZo6sza9dHsitKC8VMrEyvoICB8",
    githubUrl: "https://meharma-arif-developer.github.io/Cooking-App",
    isCompleted: true
  },
  {
    id: 3,
    title: "Flight Management System",
    category: "WEB DEV",
    badge: "FEATURED WORK",
    description: "The Flight Management System console-based application developed in C++. It uses C++ Programming concepts to manage and organize user crushes. With simple menus, the project demonstrates class design, encapsulation, vectors, and user interaction in C++.",
    image: "/public/images/FlightSystem.png",
    tags: ["C++", "Programming Langauage"],
    demoUrl: "https://meharma-arif-developer.github.io/Flight-Management-System/",
    githubUrl: "https://meharma-arif-developer.github.io/Flight-Management-System",
    isCompleted: true
  },
  {
    id: 4,
    title: "Rock Paper Scissors game",
    category: "WEB DEV",
    badge: "FEATURED WORK",
    description: "I have successfully developed a fully functional Rock Paper Scissors game using pure HTML, CSS, and JavaScript.This project helped me strengthen my understanding of DOM manipulation, event handling, conditional logic, and score tracking.",
    image: "/public/images/GAME.png",
    tags: ["Javascript", "HTML & CSS"],
    demoUrl: " https://meharma-arif-developer.github.io/Game-Stone-paper-/",
    githubUrl: "https://github.com/meharma-arif-developer/Game-Stone-paper-",
    isCompleted: true
  },
  {
    id: 5,
    title: "Cooking website",
    category: "OPEN SOURCE",
    badge: "IN PROGRESS",
    description: "Currently cooking, Stay tuned...",
    tags: ["HTML", "CSS" , "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
    isCompleted: false
  },
  {
    id: 6,
    title: "Project [Classified]",
    category: "OPEN SOURCE",
    badge: "IN PROGRESS",
    description: "Currently cooking, Stay tuned...",
    image: "",
    tags: [],
    demoUrl: "#",
    githubUrl: "#",
    isCompleted: false
  }
];

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter = 
      activeFilter === 'ALL' || 
      (activeFilter === 'WEB DEV' && project.category === 'WEB DEV') ||
      (activeFilter === 'OPEN SOURCE' && project.category === 'OPEN SOURCE');

    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#050505] text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Badge & Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121217] border border-amber-500/30 text-amber-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            LATE NIGHT EFFORTS
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-3">
            Digital <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-lg mx-auto">
            A showcase of high-impact AI and Full-Stack solutions.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          
          {/* Tabs Group */}
          <div className="bg-[#0c0c0f] border border-slate-800/90 rounded-full p-1.5 flex items-center gap-1">
            <button
              onClick={() => setActiveFilter('ALL')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition ${
                activeFilter === 'ALL'
                  ? 'bg-amber-500/10 border border-amber-500/40 text-amber-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              ALL
            </button>
            <button
              onClick={() => setActiveFilter('WEB DEV')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition ${
                activeFilter === 'WEB DEV'
                  ? 'bg-amber-500/10 border border-amber-500/40 text-amber-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              WEB DEV
            </button>
            <button
              onClick={() => setActiveFilter('OPEN SOURCE')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition flex items-center gap-1.5 ${
                activeFilter === 'OPEN SOURCE'
                  ? 'bg-amber-500/10 border border-amber-500/40 text-amber-400'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              OPEN SOURCE
            </button>
          </div>

          {/* Search Input Box */}
          <div className="relative w-full sm:w-64">
            <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="SEARCH"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0c0c0f] border border-slate-800/90 rounded-full py-2 pl-9 pr-10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500/50 uppercase tracking-wider font-semibold"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-slate-600 bg-slate-900 border border-slate-800 px-1.5 py-0.5 rounded font-mono">
              ⌘K
            </span>
          </div>

        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0a0a0d] border border-slate-800/80 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition group shadow-xl"
            >
              {/* Card Top / Image Area */}
              {project.isCompleted ? (
                <div className="relative h-52 w-full overflow-hidden bg-[#101014]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500 filter brightness-90 group-hover:brightness-100"
                  />
                  {/* Top Left Badge */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-500/40 text-amber-300 text-[9px] font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                    {project.badge}
                  </div>
                </div>
              ) : (
                /* In Progress / Locked Preview */
                <div className="relative h-52 w-full bg-[#0d0d12] border-b border-slate-800/80 flex flex-col items-center justify-center p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-3 text-amber-400">
                    <HiOutlineLockClosed className="w-5 h-5" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-amber-500 uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    SECURE PAYLOAD
                  </div>
                  <div className="absolute bottom-3 left-3 px-3 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[9px] font-bold uppercase tracking-wider">
                    {project.badge}
                  </div>
                </div>
              )}

              {/* Card Content Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  {/* Category Pill */}
                  <span className="inline-block px-2.5 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[9px] font-bold uppercase tracking-wider mb-3">
                    {project.category}
                  </span>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags & Actions */}
                <div className="space-y-5">
                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-[#121217] border border-slate-800 text-[9px] font-bold uppercase tracking-wider text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Buttons */}
                  <div className="flex items-center gap-3 pt-2">
                    <a
                      href={project.demoUrl}
                      className="flex-1 bg-white hover:bg-slate-200 text-black font-extrabold text-xs py-2.5 rounded-xl text-center transition tracking-wider uppercase shadow-md"
                    >
                      DETAILS
                    </a>
                    <a
                      href={project.demoUrl}
                      className="p-2.5 rounded-xl bg-[#121217] border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 transition"
                      title="Live Demo"
                    >
                      <HiOutlineExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2.5 rounded-xl bg-[#121217] border border-slate-800/80 text-slate-300 hover:text-white hover:border-slate-700 transition"
                      title="GitHub Repository"
                    >
                      <FaGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProjectsPage;