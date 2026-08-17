/* Vista Jakkur — Architectural Precision: measured editorial headings with brass rules. */
import { motion } from "framer-motion";

interface SectionHeadingProps { eyebrow?: string; title: string; subtitle?: string; center?: boolean; className?: string; }

export default function SectionHeading({ eyebrow, title, subtitle, center = false, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${center ? "text-center" : ""} ${className}`}>
      {eyebrow && <motion.span initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="blueprint-label">{eyebrow}</motion.span>}
      <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.52, delay: 0.06 }} className={`mt-4 font-display text-5xl font-medium leading-[.9] tracking-[-.02em] text-graphite-900 md:text-6xl ${center ? "section-heading-center" : "section-heading"}`}>
        {title}
      </motion.h2>
      {subtitle && <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.48, delay: 0.12 }} className={`mt-5 max-w-2xl text-sm leading-7 text-graphite-600 md:text-base ${center ? "mx-auto" : ""}`}>{subtitle}</motion.p>}
    </div>
  );
}
