import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaTimes,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const projects = [
  {
    title: "Blood Donation Platform",
    image: "https://i.postimg.cc/Dm32JwyK/Screenshot-2026-10-12-185413.png",
    description: "A modern, full-stack web application designed to connect blood donors with patients in urgent need. The platform features role-based access control, secure authentication , emergency blood requests management.",
    technology: ["Next.js", "TypeScript", "Node.js", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Nodemailer", "Zod Validation", "Multer & Cloudinary", "Stripe payment"],
    liveLink: "https://blood-donation-full-stack.vercel.app/",
    github: "https://github.com/saifur2468/Blood_Donation_FullStack",
    features: [
      "Emergency Blood Requests: Patients can create urgent blood requests with details like blood group, bags needed, hospital location, and urgency level.",
      "Google Authentication & Local Auth: Secure login options with automatic redirection and session management.",
      "Modern UI/UX: Built with Tailwind CSS supporting dark/light mode and glassmorphism elements.",
      "Form Validation: Robust client-side validation using React Hook Form and Zod.",
      "Toast Notifications: Real-time feedback alerts for user actions"
    ],
    challenges: "Handling complex multi-role state routing and ensuring secure backend REST API communication with Prisma and PostgreSQL.",
    improvements: "Plan to integrate real-time SMS notifications for emergency blood requests and live chat."
  },
  {
    title: "RentNest - Apartment Booking",
    image: "https://i.postimg.cc/rmwP7Wdy/Screenshot-2026-10-23-185412.png",
    description: "A modern, full-stack property rental and apartment management platform connecting Tenants, Landlords, and Administrators for property listings and requests.",
    technology: ["Next.js", "Node.js", "TypeScript", "Tailwind", "Prisma ORM", "Stripe"],
    liveLink: "https://l2-a5-nextjs.vercel.app/",
    github: "https://github.com/saifur2468/L2-A5-Nextjs",
 features: [
      "Browse Categories: Explore various property types and categories.",
      "Search Properties: Filter and search available properties by location, such as Dhanmondi and Gulshan.",
      "Authentication: Secure user registration and login with JWT support.",
      "Property Management: List new properties with details, pricing, amenities, and category mapping.",
      "Rental Requests: Review and approve/reject incoming rental applications from tenants.",
      "Secure Payments: Integrated payment intent creation and confirmation workflow.",
      "User Oversight: View all registered platform users and manage account statuses (Ban/Unban users).",
      "Listing Management: Monitor all properties listed across the platform with landlord details.",
      "Rental Oversight: Track and audit all global rental requests and statuses."
    ],
    challenges: "Managing secure user role transitions (User to Tenant/Admin) smoothly and validating checkout forms.",
    improvements: "Will implement automated lease agreements and interactive 3D virtual tours."
  },
  {
    title: "Bistro Boss Restaurant App",
    image: "https://i.postimg.cc/BbtRPDsz/Screenshot-2026-10-23-185255.png",
    description: "A streamlined luxury restaurant management layout supporting cart actions, food categorization, online table reservations, and admin product tracking.",
    technology: ["React", "Firebase", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://bistro-boss-17795.web.app/",
    github: "https://github.com/saifur2468/Bistro-restaurant-client",
    features: [
      "Fluid Food Ordering UI with multi-category food filtering",
      "Instant Cart calculations and secure payment gateway setup",
      "Interactive Table Booking reservation subsystem"
    ],
    challenges: "Designing an efficient local cart state synced perfectly with server database values across page reloads.",
    improvements: "Intend to introduce a live order tracking dashboard with WebSocket connections."
  },

  {
    title: "volunter-managment",
    image: "https://i.postimg.cc/DZNXnkzL/Screenshot-2026-10-23-184406.png",
    description: "A user-friendly platform designed to connect volunteers with meaningful opportunities. Users can explore volunteer programs, register for events, manage their participation, and contribute to social causes. The platform simplifies volunteer coordination and helps organizations manage volunteer activities efficiently.",
    technology: ["React", "Firebase", "Node.js", "MongoDB", "Tailwind"],
    liveLink: "https://volunter-managment-ae225.web.app/",
    github: "https://github.com/saifur2468/Assignment-11-client-Side ",
features: [
  "Volunteer Opportunity Discovery with category-based filtering",
  "Seamless Volunteer Registration and Event Participation Management",
  "Dedicated Dashboards for Managing Volunteer Activities and Opportunities"
],
challenges: "Implementing role-based access control and keeping volunteer registrations synchronized with event data while maintaining a smooth user experience.",
improvements: "Plan to introduce real-time notifications, volunteer activity tracking, and an analytics dashboard to improve volunteer coordination."
}

];

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 bg-black text-white min-h-screen flex flex-col justify-between">
      <div className="max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mt-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Projects</span>
          </h2>
          <p className="text-xl mt-2 p-2">A showcase of web applications I've built using modern frontend technologies, robust backend systems, and thoughtful UI/UX design.</p>
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
              className="group bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* 1. Image Area (As per sketch top) */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>


              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-3">
                  {/* 2. Heading / Title */}
                  <h3 className="text-xl font-bold text-white tracking-wide">
                    {project.title}
                  </h3>

                  {/* 3. Project Summary */}
                  <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>


                </div>

                {/* 5. Details Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-3 text-center text-sm font-semibold rounded-xl bg-emerald-500 text-zinc-950 hover:bg-emerald-400 transition-colors duration-200 shadow-sm flex items-center justify-center gap-2 mt-4"
                >
                  View  More <FaArrowRight className="text-xs" />
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="relative w-full max-w-2xl bg-zinc-900 text-white rounded-3xl shadow-2xl border border-zinc-800 overflow-hidden max-h-[90vh] flex flex-col z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition-colors z-20"
              >
                <FaTimes className="text-base" />
              </button>

              <div className="overflow-y-auto p-6 md:p-8 space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight pr-10">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technology.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-semibold px-3 py-1 bg-zinc-800 text-zinc-200 rounded-lg border border-zinc-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-1.5">Project Overview</h4>
                  <p className="text-zinc-300 text-sm md:text-base leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2.5">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <FaCheckCircle className="text-emerald-400 mt-0.5 flex-shrink-0 text-xs" />
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
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 bg-emerald-500 text-zinc-950 rounded-xl hover:bg-emerald-400 transition shadow-sm"
                  >
                    <FaExternalLinkAlt /> Open Live Website
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold px-4 py-2.5 border border-zinc-700 text-zinc-300 rounded-xl hover:bg-zinc-800 transition"
                  >
                    <FaGithub className="text-sm" /> GitHub Client Repository
                  </a>
                </div>

                <hr className="border-zinc-800" />

                {/* Challenges Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-950/40 border border-amber-800/50 inline-block px-2.5 py-1 rounded mb-2">Challenges Faced</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {selectedProject.challenges}
                  </p>
                </div>

                {/* Future Improvement Section */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-950/40 border border-sky-800/50 inline-block px-2.5 py-1 rounded mb-2">Future Implementations</h4>
                  <p className="text-zinc-300 text-sm leading-relaxed">
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
          bg-zinc-900 border border-zinc-800 px-8 py-4 text-white font-semibold
          shadow-lg transition-all duration-300
          hover:bg-emerald-500 hover:text-zinc-950 hover:border-emerald-500 hover:-translate-y-1"
        >
          View More Projects
          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
};

export default ProjectSection;