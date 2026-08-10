import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaDownload, FaHeart } from "react-icons/fa";
import { Logo } from "./Logo";
import { navLinks, personal } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative border-t border-gold/15 pt-16 pb-8 mt-16">
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{ background: "radial-gradient(ellipse at bottom, rgba(200,155,60,0.15), transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-3">
            <Logo size={44} />
            <span className="font-display text-lg tracking-[0.25em] text-cream">AFS</span>
          </div>
          <p className="mt-4 text-sm text-text-secondary max-w-xs leading-relaxed">
            {personal.name} — Artificial Intelligence & Data Science Engineer building intelligent, elegant software.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Quick Links</h4>
          <ul className="grid grid-cols-2 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-text-secondary hover:text-cream transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-4">Connect</h4>
          <div className="flex gap-3 mb-5">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
              className="h-10 w-10 grid place-items-center rounded-full border border-gold/30 text-cream hover:bg-gold hover:text-bg-deep transition-all">
              <FaLinkedin size={15} />
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub"
              className="h-10 w-10 grid place-items-center rounded-full border border-gold/30 text-cream hover:bg-gold hover:text-bg-deep transition-all">
              <FaGithub size={15} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email"
              className="h-10 w-10 grid place-items-center rounded-full border border-gold/30 text-cream hover:bg-gold hover:text-bg-deep transition-all">
              <FaEnvelope size={14} />
            </a>
          </div>
          <div className="space-y-1.5 text-sm text-text-secondary">
            <p className="flex items-center gap-2"><FaEnvelope className="text-gold" size={11} /> {personal.email}</p>
            <p className="flex items-center gap-2"><FaPhone className="text-gold" size={11} /> {personal.phone}</p>
          </div>
          <a href={personal.resume} download className="btn-outline-gold mt-5 !py-2 !px-4 text-xs">
            <FaDownload size={11} /> Resume
          </a>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 mt-12 pt-6 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-secondary">
        <p>© 2026 {personal.name} · Artificial Intelligence & Data Science Engineer</p>
        <p className="flex items-center gap-1.5">
          Crafted with <FaHeart className="text-gold" size={10} /> in Tamil Nadu
        </p>
      </div>
    </footer>
  );
}
