/*
 * Vista Jakkur — Architectural Precision
 * Interior pages use an editorial image panel, measurement grid, and cobalt wayfinding rule.
 */
import { motion } from "framer-motion";

interface PageHeroProps { title: string; subtitle?: string; bgImage?: string; }

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-graphite-950 pt-[76px] lg:pt-[88px]">
      <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{ backgroundImage: bgImage ? `url(${bgImage})` : undefined }} />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,24,.96)_0%,rgba(17,19,24,.74)_43%,rgba(17,19,24,.27)_100%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="absolute right-[12%] top-0 h-full w-px bg-brass-400/75" />
      <div className="relative container grid min-h-[360px] items-end py-16 md:min-h-[440px] md:py-20">
        <div className="max-w-3xl border-l-2 border-brass-400 pl-5 md:pl-7">
          <span className="mb-5 block text-[0.66rem] font-extrabold tracking-[0.22em] text-cobalt-300">VISTA JAKKUR / BENGALURU</span>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease: [0.23, 1, 0.32, 1] }} className="font-display text-5xl font-semibold leading-[.88] text-white md:text-7xl lg:text-8xl">
            {title}
          </motion.h1>
          {subtitle && <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="mt-6 max-w-xl text-sm leading-relaxed text-white/72 md:text-base">{subtitle}</motion.p>}
        </div>
      </div>
    </section>
  );
}
