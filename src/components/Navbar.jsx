import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelope,
} from "react-icons/fa";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-0 left-0 w-full bg-black/90 backdrop-blur-md border-t border-green-500/30 text-gray-300 z-50"
    >
      <div className="max-w-md mx-auto flex justify-around py-3">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm transition-all duration-300 hover:text-green-400 ${
              isActive ? "text-green-400" : ""
            }`
          }
        >
          <FaHome size={20} />
          <span className="text-[11px] mt-1">Home</span>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm transition-all duration-300 hover:text-green-400 ${
              isActive ? "text-green-400" : ""
            }`
          }
        >
          <FaUser size={20} />
          <span className="text-[11px] mt-1">About</span>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm transition-all duration-300 hover:text-green-400 ${
              isActive ? "text-green-400" : ""
            }`
          }
        >
          <FaFolderOpen size={20} />
          <span className="text-[11px] mt-1">Projects</span>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `flex flex-col items-center text-sm transition-all duration-300 hover:text-green-400 ${
              isActive ? "text-green-400" : ""
            }`
          }
        >
          <FaEnvelope size={20} />
          <span className="text-[11px] mt-1">Contact</span>
        </NavLink>
      </div>
    </motion.nav>
  );
}
