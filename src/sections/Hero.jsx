import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

export default function Hero() {
  return (
    <ParallaxProvider>
      {/* ✅ Navbar */}
      <nav className="fixed top-0 left-0 w-full flex justify-center items-center py-6 z-50">
        <ul className="flex gap-10 text-white font-medium text-base md:text-lg backdrop-blur-md bg-black/30 px-8 py-2 rounded-full border border-yellow-500">
          <li><a href="#hero" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#skills" className="hover:text-yellow-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-yellow-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
        </ul>
      </nav>

      {/* ✅ Hero */}
      <section
        id="hero"
        className="h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black"
      >
        {/* ✅ BIG Smooth Globe */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Player
            autoplay
            loop
            speed={1.5}
            src="/it.json"
            className="w-[800px] h-[800px] opacity-20"
          />
        </div>

        {/* ✅ Konten */}
        <Parallax speed={-10}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center px-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">
              IT Security Solution
            </h1>
            <p className="text-gray-400 text-lg md:text-2xl mb-8">
              by Adit Setya Nugroho
            </p>
            <a
              href="#projects"
              className="inline-block px-8 py-3 border border-yellow-500 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition"
            >
              View Projects
            </a>
          </motion.div>
        </Parallax>
      </section>
    </ParallaxProvider>
  );
}
