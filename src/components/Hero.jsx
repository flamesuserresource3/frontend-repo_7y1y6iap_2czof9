import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-black/50 px-4 py-1 text-xs text-cyan-300/90 backdrop-blur-md"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Indonesia • Bahasa Indonesia • English • Melayu
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          <span className="text-white">Asking Ang</span>
          <span className="block bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-200 bg-clip-text text-transparent">
            Execross: API, Server, Bot, and Digital Solution
          </span>
        </motion.h1>

        {/* Typing effect line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-4 max-w-2xl text-sm text-gray-300 sm:text-base"
        >
          Freelance web and backend developer since 2021. Experienced in building APIs, automation bots, and digital tools that connect people and platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a
            href="https://wa.me/6281234567890?text=Hi%20Asking%20Ang%2C%20Let%E2%80%99s%20build%20my%20next%20digital%20solution."
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-400/90 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300"
          >
            Hire Me
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="https://docs.execross.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-cyan-500/40 bg-white/5 px-5 py-3 font-semibold text-cyan-200 backdrop-blur hover:bg-white/10"
          >
            View Docs
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-10 text-cyan-300/80"
        >
          <span className="text-xs uppercase tracking-widest">Building APIs. Creating Bots. Scaling Ideas.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
