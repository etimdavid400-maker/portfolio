import React from "react";
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <div className="min-h-screen bg-black text-gray-200 px-6 md:px-20 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Header */}
        <h1 className="text-4xl font-bold text-green-400 mb-6 text-center">
          ETIM DAVID
        </h1>
        <p className="text-center text-gray-400 mb-10">
          Full-Stack JavaScript Developer • Mushin, Lagos, Nigeria <br />
          📞 +234 707 975 2017 | ✉️ etimdavid400@gmail.com <br />
          🌐{" "}
          <a
            href="https://github.com/etimdavid400-maker"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            github.com/etimdavid400-maker
          </a>
        </p>

        {/* Professional Summary */}
        <section className="mb-10">
          <h2 className="text-xl text-green-400 font-semibold mb-3">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate and detail-oriented Software Developer skilled in building modern,
            responsive, and user-focused web applications. Strong foundation in both front-end
            and back-end technologies, with hands-on experience creating scalable and efficient
            solutions. Committed to teamwork, continuous learning, and writing high-quality,
            maintainable code that aligns with business objectives.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-10">
          <h2 className="text-xl text-green-400 font-semibold mb-3">
            TECHNICAL SKILLS
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>
              <strong>Frontend:</strong> React.js, JavaScript (ES6), HTML5, Tailwind CSS, Bootstrap
            </li>
            <li>
              <strong>Backend:</strong> Node.js, Express.js
            </li>
            <li>
              <strong>Database:</strong> MongoDB (NoSQL), Firebase
            </li>
            <li>
              <strong>Tools & Platforms:</strong> Git, GitHub, Render, Vercel, Insomnia (API Testing)
            </li>
            <li>
              <strong>Concepts:</strong> Authentication & Authorization, RESTful APIs, UI/UX Principles, Version Control
            </li>
          </ul>
        </section>

        {/* Soft Skills */}
        <section className="mb-10">
          <h2 className="text-xl text-green-400 font-semibold mb-3">
            SOFT SKILLS
          </h2>
          <p className="text-gray-300">
            Collaboration & Teamwork | Communication | Emotional Intelligence | Time Management |
            Customer Service
          </p>
        </section>

        {/* Education */}
        <section className="mb-10">
          <h2 className="text-xl text-green-400 font-semibold mb-3">EDUCATION</h2>
          <p className="text-gray-300">
            <strong>Certificate in Software Development</strong> <br />
            GOMYCODE, Lagos — <em>2023 – 2024</em>
          </p>
        </section>

        {/* Additional Info */}
        <section>
          <h2 className="text-xl text-green-400 font-semibold mb-3">
            ADDITIONAL INFORMATION
          </h2>
          <p className="text-gray-300">
            • Open to remote or on-site opportunities <br />
            • Interested in Frontend or Full-Stack roles <br />
            • Continuously improving and exploring new technologies
          </p>
        </section>
      </motion.div>
    </div>
  );
}
