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
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(6,182,212,0.15),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
          <p className="mt-2 max-w-2xl text-gray-300">Selected work that highlights automation, API engineering, and scalable systems.</p>
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
              className={`group block rounded-2xl border border-white/10 bg-white/5 p-6 transition ${p.link ? 'hover:border-cyan-500/40 hover:shadow-[0_0_0_1px_rgba(34,211,238,0.25)]' : ''}`}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                {p.link && (
                  <ExternalLink size={18} className="text-cyan-300 opacity-80 transition group-hover:opacity-100" />
                )}
              </div>
              <p className="mt-2 text-sm text-gray-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-cyan-500/30 bg-black/50 px-2.5 py-1 text-xs text-cyan-200">
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
