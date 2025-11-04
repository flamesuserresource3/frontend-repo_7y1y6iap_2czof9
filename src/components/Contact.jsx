import React from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-cyan-900/10" />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s build your next digital solution.</h2>
          <p className="mt-2 max-w-2xl text-gray-300">Have a project in mind? I can help with APIs, bots, automation, and scalable infrastructure.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <form
            action="https://formspree.io/f/mgegeovo"
            method="POST"
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm text-gray-300">Name</label>
                <input name="name" required className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white outline-none ring-cyan-400/30 focus:ring" />
              </div>
              <div>
                <label className="mb-1 block text-sm text-gray-300">Email</label>
                <input type="email" name="email" required className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white outline-none ring-cyan-400/30 focus:ring" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-sm text-gray-300">Message</label>
              <textarea name="message" rows="5" required className="w-full rounded-lg border border-white/10 bg-black/60 px-3 py-2 text-white outline-none ring-cyan-400/30 focus:ring" />
            </div>
            <button type="submit" className="mt-5 rounded-lg bg-cyan-400/90 px-5 py-3 font-semibold text-black transition hover:bg-cyan-300">
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="mt-2 text-gray-300">Prefer chat? Reach out directly.</p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-green-500/40 bg-black/60 px-4 py-2 text-green-300 hover:bg-black/80"
              >
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-black/60 px-4 py-2 text-gray-200 hover:bg-black/80"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-blue-500/40 bg-black/60 px-4 py-2 text-blue-300 hover:bg-black/80"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white/10 bg-black/50 p-4">
                <div className="text-sm text-gray-400">Location</div>
                <div className="font-medium">Indonesia</div>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/50 p-4">
                <div className="text-sm text-gray-400">Languages</div>
                <div className="font-medium">Bahasa Indonesia, English, Melayu</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Asking Ang — Execross
        </div>
      </div>
    </section>
  );
};

export default Contact;
