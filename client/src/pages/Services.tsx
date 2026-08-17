/*
 * Vista Spaces Services Page — Architectural Precision
 * Detailed service cards for real estate and digital promotion capabilities
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Home as HomeIcon,
  Building2,
  TrendingUp,
  Briefcase,
  Leaf,
  Landmark,
  Youtube,
  CheckCircle2,
  ArrowRight,
  Star,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { SERVICES, QUALITY_SAFETY, INDUSTRIES } from "@/lib/siteData";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Home: HomeIcon,
  Building2,
  TrendingUp,
  Briefcase,
  Leaf,
  Landmark,
  Youtube,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] as any } }),
};

export default function Services() {
  const { formType, openForm, closeForm, isOpen } = useLeadForm();

  return (
    <div>
      <PageHero
        title="Exceptional Spaces, Enduring Value"
        subtitle="Comprehensive real estate solutions spanning residential, commercial, investment, sustainable development, and digital video promotion."
        bgImage="/images/vj-commercial.webp"
      />

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container space-y-16">
          {SERVICES.map((service, i) => {
            const Icon = SERVICE_ICONS[service.icon] || Building2;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                <div className={!isEven ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-emerald-700" />
                    </div>
                    <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 font-body">
                      Service 0{i + 1}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-charcoal-900 section-heading">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-base text-charcoal-600 leading-relaxed font-body">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-sm text-charcoal-700 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                  {service.id === "digital-marketing" && (
                    <button
                      type="button"
                      onClick={() => openForm("marketing")}
                      className="mt-7 inline-flex items-center gap-2 border-b border-gold-500 pb-2 text-xs font-bold tracking-[0.12em] text-emerald-800 transition-colors hover:border-emerald-700 hover:text-emerald-700"
                    >
                      PLAN A VIDEO PROMOTION <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <div className={`h-[300px] rounded-lg overflow-hidden shadow-xl ${!isEven ? "lg:order-1" : ""}`}>
                  {service.id === "digital-marketing" ? (
                    <div className="relative flex h-full overflow-hidden bg-graphite-950 p-7 text-white md:p-10">
                      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(to_right,rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:40px_40px]" />
                      <div className="absolute bottom-0 right-0 h-40 w-40 translate-x-10 translate-y-10 rounded-full border border-brass-400/60" />
                      <div className="relative flex max-w-xs flex-col justify-between">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-brass-400 bg-white/10 text-brass-400">
                          <Youtube className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <div>
                          <p className="text-[0.65rem] font-extrabold tracking-[0.18em] text-brass-400">VISIBILITY / VIDEO / VALUE</p>
                          <p className="mt-3 font-display text-3xl leading-tight">A sharper audience for every story.</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={[
                        "/images/vj-residential.webp",
                        "/images/vj-commercial.webp",
                        "/images/vj-hero-architecture.webp",
                        "/images/vj-commercial.webp",
                        "/images/vj-community.webp",
                        "/images/vj-commercial.webp",
                      ][i]}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Quality & Safety */}
      <section className="py-20 md:py-28 bg-beige-50 relative">
        {/* Botanical background motif */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg viewBox="0 0 1440 600" fill="none" className="w-full h-full text-emerald-900">
            <path d="M0,300 C200,250 400,350 600,280 C800,210 1000,320 1200,270 C1300,245 1400,290 1440,260" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M0,340 C200,290 400,390 600,320 C800,250 1000,360 1200,310 C1300,285 1400,330 1440,300" stroke="currentColor" strokeWidth="1" fill="none"/>
          </svg>
        </div>
        <div className="container relative">
          <SectionHeading
            eyebrow="Standards"
            title="Engineering Excellence & Safety"
            subtitle="We maintain the highest standards of construction quality and site safety across every project — building not just structures, but trust."
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
                className="p-6 rounded-lg bg-gradient-to-br from-emerald-50/80 to-white border border-emerald-100/60 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-700/10 flex items-center justify-center mb-4">
                  <Star className="w-5 h-5 text-emerald-700" />
                </div>
                <h4 className="font-display text-base font-semibold text-charcoal-900">{item.title}</h4>
                <p className="text-sm text-charcoal-500 mt-2 font-body leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Sectors"
            title="Industries We Serve"
            center
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {INDUSTRIES.map((industry, i) => (
              <motion.span
                key={industry}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="px-5 py-2.5 text-sm font-medium font-body text-charcoal-700 bg-beige-50 rounded-full border border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50 transition-colors"
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-emerald-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
          <svg viewBox="0 0 1440 400" fill="none" className="w-full h-full text-white">
            <path d="M0,200 C360,160 720,240 1080,180 C1260,150 1380,190 1440,170" stroke="currentColor" strokeWidth="2" fill="none"/>
            <path d="M0,230 C360,190 720,270 1080,210 C1260,180 1380,220 1440,200" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
        </div>
        <div className="container relative text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Discuss Your Vision With Us</h2>
          <p className="text-white/70 mt-3 font-body max-w-lg mx-auto">Our team is ready to discuss your requirements and craft tailored solutions for your next project.</p>
          <button
            onClick={() => openForm("inquiry")}
            className="mt-6 px-7 py-3.5 bg-gold-500 text-charcoal-900 font-semibold text-sm rounded-md hover:bg-gold-400 transition-colors"
          >
            Request a Consultation
          </button>
        </div>
      </section>

      <LeadForm type={formType} open={isOpen} onOpenChange={closeForm} />
    </div>
  );
}
