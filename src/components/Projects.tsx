import { useRef, useState } from "react";
import { motion } from "framer-motion";
import{ FaStar } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { projects } from "@/lib/data";

function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ x: 0, y: 0 });
  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        setT({
          x: ((e.clientX - r.left) / r.width - 0.5) * 8,
          y: ((e.clientY - r.top) / r.height - 0.5) * -8,
        });
      }}
      onMouseLeave={() => setT({ x: 0, y: 0 })}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <div
        style={{
          transform: `rotateY(${t.x}deg) rotateX(${t.y}deg)`,
          transformStyle: "preserve-3d",
        }}
        className="h-full transition-transform duration-200"
      >
        {children}
      </div>
    </div>
  );
}

export function Projects() {
  const featured = projects.find((p) => p.featured)!;
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-28 relative">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Projects"
          subtitle="A collection of AI, ML and data-driven experiments — from healthcare assistants to sustainable prediction models."
        />

        {/* Featured */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <TiltCard>
            <div className="glass rounded-[25px] overflow-hidden grid lg:grid-cols-[1.1fr_1fr] gap-0 group">
              {/* Featured image */}
              <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-full overflow-hidden">
                {featured.image ? (
                  <motion.img
                    src={featured.image}
                    alt={featured.title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                ) : (
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle at 30% 30%, #C89B3C33, transparent 60%), radial-gradient(circle at 70% 70%, #A9714233, transparent 60%), linear-gradient(135deg, #24180F, #1A120B)",
                    }}
                  />
                )}
                {/* Gradient overlay so text stays readable and the image blends with the glass card */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(20,14,9,0.55) 0%, rgba(20,14,9,0.05) 45%), linear-gradient(to right, transparent 60%, rgba(20,14,9,0.35) 100%)",
                  }}
                />
                <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-strong text-xs text-gold">
                  <FaStar size={10} /> Featured
                </div>
                <div className="absolute bottom-5 left-5 lg:hidden">
                  <p className="font-display text-2xl text-cream tracking-wide">{featured.title}</p>
                </div>
              </div>

              <div className="p-8 lg:p-10">
                <h3 className="font-display text-3xl text-cream">{featured.title}</h3>
                <p className="mt-3 text-text-secondary leading-relaxed">{featured.description}</p>
                <ul className="mt-5 space-y-2">
                  {featured.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-text-secondary">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {featured.tech.map((t, i) => (
                    <motion.span
                      key={t}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="px-3 py-1 text-xs rounded-full border border-gold/25 text-cream bg-gold/5"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Others */}
        <div className="grid md:grid-cols-2 gap-6">
          {others.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
            >
              <TiltCard>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 220, damping: 20 }}
                  className="glass rounded-[25px] p-7 h-full flex flex-col hover:shadow-[0_25px_60px_-20px_rgba(200,155,60,0.5)] transition-shadow duration-500"
                >
                  {/* Project image, consistent 16:9 crop regardless of source resolution */}
                  <div className="aspect-video rounded-2xl mb-5 relative overflow-hidden">
                    {p.image ? (
                      <motion.img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 w-full h-full object-cover object-center"
                        whileHover={{ scale: 1.06 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                      />
                    ) : (
                      <>
                        <div
                          className="absolute inset-0"
                          style={{
                            background:
                              "linear-gradient(135deg, #2D1F14, #1A120B), radial-gradient(circle at top left, #C89B3C33, transparent)",
                          }}
                        />
                        <div
                          className="absolute inset-0 opacity-25"
                          style={{
                            backgroundImage:
                              "linear-gradient(rgba(200,155,60,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(200,155,60,0.4) 1px, transparent 1px)",
                            backgroundSize: "24px 24px",
                          }}
                        />
                        <div className="absolute inset-0 grid place-items-center">
                          <span className="font-display text-4xl text-gold-gradient">
                            {p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
                          </span>
                        </div>
                      </>
                    )}
                    {/* subtle bottom fade so a light image doesn't clash with the card */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: "linear-gradient(to top, rgba(20,14,9,0.35) 0%, transparent 40%)",
                      }}
                    />
                  </div>

                  <h3 className="font-display text-xl text-cream">{p.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary flex-1">{p.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="px-2.5 py-1 text-[11px] rounded-full border border-gold/25 text-cream bg-gold/5">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}