import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { internship } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-28 relative">
      <div className="mx-auto max-w-4xl px-5 lg:px-8">
        <SectionHeading eyebrow="Where I've Worked" title="Experience" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative pl-8"
        >
          <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-bronze to-transparent" />
          <div className="relative">
            <span className="absolute -left-[26px] top-3 h-4 w-4 rounded-full bg-gold shadow-[0_0_20px_rgba(200,155,60,0.7)] ring-4 ring-bg-deep" />
            <div className="glass rounded-[25px] p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 grid place-items-center rounded-xl bg-gold/10 border border-gold/30 text-gold">
                      <FaBriefcase />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-cream">{internship.role}</h3>
                      <p className="text-text-secondary text-sm">{internship.company}</p>
                    </div>
                  </div>
                </div>
                <span className="px-4 py-1.5 rounded-full text-xs tracking-[0.2em] uppercase border border-gold/40 text-gold bg-gold/5">
                  {internship.period}
                </span>
              </div>
              <ul className="mt-6 space-y-3">
                {internship.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
