import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

import { FiArrowUpRight } from "react-icons/fi";


const projects = [
{
    title: "RentNest - Property Rental & Management Platform",
    image: "https://i.postimg.cc/FFYrYhLz/Screenshot-2026-08-11-122830.png",
    description: "A modern, full-stack property rental and management web application built with Next.js, Tailwind CSS, and a secure backend REST API RentNest connects Tenants, Landlords, and Administrators in a seamless ecosystem for property listings, rental requests, payments, and user management.",
    technology: ["Nextjs", "Node.js", "TypeScript", "Tailwind", "Prisma ORM" ,"Stripe payment"],
    liveLink: "https://l2-a5-nextjs.vercel.app/",
    github: "https://github.com/saifur2468/L2-A5-Nextjs",
    features: [
   
"Browse Categories: Explore various property types and categories.",
"Search Properties: Filter and search available properties by location, such as Dhanmondi and Gulshan.",
"Authentication: Secure user registration and login with JWT support."
    ],
    challenges: "Managing secure user role transitions (User to Tenant/Admin) smoothly and validating multi-step forms on the checkout module.",
    improvements: "Will implement Stripe payment gateway and add an interactive 3D virtual tour of available apartments."
  },


  {
    title: "Gaming Rating Website",
    image: "https://i.postimg.cc/x811MNfL/Screenshot-2026-03-02-225059.png",
    description: "A full-stack MERN application designed for exploring, adding, and reviewing modern video games with user interaction features.",
    technology: ["React", "Node.js", "MongoDB", "Firebase", "Express"],
    liveLink: "https://gaming-rating.web.app/",
    github: "https://github.com/saifur2468/Assignment-10-client",
    features: [
      "Secure Firebase User Authentication system",
      "Dynamic Add & Review Games module with rating integration",
      "Real-time data synchronization with MongoDB backend",
      "Fully responsive UI optimized for multiple viewports"
    ],
    challenges: "Implementing complex state sync between Firebase Auth and MongoDB user roles, along with optimizing image upload load times.",
    improvements: "Plan to integrate Twitch API for live game streaming data, and build an advanced AI-based game recommendation system."
  },
  {
    title: "Bistro Restaurant Web Application",
    image: "https://i.postimg.cc/15xcBWm1/Screenshot-2026-03-23-151950.png",
    description: "A streamlined luxury restaurant management layout supporting cart actions, food categorization, and admin product tracking.",
    technology: ["React", "Firebase", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://bistro-boss-17795.web.app/",
    github: "https://github.com/saifur2468/Bistro-restaurant-client",
    features: [
      "Fluid Food Ordering UI with categorizations",
      "Instant Cart calculations and smooth secure Payment setup",
      "Interactive Table Booking reservation subsystem",
      "Robust Admin Control Panel for menu and orders tracking"
    ],
    challenges: "Designing an efficient local cart state synced perfectly with server database values across page reloads.",
    improvements: "Intend to introduce a live order tracking dashboard with WebSocket connection and integrated loyalty point discounts."
  },
  
  {
    title: "Volunteer Management",
    image: "https://i.postimg.cc/jdGJ0vqn/Screenshot-2026-03-02-230510.png",
    description: "An impact-driven web platform designed to seamlessly connect non-profit organizers with passionate volunteers globally.",
    technology: ["React", "Express", "MongoDB", "Tailwind"],
    liveLink: "https://volunter-managment-ae225.web.app",
    github: "https://github.com/saifur2468/Assignment-11-client-Side",
    features: [
      "Create, Edit, and Manage customizable Volunteer Posts",
      "Live workflow for tracking and responding to user Join Requests",
      "Dedicated personalized User Profile & Activity Dashboard",
      "Instant real-time post capacity updates on engagement"
    ],
    challenges: "Handling concurrent database updates safely when volunteers click 'Join' simultaneously on a slot-limited post.",
    improvements: "Plan to build an automated email notification system for upcoming events and download-ready PDF certificates for volunteers."
  },
  
];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-black text-white min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-5">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Projects</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm hover:shadow-xl hover:shadow-zinc-200/40 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Area with Quick Links */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Top Corner External Link Quick Access */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-white/90 text-zinc-800 hover:bg-white shadow-sm transition opacity-0 group-hover:opacity-100 duration-300"
                >
                  <FiArrowUpRight className="text-base" />
                </a>
              </div>

              {/* Card Bottom / Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold text-zinc-800 tracking-wide mb-4">
                    {project.title}
                  </h3>
                  
                  {/* Card Direct Links (Live & GitHub) */}
                  <div className="flex gap-3 mb-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      Live Link
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 border border-zinc-200 hover:bg-zinc-50 text-zinc-600 rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>

                {/* View Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-zinc-900 text-white hover:bg-zinc-800 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  View Details <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* PopUp Details Modal View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/40 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-zinc-100 overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              {/* Close Icon Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 transition-colors z-20"
              >
                <FaTimes className="text-base" />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-zinc-950 tracking-tight pr-10">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technology.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 bg-zinc-100 text-zinc-800 rounded-lg border border-zinc-200/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Project Overview</h4>
                  <p className="text-zinc-600 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* NEW: Project Features Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2.5">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-600">
                        <FaCheckCircle className="text-emerald-500 mt-0.5 flex-shrink-0 text-xs" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Direct Navigation Buttons */}
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href={selectedProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition shadow-sm"
                  >
                    <FaExternalLinkAlt /> Open Live Website
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 border border-zinc-300 text-zinc-700 rounded-xl hover:bg-zinc-50 transition"
                  >
                    <FaGithub className="text-sm" /> GitHub Client Repository
                  </a>
                </div>

                <hr className="border-zinc-100" />

                {/* Challenges Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-50 inline-block px-2 py-0.5 rounded mb-2">Challenges Faced</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Future Improvement Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 inline-block px-2 py-0.5 rounded mb-2">Future Implementations</h4>
                  <p className="text-zinc-600 text-sm leading-relaxed">
                    {selectedProject.improvements}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Global Bottom View More Button */}
      <div className="w-full flex justify-center pb-12">
        <button
          className="group flex items-center gap-3 rounded-xl mt-10
          bg-slate-900 px-8 py-4 text-white font-semibold
          shadow-lg transition-all duration-300
          hover:bg-sky-600 hover:shadow-sky-500/30 hover:-translate-y-1"
        >
          View More Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;