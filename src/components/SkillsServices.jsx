import React from 'react';
import { Globe, Bot, Brain, Server, TrendingUp } from 'lucide-react';

const skills = [
  { title: 'Programming Languages', items: ['Python', 'JavaScript', 'Go'] },
  { title: 'Backend Frameworks', items: ['Flask', 'ExpressJS'] },
  { title: 'Frontend Frameworks', items: ['ReactJS', 'Next.js', 'Bootstrap'] },
  { title: 'Bot Development', items: ['LINE', 'Telegram', 'WhatsApp automation'] },
  { title: 'API Integration', items: ['REST', 'JSON', 'Third-party APIs'] },
  { title: 'Deployment', items: ['Linux VPS', 'Nginx', 'Docker'] },
  { title: 'Database', items: ['MySQL', 'MongoDB'] },
  { title: 'Web Tools', items: ['SEO', 'Automation', 'Scraping tools'] },
];

const services = [
  { icon: Globe, title: 'API Development', desc: 'Custom media APIs and automation endpoints built for scale.' },
  { icon: Bot, title: 'Bot Creation', desc: 'Telegram, LINE, and WhatsApp bots with robust flows.' },
  { icon: Brain, title: 'Digital Automation', desc: 'Smart tools that streamline social and business workflows.' },
  { icon: Server, title: 'Server & VPS Setup', desc: 'Secure deployments with Nginx load balancing and Docker.' },
  { icon: TrendingUp, title: 'SEO & Optimization', desc: 'Performance tuning for faster, smarter web experiences.' },
];

const Card = ({ children, className = '' }) => (
  <div className={`group relative overflow-hidden rounded-2xl border p-5 backdrop-blur transition ${
    className
  } border-gray-200/60 bg-white/60 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] hover:shadow-[0_0_30px_rgba(234,179,8,0.15)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]`}>
    <div className="pointer-events-none absolute inset-0 opacity-50 [background:radial-gradient(600px_circle_at_var(--x,50%)_var(--y,50%),rgba(250,204,21,0.12),transparent_40%)]" />
    {children}
  </div>
);

const SkillsServices = () => {
  return (
    <section id="skills" className="relative w-full bg-white py-20 text-gray-900 dark:bg-black dark:text-white">
      {/* Section background: subtle radial + grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-20 dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Stack</h2>
            <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
              Tools and technologies I use to design, build, and scale digital solutions.
            </p>
          </div>
          <div className="inline-flex items-center rounded-full border border-amber-500/30 bg-white/70 px-3 py-1 text-xs text-amber-700 dark:border-yellow-400/30 dark:bg-white/5 dark:text-yellow-200">
            Updated • 2025
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {skills.map((group) => (
            <Card key={group.title}>
              <h3 className="text-lg font-semibold text-amber-700 dark:text-yellow-300">{group.title}</h3>
              <ul className="mt-3 space-y-1 text-gray-700 dark:text-gray-200">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-500 dark:bg-yellow-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Services</h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">
            From APIs and bots to servers and optimization — I deliver end‑to‑end solutions.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="p-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg border border-amber-500/30 bg-white/70 p-3 text-amber-700 shadow-sm dark:border-yellow-400/30 dark:bg-black/60 dark:text-yellow-200">
                    <Icon size={22} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{desc}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsServices;
