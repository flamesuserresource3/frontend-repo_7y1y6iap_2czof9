import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-white py-20 text-gray-900 dark:bg-black dark:text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="absolute inset-0 opacity-40 mix-blend-overlay [background-image:linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] [background-size:40px_40px] dark:opacity-20 dark:[background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build your next digital solution.</h2>
          <p className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300">Have a project in mind? I can help with APIs, bots, automation, and scalable infrastructure.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form
            action="https://formspree.io/f/mgegeovo"
            method="POST"
            className="rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">Name</label>
                <input name="name" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-amber-400/30 focus:ring dark:border-white/10 dark:bg-black/60 dark:text-white" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-amber-400/30 focus:ring dark:border-white/10 dark:bg-black/60 dark:text-white" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-gray-700 dark:text-gray-300">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 outline-none ring-amber-400/30 focus:ring dark:border-white/10 dark:bg-black/60 dark:text-white" />
            </div>
            <button type="submit" className="mt-5 rounded-lg bg-amber-500 px-5 py-3 font-semibold text-black transition hover:bg-amber-400 dark:bg-yellow-400 dark:hover:bg-yellow-300">
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-gray-200/60 bg-white/70 p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.04)] backdrop-blur dark:border-white/10 dark:bg-white/5">
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Prefer chat? Reach out directly.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500/40 bg-white/70 px-4 py-2 text-green-700 hover:bg-white dark:bg-black/60 dark:text-green-300 dark:hover:bg-black/80"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-50 dark:border-white/20 dark:bg-black/60 dark:text-gray-200 dark:hover:bg-black/80"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-white/70 px-4 py-2 text-blue-700 hover:bg-white dark:bg-black/60 dark:text-blue-300 dark:hover:bg-black/80"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-gray-200/60 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-black/50">
                <div className="text-sm text-gray-500 dark:text-gray-400">Location</div>
                <div className="font-medium">Indonesia</div>
              </div>
              <div className="rounded-xl border border-gray-200/60 bg-white/70 p-4 shadow-sm dark:border-white/10 dark:bg-black/50">
                <div className="text-sm text-gray-500 dark:text-gray-400">Languages</div>
                <div className="font-medium">Bahasa Indonesia, English, Melayu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-200/60 pt-6 text-center text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
          © {new Date().getFullYear()} Asking Ang — Execross
        </div>
      </div>
    </section>
  );
};

export default Contact;
