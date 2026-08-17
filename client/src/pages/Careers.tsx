/*
 * Vista Spaces Careers Page — Verdant Modernism
 */
import { motion } from "framer-motion";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { CAREERS_POSITIONS, COMPANY } from "@/lib/siteData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] as any } }),
};

export default function Careers() {
  const { formType, openForm, closeForm, isOpen } = useLeadForm();

  return (
    <div>
      <PageHero
        title="Careers"
        subtitle="Join a team that is building the future of sustainable urban development. We offer rewarding careers for passionate professionals."
        bgImage="/images/vj-commercial.webp"
      />

      {/* Intro */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <SectionHeading
            eyebrow="Join Our Team"
            title="Build Your Career with Vista Spaces"
            subtitle="At Vista Spaces, we believe that great projects start with great people. We are always looking for talented professionals who share our passion for sustainable development and architectural excellence."
          />
          <p className="mt-6 text-base text-charcoal-600 leading-relaxed font-body">
            We offer a dynamic work environment where innovation, collaboration, and professional growth are at the core. Whether you are an experienced architect, a skilled engineer, or a rising talent in real estate — there is a place for you at Vista Spaces.
          </p>
          <div className="mt-8 grid grid-cols-3 gap-6">
            {[
              { label: "Growth", desc: "Career advancement" },
              { label: "Impact", desc: "Meaningful projects" },
              { label: "Culture", desc: "Collaborative team" },
            ].map((item) => (
              <div key={item.label} className="text-center p-4 rounded-lg bg-beige-50">
                <p className="font-display text-lg font-bold text-emerald-700">{item.label}</p>
                <p className="text-xs text-charcoal-500 mt-1 font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-28 bg-beige-50">
        <div className="container">
          <SectionHeading
            eyebrow="Open Positions"
            title="Current Opportunities"
            subtitle="Explore our open positions and find the role that matches your skills and aspirations."
            center
          />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAREERS_POSITIONS.map((position, i) => (
              <motion.div
                key={position.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-6 rounded-lg bg-white shadow-sm border border-emerald-100/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <span className="text-xs font-semibold text-gold-600 uppercase tracking-wider font-body">{position.department}</span>
                <h3 className="font-display text-lg font-semibold text-charcoal-900 mt-2">{position.title}</h3>
                <div className="flex items-center gap-4 mt-4 text-sm text-charcoal-500 font-body">
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {position.location}</span>
                  <span className="flex items-center gap-1"><Briefcase className="w-3.5 h-3.5" /> {position.type}</span>
                </div>
                <button onClick={() => openForm("callback")} className="mt-4 flex items-center gap-1 text-emerald-700 text-sm font-semibold font-body">
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-emerald-800">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Don't See Your Role?</h2>
          <p className="text-white/70 mt-3 font-body max-w-lg mx-auto">Send us your resume and we'll keep you in mind for future opportunities.</p>
          <button
            onClick={() => openForm("callback")}
            className="mt-6 px-7 py-3.5 bg-gold-500 text-charcoal-900 font-semibold text-sm rounded-md hover:bg-gold-400 transition-colors"
          >
            Submit Your Resume
          </button>
        </div>
      </section>

      <LeadForm type={formType as any} open={isOpen} onOpenChange={closeForm} />
    </div>
  );
}
