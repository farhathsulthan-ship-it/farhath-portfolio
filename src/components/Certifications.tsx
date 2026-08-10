import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaTimes } from "react-icons/fa";
import { SectionHeading } from "./SectionHeading";
import { certifications } from "@/lib/data";

export function Certifications() {
  const [selected, setSelected] = useState<any>(null);

  // Close popup using ESC key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <section id="certifications" className="py-28 relative">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Continuous Learning"
            title="Certifications"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.6,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="glass rounded-[25px] overflow-hidden group cursor-pointer hover:shadow-[0_25px_60px_-20px_rgba(200,155,60,0.5)] transition-all duration-500"
                onClick={() => setSelected(c)}
              >
                {/* Certificate Image */}

                <div className="h-44 overflow-hidden relative">
                  <motion.img
                    src={c.image}
                    alt={c.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center">
                    <span className="text-xs text-gold tracking-widest uppercase">
                      Certificate
                    </span>

                    <span className="text-xs text-white">
                      {c.date}
                    </span>
                  </div>
                </div>

                {/* Content */}

                <div className="p-5">
                  <h3 className="font-display text-lg text-cream leading-snug">
                    {c.name}
                  </h3>

                  <p className="text-sm text-text-secondary mt-2">
                    {c.provider}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-gold text-sm">
                    View Certificate

                    <FaExternalLinkAlt size={12} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popup */}

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{
                scale: 0.8,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}

              <button
                onClick={() => setSelected(null)}
                className="absolute -top-14 right-0 text-white hover:text-gold text-2xl"
              >
                <FaTimes />
              </button>

              <motion.img
                src={selected.image}
                alt={selected.name}
                className="w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl border border-gold/30"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="text-center mt-5">
                <h2 className="text-2xl font-display text-gold">
                  {selected.name}
                </h2>

                <p className="text-gray-300 mt-2">
                  {selected.provider}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}