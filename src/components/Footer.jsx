import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-black text-gray-400 border-t border-green-500/20 py-6 flex flex-col md:flex-row items-center justify-between px-6"
    >
      {/* Left side — text or copyright */}
      <p className="text-sm text-center md:text-left mb-3 md:mb-0">
        © {new Date().getFullYear()} <span className="text-green-400">TIM TECH.CO</span>. All rights reserved.
      </p>

      {/* Right side — social icons */}
      <div className="flex space-x-5">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaGithub size={20} />
        </a>

        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaLinkedin size={20} />
        </a>

        <a
          href="https://x.com/DavidEtim04"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-colors duration-300"
        >
          <FaTwitter size={20} />
        </a>
      </div>
    </motion.footer>
  );
}
