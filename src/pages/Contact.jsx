import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100 flex flex-col items-center justify-center px-6 py-16 md:px-20 relative overflow-hidden">
      {/* ✅ Background Glow */}
      <div className="absolute inset-0 bg-green-500/5 blur-3xl pointer-events-none"></div>

      {/* ✅ Header */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-green-400 mb-8 text-center drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"
      >
        Let’s Connect ⚡
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-300 text-center mb-12 max-w-2xl text-lg leading-relaxed"
      >
        Want to collaborate, hire, or just say hi?  
        You can always reach me through any of the channels below 👇
      </motion.p>

      {/* ✅ Contact Info Section */}
      <div className="flex flex-col items-center space-y-6 text-gray-200 text-lg font-medium">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center space-x-3 bg-green-400/10 px-4 py-2 rounded-lg hover:bg-green-400/20 transition"
        >
          <FaEnvelope className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
          <span>etimdavid400@gmail.com</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-3 bg-green-400/10 px-4 py-2 rounded-lg hover:bg-green-400/20 transition"
        >
          <FaPhoneAlt className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
          <span>+234 707 975 2017</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-3 bg-green-400/10 px-4 py-2 rounded-lg hover:bg-green-400/20 transition"
        >
          <FaMapMarkerAlt className="text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
          <span>Mushin, Lagos, Nigeria</span>
        </motion.div>
      </div>

      {/* ✅ Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex space-x-8 mt-12"
      >
        <a
          href="https://github.com/etimdavid400-maker"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaGithub size={30} className="drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaLinkedin size={30} className="drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
        </a>
        <a
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaTwitter size={30} className="drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" />
        </a>
      </motion.div>

      {/* ✅ Floating Glow / Animated Light */}
      <motion.div
        initial={{ opacity: 0.3 }}
        animate={{ opacity: [0.4, 0.7, 0.4], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
        className="absolute bottom-0 w-full h-40 bg-green-500/30 blur-3xl"
      ></motion.div>
    </div>
  );
}
