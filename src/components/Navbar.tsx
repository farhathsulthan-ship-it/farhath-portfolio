import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaLinkedin, FaGithub, FaDownload, FaBars, FaTimes } from "react-icons/fa";
import { Logo } from "./Logo";
import { navLinks, personal } from "@/lib/data";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? "glass-strong py-2.5 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.6)]" : "py-2"
        }`}
        style={{ maxWidth: scrolled ? "min(1180px, 94%)" : "min(1280px, 96%)" }}
      >
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <Logo size={40} />
          <span className="hidden sm:block font-display text-sm tracking-[0.3em] text-cream">AFS</span>
        </a>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm text-text-secondary hover:text-cream transition-colors group"
            >
              {l.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-gradient-to-r from-transparent via-gold to-transparent scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden sm:grid place-items-center h-10 w-10 rounded-full border border-gold/30 text-cream hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden sm:grid place-items-center h-10 w-10 rounded-full border border-gold/30 text-cream hover:text-gold hover:border-gold hover:bg-gold/10 transition-all"
          >
            <FaGithub size={16} />
          </a>
          <a
            href={personal.resume}
            download
            className="btn-gold btn-gold-hover hidden md:inline-flex text-xs !py-2.5 !px-5"
          >
            <FaDownload size={12} /> Resume
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden grid place-items-center h-10 w-10 rounded-full border border-gold/30 text-cream"
            aria-label="Menu"
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden mx-4 mt-3 glass-strong rounded-3xl p-4"
          >
            <div className="flex flex-col">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 rounded-xl text-text-secondary hover:text-cream hover:bg-gold/10 transition"
                >
                  {l.label}
                </a>
              ))}
              <a href={personal.resume} download className="btn-gold btn-gold-hover mt-2">
                <FaDownload size={12} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
