import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { skills } from "@/lib/data";
import { FaCode, FaBrain, FaGlobe, FaTools } from "react-icons/fa";

const icons = [FaCode, FaBrain, FaGlobe, FaTools];

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="What I Work With" title="Skills & Expertise" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={s.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -6 }}
                className="group glass rounded-[25px] p-6 relative overflow-hidden transition-shadow duration-500 hover:shadow-[0_25px_60px_-20px_rgba(200,155,60,0.5)]"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 50% 0%, rgba(200,155,60,0.18), transparent 60%)",
                  }}
                />
                <div className="relative">
                  <div className="h-12 w-12 grid place-items-center rounded-2xl bg-gold/10 border border-gold/30 text-gold mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-display text-lg text-cream mb-4">{s.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span
                        key={it}
                        className="px-3 py-1 text-xs rounded-full bg-bg-soft/60 border border-gold/20 text-text-secondary hover:text-cream hover:border-gold/60 transition-colors"
                      >
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
