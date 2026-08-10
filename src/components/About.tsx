import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { education, personal, stats } from "@/lib/data";
import { FaGraduationCap, FaBullseye } from "react-icons/fa";

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const dur = 1400;
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
}

export function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Who I Am" title="About Me" />
        <div className="grid lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-[25px] p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-11 w-11 grid place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold">
                <FaBullseye />
              </div>
              <h3 className="font-display text-2xl text-cream">Career Objective</h3>
            </div>
            <p className="text-text-secondary leading-relaxed">{personal.summary}</p>
            <p className="mt-4 text-text-secondary leading-relaxed">
              I focus on turning complex data into intuitive, intelligent products — combining
              rigorous engineering with a designer's eye for craft. My work spans machine learning,
              neural networks, and modern web development.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-gold/20 bg-bg-soft/40 p-4 text-center">
                  <div className="font-display text-3xl text-gold-gradient">
                    <Counter to={s.value} />+
                  </div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-text-secondary mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass rounded-[25px] p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-11 w-11 grid place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold">
                <FaGraduationCap />
              </div>
              <h3 className="font-display text-2xl text-cream">Education Timeline</h3>
            </div>
            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-bronze to-transparent" />
              {education.map((e, i) => (
                <motion.div
                  key={e.degree}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative mb-7 last:mb-0"
                >
                  <span className="absolute -left-[19px] top-1.5 h-3 w-3 rounded-full bg-gold shadow-[0_0_15px_rgba(200,155,60,0.7)]" />
                  <p className="text-xs tracking-[0.25em] uppercase text-gold">{e.period}</p>
                  <h4 className="font-display text-lg text-cream mt-1">{e.degree}</h4>
                  <p className="text-sm text-text-secondary mt-0.5">{e.school}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
