/*
 * Vista Spaces Sustainability Page — Verdant Modernism
 * Sustainability pillars, quality & safety, and commitment
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Leaf,
  Droplets,
  Sun,
  Zap,
  Recycle,
  Trees,
  Shield,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import { SUSTAINABILITY_PILLARS, QUALITY_SAFETY } from "@/lib/siteData";

const PILLAR_ICONS = [Leaf, Droplets, Sun, Zap, Droplets, Recycle, Trees];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] as any } }),
};

export default function Sustainability() {
  return (
    <div>
      <PageHero
        title="Building With the Earth, Not Against It"
        subtitle="Every Vista Spaces project integrates environmentally responsible practices that protect our planet while enhancing quality of life."
        bgImage="/images/vj-community.webp"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              eyebrow="Our Commitment"
              title="Sustainability at Our Core"
              subtitle="Environmental responsibility is not an afterthought — it is a fundamental principle that guides every decision we make, from site selection to project handover."
              center
            />
            <p className="mt-8 text-base text-charcoal-600 leading-relaxed font-body">
              At Vista Spaces, we believe that premium development and environmental stewardship are not competing priorities. They are complementary goals that create superior, future-ready developments. Our sustainability framework encompasses energy efficiency, water conservation, waste management, green spaces, and community well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="py-20 md:py-28 bg-beige-50 relative overflow-hidden">
        {/* Contour line motif */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1440 600" fill="none" className="w-full h-full text-emerald-900">
            <path d="M0,100 C240,60 480,140 720,100 C960,60 1200,120 1440,80" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,140 C240,100 480,180 720,140 C960,100 1200,160 1440,120" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M0,180 C240,140 480,220 720,180 C960,140 1200,200 1440,160" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="container relative">
          <SectionHeading
            eyebrow="Our Approach"
            title="Seven Pillars of Sustainable Living"
            subtitle="Each pillar guides our commitment to creating developments that nurture both people and planet."
            center
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUSTAINABILITY_PILLARS.map((pillar, i) => {
              const Icon = PILLAR_ICONS[i] || Leaf;
              return (
                <motion.div
                  key={pillar.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-7 rounded-lg bg-gradient-to-br from-emerald-50/60 to-white/90 backdrop-blur-sm border border-emerald-100/60 shadow-sm hover:shadow-lg hover:border-emerald-200 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-emerald-700/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <h3 className="font-display text-base font-semibold text-charcoal-900">{pillar.title}</h3>
                  <p className="text-sm text-charcoal-500 mt-2 font-body leading-relaxed">{pillar.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Standards"
            title="Engineering Excellence & Safety"
            subtitle="We maintain the highest standards of construction quality and site safety across every project, ensuring durable and safe developments."
            center
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {QUALITY_SAFETY.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex gap-4 p-6 rounded-lg bg-gradient-to-br from-beige-50 to-white border border-emerald-100/50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-700/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h4 className="font-display text-base font-semibold text-charcoal-900">{item.title}</h4>
                  <p className="text-sm text-charcoal-500 mt-1 font-body leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-emerald-800">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "LEED Certified", desc: "Leadership in Energy & Environmental Design" },
              { title: "IGBC Certified", desc: "Indian Green Building Council Standards" },
              { title: "GRIHA Certified", desc: "Green Rating for Integrated Habitat Assessment" },
            ].map((cert, i) => (
              <motion.div
                key={cert.title}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{cert.title}</h3>
                <p className="text-sm text-white/60 mt-1 font-body">{cert.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-beige-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <svg viewBox="0 0 1440 400" fill="none" className="w-full h-full text-emerald-900">
            <path d="M0,200 Q360,160 720,200 Q1080,240 1440,200" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,240 Q360,200 720,240 Q1080,280 1440,240" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="container text-center relative">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-900">Stewards of a Greener Tomorrow</h2>
          <p className="text-charcoal-500 mt-3 font-body max-w-lg mx-auto">Learn more about our sustainability initiatives or read our full policy.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="/sustainability-policy"
              className="px-7 py-3.5 bg-emerald-700 text-white font-semibold text-sm rounded-md hover:bg-emerald-800 transition-colors"
            >
              Read Sustainability Policy
            </Link>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white border border-emerald-200 text-emerald-700 font-semibold text-sm rounded-md hover:bg-emerald-50 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
