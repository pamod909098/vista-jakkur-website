/*
 * Vista Spaces About Page — Verdant Modernism
 * Company profile, vision & mission, why choose us, leadership
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Target,
  Eye,
  Award,
  ShieldCheck,
  Users,
  Lightbulb,
  Clock,
  Eye as EyeIcon,
  TrendingUp,
  Leaf,
  Building2,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { COMPANY, VISION_MISSION, WHY_CHOOSE_US, STATS } from "@/lib/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] as any } }),
};

const LEADERSHIP = [
  { name: "Managing Director", role: "Strategic Leadership & Vision", initials: "MD" },
  { name: "Director — Operations", role: "Project Execution & Delivery", initials: "DO" },
  { name: "Director — Finance", role: "Financial Strategy & Growth", initials: "DF" },
  { name: "Head — Design", role: "Architectural Innovation", initials: "HD" },
];

export default function About() {
  const { formType, openForm, closeForm, isOpen } = useLeadForm();

  return (
    <div>
      <PageHero
        title="Crafting Spaces That Define Communities"
        subtitle="Building exceptional communities through innovation, quality, and sustainable development."
        bgImage="/images/vj-residential.webp"
      />

      {/* Company Profile */}
      <section id="company-profile" className="py-20 md:py-28 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/vj-hero-architecture.webp"
                alt="Vista Spaces development"
                className="rounded-lg shadow-2xl shadow-emerald-900/10 w-full h-[420px] object-cover"
                loading="lazy"
              />
            </motion.div>
            <div>
              <SectionHeading
                eyebrow="Company Profile"
                title="Vista Spaces Jakkur Residency Private Limited"
              />
              <p className="mt-6 text-base text-charcoal-600 leading-relaxed font-body">
                Vista Spaces Jakkur Residency Private Limited is a modern real estate development company dedicated to creating exceptional residential, commercial, and mixed-use developments through innovative planning, quality construction, and sustainable design.
              </p>
              <p className="mt-4 text-base text-charcoal-600 leading-relaxed font-body">
                The company specializes in developing thoughtfully planned communities, premium residential projects, commercial spaces, investment opportunities, and future-ready urban infrastructure. Every project is designed with a focus on quality, customer satisfaction, environmental responsibility, and long-term value creation.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="p-4 rounded-lg bg-beige-50">
                  <p className="text-xs text-charcoal-400 font-body">CIN</p>
                  <p className="text-sm font-semibold text-charcoal-900 font-body mt-1">{COMPANY.cin}</p>
                </div>
                <div className="p-4 rounded-lg bg-beige-50">
                  <p className="text-xs text-charcoal-400 font-body">Established</p>
                  <p className="text-sm font-semibold text-charcoal-900 font-body mt-1">{COMPANY.founded}</p>
                </div>
                <div className="p-4 rounded-lg bg-beige-50">
                  <p className="text-xs text-charcoal-400 font-body">Status</p>
                  <p className="text-sm font-semibold text-emerald-700 font-body mt-1">{COMPANY.status}</p>
                </div>
                <div className="p-4 rounded-lg bg-beige-50">
                  <p className="text-xs text-charcoal-400 font-body">Location</p>
                  <p className="text-sm font-semibold text-charcoal-900 font-body mt-1">{COMPANY.address.city}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-14 bg-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1440 200" fill="none" className="w-full h-full text-white">
            <path d="M0,100 Q360,60 720,100 Q1080,140 1440,100" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="container relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <span className="font-display text-2xl md:text-3xl font-bold text-white">{stat.value}</span>
                <p className="text-xs text-emerald-200 mt-1 font-body">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision-mission" className="py-20 md:py-28 bg-beige-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-lg bg-white shadow-lg border border-emerald-100/50"
            >
              <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-4">Our Vision</h3>
              <p className="text-base text-charcoal-600 leading-relaxed font-body">
                {VISION_MISSION.vision}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="p-8 rounded-lg bg-white shadow-lg border border-emerald-100/50"
            >
              <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-emerald-700" />
              </div>
              <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-4">Our Mission</h3>
              <ul className="space-y-3">
                {VISION_MISSION.missionPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-sm text-charcoal-600 font-body">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-20 md:py-28 bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="A Partner You Can Trust"
            subtitle="With decades of combined experience and a commitment to excellence, Vista Spaces is the development partner that delivers on every promise."
            center
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-lg bg-beige-50 hover:bg-emerald-50 transition-colors duration-300 border border-transparent hover:border-emerald-200"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-700 flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold font-body">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h4 className="font-display text-base font-semibold text-charcoal-900">{item.title}</h4>
                <p className="text-sm text-charcoal-500 mt-2 font-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="py-20 md:py-28 bg-charcoal-900">
        <div className="container">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-gold-400 font-body">Our Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mt-3 section-heading-center">
              Leadership Team
            </h2>
            <p className="mt-4 text-base text-white/60 max-w-xl mx-auto font-body">
              Our experienced leadership team brings decades of combined expertise in real estate development, architecture, finance, and sustainable design.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {LEADERSHIP.map((leader, i) => (
              <motion.div
                key={leader.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center p-6 rounded-lg bg-white/5 border border-white/10"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-700 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-display text-xl font-bold">{leader.initials}</span>
                </div>
                <h4 className="font-display text-base font-semibold text-white">{leader.name}</h4>
                <p className="text-sm text-white/50 mt-1 font-body">{leader.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-800">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Ready to Explore Our Projects?</h2>
          <p className="text-white/70 mt-3 font-body max-w-lg mx-auto">Schedule a site visit or speak with our team to learn more about investment opportunities.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openForm("site-visit")}
              className="px-7 py-3.5 bg-gold-500 text-charcoal-900 font-semibold text-sm rounded-md hover:bg-gold-400 transition-colors"
            >
              Schedule a Site Visit
            </button>
            <Link
              href="/contact"
              className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-white/20 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <LeadForm type={formType as any} open={isOpen} onOpenChange={closeForm} />
    </div>
  );
}
