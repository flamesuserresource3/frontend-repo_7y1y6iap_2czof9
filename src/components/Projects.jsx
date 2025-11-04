import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'LINE Bot Multi-Client System',
    desc: 'Handles both standard and square chat events using linepy, built for reliability and multi-tenant operations.',
    tags: ['Python', 'linepy', 'Webhooks', 'Automation'],
    link: null,
  },
  {
    title: 'TikTok Bot Farm',
    desc: 'Automated like/follow system across 100+ devices with account creation and orchestration tools.',
    tags: ['Automation', 'Python', 'ADB', 'Scaling'],
    link: null,
  },
  {
    title: 'Execross API',
    desc: 'Media downloader API for web and bot integrations.',
    tags: ['API', 'Flask', 'Nginx', 'Docker'],
    link: 'https://docs.execross.com',
  },
  {
    title: 'Web3 Game Prototype',
    desc: 'Solana-based 1v1 duel game with smart contract payouts (Solana Devnet, USDT).',
    tags: ['Solana', 'Web3', 'Smart Contracts'],
    link: null,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative w-full bg-white py-20 text-gray-900 dark:bg-black dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(103,232,249,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-20 dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">Selected work that highlights automation, API engineering, and scalable systems.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link ?? undefined}
              target={p.link ? '_blank' : undefined}
              rel={p.link ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`group relative block overflow-hidden rounded-2xl border p-6 transition ${
                p.link ? 'hover:shadow-[0_0_40px_rgba(103,232,249,0.25)]' : ''
              } border-gray-200/60 bg-white/60 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_0_40px_rgba(103,232,249,0.2)]`}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(103,232,249,0.14),transparent_40%)]" />
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                {p.link && (
                  <ExternalLink size={18} className="text-cyan-600 opacity-80 transition group-hover:opacity-100 dark:text-cyan-200" />
                )}
              </div>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-cyan-500/30 bg-white/70 px-2.5 py-1 text-xs text-cyan-700 dark:border-cyan-400/30 dark:bg-black/50 dark:text-cyan-200">
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
