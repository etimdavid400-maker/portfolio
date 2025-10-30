import React from "react";
import { motion } from "framer-motion";
import Resume from "./Resume"; // ✅ import your resume component

export default function About() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 md:px-20 py-16">
      {/* ✅ About Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">
          About Tim Tech
        </h1>
        <p className="text-gray-400 text-lg leading-relaxed text-center">
          Hi, I’m <span className="text-green-400">Etim David</span> — known as{" "}
          <span className="text-green-400 font-semibold">Tim Tech</span>.
          I’m a passionate Full-Stack JavaScript Developer focused on building
          responsive, accessible, and performance-driven web applications.
          I enjoy solving real-world problems through clean, elegant code and
          intuitive UI/UX design.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed text-center">
          Over the years, I’ve worked with a variety of technologies in both the
          front-end and back-end, developing full-stack web solutions that are
          fast, scalable, and user-centered. My approach combines creative
          thinking with strong technical foundations to deliver digital
          experiences that stand out.
        </p>

        <p className="mt-6 text-gray-400 leading-relaxed text-center">
          When I’m not coding, I’m learning new frameworks, exploring open-source
          projects, or brainstorming new ideas that make tech more accessible.
        </p>
      </motion.div>

      {/* ✅ Resume Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-green-400 mb-10 text-center">
          My Resume
        </h2>
        <Resume /> {/* ✅ Embeds your resume component directly here */}
      </motion.div>
    </div>
  );
}
