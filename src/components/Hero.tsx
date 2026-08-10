import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope, FaArrowRight } from "react-icons/fa";
import { personal, typingRoles } from "@/lib/data";
import myPhoto from "@/assets/myPhoto.jpg";

function useTyping(words: string[], speed = 80, pause = 1400) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = words[wi % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          const next = current.slice(0, text.length + 1);
          setText(next);
          if (next === current) setTimeout(() => setDel(true), pause);
        } else {
          const next = current.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setDel(false);
            setWi((i) => i + 1);
          }
        }
      },
      del ? speed / 2 : speed,
    );
    return () => clearTimeout(t);
  }, [text, del, wi, words, speed, pause]);

  return text;
}

export function Hero() {
  const typed = useTyping(typingRoles);
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left - r.width / 2) / r.width;
    const y = (e.clientY - r.top - r.height / 2) / r.height;
    setTilt({ x: x * 12, y: y * -12 });
  };

  return (
    <section
      id="home"
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-dvh flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-[520px] h-[520px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #C89B3C 0%, transparent 70%)" }} />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl"
          style={{ background: "radial-gradient(circle, #A97142 0%, transparent 70%)" }} />
        {/* Grid */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(200,155,60,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,0.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          }}
        />
        {/* Floating particles */}
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{
              width: 4 + (i % 4),
              height: 4 + (i % 4),
              left: `${(i * 53) % 100}%`,
              top: `${(i * 37) % 100}%`,
              background: i % 2 ? "#C89B3C" : "#F5E6C8",
              opacity: 0.4,
              filter: "blur(0.5px)",
            }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: 5 + (i % 5), repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 lg:px-8 w-full grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.25em] uppercase text-cream mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            Available for Opportunities
          </div>
          <p className="text-text-secondary text-sm tracking-[0.4em] uppercase mb-4">Hi, I'm</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-bold">
            <span className="text-gold-gradient">Ahamed Farhath</span>
            <br />
            <span className="text-cream">Sulthan</span>
          </h1>
          <p className="mt-5 font-display text-lg sm:text-xl text-cream/90 tracking-wider">
            {personal.role}
          </p>
          <div className="mt-4 h-8 flex items-center gap-2 text-gold">
            <span className="text-text-secondary text-base">›</span>
            <span className="font-mono text-base sm:text-lg text-gold-gradient">{typed}</span>
            <span className="w-[2px] h-5 bg-gold animate-pulse" />
          </div>
          <p className="mt-6 text-text-secondary text-base leading-relaxed max-w-xl">
            {personal.summary}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={personal.resume} download className="btn-gold btn-gold-hover">
              <FaDownload size={13} /> Download Resume
            </a>
            <a href="#projects" className="btn-outline-gold">
              View Projects <FaArrowRight size={12} />
            </a>
            <a href="#contact" className="btn-outline-gold">
              <FaEnvelope size={12} /> Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 lg:order-2 relative mx-auto"
          style={{ perspective: 1200 }}
        >
          <motion.div
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] transition-transform duration-200"
          >
            {/* rotating gold ring */}
            <div
              className="absolute inset-0 rounded-full animate-spin-slow"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, #C89B3C 60deg, #F5E6C8 120deg, transparent 180deg, #A97142 240deg, transparent 360deg)",
                padding: 2,
                mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
                WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              }}
            />
            {/* outer soft glow ring */}
            <div className="absolute inset-2 rounded-full animate-pulse-glow gold-ring" />
            {/* frame */}
            <div className="absolute inset-5 rounded-full overflow-hidden glass-strong">
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 30% 20%, rgba(245,230,200,0.15), transparent 50%), radial-gradient(circle at 70% 80%, rgba(200,155,60,0.2), transparent 60%)",
                }}
              />
              <img
                src={myPhoto}
                alt="Ahamed Farhath Sulthan"
                className="absolute inset-0 w-full h-full object-cover object-top animate-float"
                style={{ filter: "contrast(1.05) brightness(1.05)" }}
              />
            </div>
            {/* floating accents */}
            <motion.div
              className="absolute -top-3 -right-3 h-16 w-16 rounded-2xl glass grid place-items-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="font-display text-gold text-xl">AI</span>
            </motion.div>
            <motion.div
              className="absolute -bottom-2 -left-4 px-4 py-2 rounded-full glass text-xs text-cream tracking-widest"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ML • DATA • PYTHON
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
