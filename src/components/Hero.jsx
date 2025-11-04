import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Animated overlays - gradients and grid, non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-white/0 dark:from-black/60 dark:via-black/30 dark:to-black" />
      <div className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay [background-image:linear-gradient(rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.06)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-20 dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-black" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start px-6 pt-24 sm:pt-28 md:pt-32 lg:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 rounded-full border border-amber-500/40 bg-white/60 px-4 py-1 text-xs text-amber-700 backdrop-blur dark:border-yellow-400/40 dark:bg-black/50 dark:text-yellow-200"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500 dark:bg-yellow-400" />
          Indonesia • Bahasa Indonesia • English • Melayu
        </motion.div>

        <div className="mt-6 flex w-full flex-col items-start gap-5 sm:flex-row sm:items-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            src="https://api.dicebear.com/7.x/identicon/svg?seed=AskingAng"
            alt="Asking Ang avatar"
            className="h-20 w-20 rounded-full border border-amber-500/40 bg-white/70 p-1 shadow-lg dark:border-yellow-400/40 dark:bg-black/50"
          />

          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
            >
              <span className="">Asking Ang</span>
              <span className="block bg-gradient-to-r from-amber-500 via-yellow-400 to-cyan-400 bg-clip-text text-transparent dark:from-yellow-300 dark:via-yellow-400 dark:to-cyan-200">
                Execross: API, Server, Bot, and Digital Solution
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base"
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
                className="group inline-flex items-center gap-2 rounded-lg bg-amber-500/90 px-5 py-3 font-semibold text-black transition hover:bg-amber-400 dark:bg-yellow-400/90 dark:hover:bg-yellow-300"
              >
                Hire Me
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href="https://docs.execross.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-amber-500/40 bg-white/70 px-5 py-3 font-semibold text-amber-700 backdrop-blur hover:bg-white dark:border-yellow-400/40 dark:bg-white/5 dark:text-yellow-200 dark:hover:bg-white/10"
              >
                View Docs
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 text-amber-700/80 dark:text-yellow-200/80"
            >
              <span className="text-xs uppercase tracking-widest">Building APIs. Creating Bots. Scaling Ideas.</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
