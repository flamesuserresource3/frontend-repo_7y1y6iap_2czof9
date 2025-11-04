import React from 'react';
import { Globe, Bot, Brain, Server, TrendingUp } from 'lucide-react';

const skills = [
  {
    title: 'Programming Languages',
    items: ['Python', 'JavaScript', 'Go'],
  },
  {
    title: 'Backend Frameworks',
    items: ['Flask', 'ExpressJS'],
  },
  {
    title: 'Frontend Frameworks',
    items: ['ReactJS', 'Next.js', 'Bootstrap'],
  },
  {
    title: 'Bot Development',
    items: ['LINE', 'Telegram', 'WhatsApp automation'],
  },
  {
    title: 'API Integration',
    items: ['REST', 'JSON', 'Third-party APIs'],
  },
  {
    title: 'Deployment',
    items: ['Linux VPS', 'Nginx', 'Docker'],
  },
  {
    title: 'Database',
    items: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Web Tools',
    items: ['SEO', 'Automation', 'Scraping tools'],
  },
];

const services = [
  {
    icon: Globe,
    title: 'API Development',
    desc: 'Custom media APIs and automation endpoints built for scale.'
  },
  {
    icon: Bot,
    title: 'Bot Creation',
    desc: 'Telegram, LINE, and WhatsApp bots with robust flows.'
  },
  {
    icon: Brain,
    title: 'Digital Automation',
    desc: 'Smart tools that streamline social and business workflows.'
  },
  {
    icon: Server,
    title: 'Server & VPS Setup',
    desc: 'Secure deployments with Nginx load balancing and Docker.'
  },
  {
    icon: TrendingUp,
    title: 'SEO & Optimization',
    desc: 'Performance tuning for faster, smarter web experiences.'
  },
];

const SkillsServices = () => {
  return (
    <section id="skills" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/90" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Stack</h2>
            <p className="mt-2 max-w-2xl text-gray-300">
              Tools and technologies I use to design, build, and scale digital solutions.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full border border-cyan-500/30 bg-white/5 px-3 py-1 text-xs text-cyan-200">
            Updated • 2025
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(0,0,0,0.2)] backdrop-blur">
              <h3 className="text-lg font-semibold text-cyan-300">{group.title}</h3>
              <ul className="mt-3 space-y-1 text-gray-200">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-gray-300">
            From APIs and bots to servers and optimization — I deliver end‑to‑end solutions.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.03] p-6 transition hover:border-cyan-500/40">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-cyan-500/30 bg-black/60 p-3 text-cyan-300">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-300">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsServices;
