import { motion, useInView, AnimatePresence } from 'motion/react';
import { useRef, useState } from 'react';
import { FaAws } from "react-icons/fa";
import { IoPrism } from "react-icons/io5";
import { SiAxios } from "react-icons/si";
import {
  SiJavascript,
  SiReact,
  SiFirebase,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiFigma,
  SiGit,
  SiJsonwebtokens
} from 'react-icons/si';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  

  const [activeCategory, setActiveCategory] = useState('all');

  const skills = [
    { name: 'JavaScript', icon: SiJavascript, category: 'frontend' },
    { name: 'React', icon: SiReact, category: 'frontend' },
    { name: 'TypeScript', icon: SiTypescript, category: 'frontend' },
    { name: 'Next.js', icon: SiNextdotjs, category: 'frontend' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend' },
    
    { name: 'Node.js', icon: SiNodedotjs, category: 'backend' },
    { name: 'Express', icon: SiExpress, category: 'backend' },
    { name: 'Firebase', icon: SiFirebase, category: 'backend' },
    { name: 'JWT', icon:  SiJsonwebtokens, category: 'backend' },
    
    { name: 'PostgreSQL', icon: SiPostgresql, category: 'database' },
    { name: 'MongoDB', icon: SiMongodb, category: 'database' },
    { name: 'Prisma', icon: IoPrism, category: 'database' },
    
    { name: 'Git', icon: SiGit, category: 'tools' },
    { name: 'Docker', icon: SiDocker, category: 'tools' },
    { name: 'Figma', icon: SiFigma, category: 'tools' },
    { name: 'AWS', icon: FaAws, category: 'tools' },
    { name: 'Axios', icon: SiAxios, category: 'tools' },
  ];

  const categories = [
    { id: 'all', label: 'All' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools' },
  ];


  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" ref={ref} className="relative py-20 md:py-32 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
            Skills & Expertise
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Technical Proficiency
          </h2>
        </motion.div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/20 font-semibold'
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6, scale: 1.05 }}
                className="relative group"
              >
                <div className="relative bg-zinc-900 border border-zinc-800 rounded-xl p-5 sm:p-6 md:p-8 transition-all group-hover:border-emerald-500/50">

                  <div className="flex flex-col items-center gap-3 sm:gap-4">
                    <div className="p-3 sm:p-4 rounded-lg bg-zinc-800/50 group-hover:bg-emerald-500/10 transition-colors">
                      <skill.icon className="text-3xl sm:text-4xl text-white group-hover:text-emerald-400 transition-colors" />
                    </div>

                    <span className="text-sm sm:text-base md:text-lg font-medium text-white text-center">
                      {skill.name}
                    </span>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}