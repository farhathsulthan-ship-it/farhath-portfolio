import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="text-center max-w-2xl mx-auto mb-14"
    >
      {eyebrow && (
        <p className="text-xs tracking-[0.4em] uppercase text-gold mb-3">{eyebrow}</p>
      )}
      <h2 className="section-heading text-gold-gradient">{title}</h2>
      <div className="mt-4 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
      {subtitle && <p className="mt-4 text-text-secondary">{subtitle}</p>}
    </motion.div>
  );
}
