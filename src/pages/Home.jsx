import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import ProfilePic from "../assets/profile1.jpg";

export default function Home() {
  useEffect(() => {
    const stars = document.querySelectorAll(".shooting-star");

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const moveX = (e.clientX / innerWidth - 0.5) * 30; // subtle horizontal drift
      const moveY = (e.clientY / innerHeight - 0.5) * 20; // subtle vertical drift

      stars.forEach((star, i) => {
        const depth = (i + 1) * 0.2; // small variation for each star
        star.style.transform = `rotate(75deg) translate(${moveX * depth}px, ${moveY * depth}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden">
      {/* 🟢 Floating Balls */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-ball absolute rounded-full"
          style={{
            width: `${30 + Math.random() * 50}px`,
            height: `${30 + Math.random() * 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: "rgba(0,255,128,0.9)",
            boxShadow: "0 0 60px 25px rgba(0,255,128,0.8)",
            animationDelay: `${Math.random() * 2}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        ></div>
      ))}

      {/* 💚 Light streaks (Right ➜ Left) */}
      {[...Array(6)].map((_, i) => (
        <div
          key={`streak-${i}`}
          className="light-streak absolute"
          style={{
            top: `${15 * i + Math.random() * 10}%`,
            left: `${Math.random() * 100}%`,
            width: `${100 + Math.random() * 200}px`,
            height: "3px",
            background:
              "linear-gradient(90deg, rgba(0,255,128,0), rgba(0,255,128,1), rgba(0,255,128,0))",
            filter: "blur(2px)",
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${7 + Math.random() * 4}s`,
            opacity: 0.9,
          }}
        ></div>
      ))}

      {/* 🌠 Shooting Stars (Interactive) */}
      {[...Array(12)].map((_, i) => (
        <div
          key={`shoot-${i}`}
          className="shooting-star absolute"
          style={{
            bottom: "-10%",
            left: `${Math.random() * 100}%`,
            width: "3px",
            height: "90px",
            background:
              "linear-gradient(180deg, rgba(0,255,128,0), rgba(0,255,128,1))",
            boxShadow: "0 0 40px rgba(0,255,128,1)",
            animationDelay: `${Math.random() * 4}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            opacity: 1,
            transform: `rotate(75deg)`,
          }}
        ></div>
      ))}

      {/* 💚 Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/25 via-black to-black pointer-events-none"></div>

      {/* 🧑🏽‍💻 Profile */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-center items-center mb-8 md:mb-0 md:mr-12 z-10"
      >
        <motion.img
          src={ProfilePic}
          alt="Tim Tech"
          className="w-52 h-64 md:w-64 md:h-80 object-cover rounded-2xl shadow-[0_0_65px_rgba(0,255,128,0.9)] border border-green-400/80"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
        />
      </motion.div>

      {/* 🧠 Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left z-10"
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-green-400 tracking-wide drop-shadow-[0_0_25px_rgba(0,255,128,1)]">
          TIM TECH
        </h1>

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            2000,
            "React.js Hacker",
            2000,
            "Creative Coder",
            2000,
            "UI/UX Explorer",
            2000,
          ]}
          wrapper="span"
          speed={45}
          repeat={Infinity}
          className="block text-lg md:text-2xl text-green-300 font-mono drop-shadow-[0_0_15px_rgba(0,255,128,0.9)]"
        />

        <p className="mt-5 max-w-lg text-sm md:text-base text-gray-400 leading-relaxed">
          I build sleek, hacker-inspired interfaces — powered by motion,
          precision, and creativity. Welcome to my digital lab.
        </p>

        <div className="mt-8">
          <a
            href="/projects"
            className="border border-green-500 text-green-400 px-8 py-2 rounded-md hover:bg-green-500 hover:text-black transition-all duration-300 shadow-[0_0_25px_rgba(0,255,128,1)]"
          >
            View Projects
          </a>
        </div>
      </motion.div>

      <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-green-500/30 to-transparent blur-3xl"></div>

      <style>{`
        @keyframes float {
          0% { transform: translateY(0); opacity: 0.9; }
          50% { transform: translateY(-40px); opacity: 1; }
          100% { transform: translateY(0); opacity: 0.9; }
        }
        .floating-ball { animation: float infinite ease-in-out; }

        @keyframes slideLeft {
          0% { transform: translateX(100vw); opacity: 1; }
          100% { transform: translateX(-100vw); opacity: 0; }
        }
        .light-streak { animation: slideLeft linear infinite; }

        @keyframes shootUp {
          0% { transform: translateY(100vh) translateX(0); opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(-120vh) translateX(-30vw); opacity: 0; }
        }
        .shooting-star { animation: shootUp linear infinite; }
      `}</style>
    </div>
  );
}
