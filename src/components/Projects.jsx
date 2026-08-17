import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-indigo-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            A selection of my technical and engineering projects built during internships and academic coursework.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-4 text-slate-400">
                    <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-white transition">
                      <FaGithub className="w-5 h-5" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-white transition">
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-6 text-sm sm:text-base">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-slate-900">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-slate-300 bg-slate-900 border border-slate-800 px-3 py-1 rounded-lg"
                  >
                    {tech}
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

export default Projects;