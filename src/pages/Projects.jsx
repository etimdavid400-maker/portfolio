import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Blog Website",
      description:
        "Built a responsive blog app using React.js and Node.js with dynamic content rendering and smooth navigation.",
      link: "https://germ-l9gh.onrender.com",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a functional e-commerce prototype with product listings, responsive design, and basic cart functionality.",
      link: "https://ecommar15.vercel.app",
    },
    {
      title: "Business Website",
      description:
        "Created a professional business landing page focused on clean UI/UX and performance optimization.",
      link: "https://re-react-eta.vercel.app",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 md:px-20 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-green-400 mb-10 text-center"
      >
        Featured Projects 💻
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 border border-green-500/20 rounded-xl p-6 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-transform hover:-translate-y-2"
          >
            <h3 className="text-xl font-semibold text-green-400 mb-3">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:text-green-300 font-semibold underline"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
