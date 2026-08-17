/*
 * Vista Spaces Projects Page — Verdant Modernism
 * Full project portfolio with filters, project details, and gallery
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import {
  MapPin,
  CheckCircle2,
  Leaf,
  Building2,
  Home as HomeIcon,
  Layers,
  Filter,
  X,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { PROJECTS } from "@/lib/siteData";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Residential: HomeIcon,
  Commercial: Building2,
  "Mixed-Use": Layers,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] as any } }),
};

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<string | null>(null);
  const { formType, openForm, closeForm, isOpen } = useLeadForm();

  const categories = ["All", "Residential", "Commercial", "Mixed-Use"];
  const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const ongoing = filtered.filter((p) => p.status === "Ongoing");
  const completed = filtered.filter((p) => p.status === "Completed");

  const selectedProject = PROJECTS.find((p) => p.id === expandedProject);

  return (
    <div>
      <PageHero
        title="Our Projects"
        subtitle="Explore our portfolio of premium developments across Bengaluru — from luxury residential townships to sustainable commercial towers."
        bgImage="/images/vj-hero-architecture.webp"
      />

      {/* Filters */}
      <section className="py-14 bg-white border-b border-emerald-100/50">
        <div className="container">
          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 text-charcoal-400" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 text-sm font-medium font-body rounded-full transition-colors ${
                  filter === cat
                    ? "bg-emerald-700 text-white"
                    : "bg-beige-50 text-charcoal-600 hover:bg-emerald-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards */}
      <section className="py-16 bg-white">
        <div className="container">
          {/* Ongoing */}
          {ongoing.length > 0 && (
            <div id="ongoing" className="mb-16">
              <h2 className="font-display text-2xl font-bold text-charcoal-900 mb-8 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block" />
                Ongoing Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ongoing.map((project, i) => (
                  <motion.div
                    key={project.id}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="group block">
                      <div className="relative overflow-hidden rounded-lg h-[260px] cursor-pointer" onClick={() => setExpandedProject(project.id)}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-emerald-600 text-white font-body">
                            {project.status}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="flex items-center gap-2 mb-1">
                            {(() => { const Icon = CATEGORY_ICONS[project.category]; return Icon ? <Icon className="w-4 h-4 text-emerald-400" /> : null; })()}
                            <span className="text-xs text-emerald-300 font-body">{project.type}</span>
                          </div>
                          <h3 className="font-display text-lg font-bold text-white">{project.name}</h3>
                          <p className="text-sm text-white/70 mt-1 font-body flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {project.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal-500 mt-3 font-body line-clamp-2">{project.overview}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Completed */}
          {completed.length > 0 && (
            <div id="completed">
              <h2 className="font-display text-2xl font-bold text-charcoal-900 mb-8 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-gold-500 inline-block" />
                Completed Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {completed.map((project, i) => (
                  <motion.div
                    key={project.id}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                  >
                    <div className="group block">
                      <div className="relative overflow-hidden rounded-lg h-[260px] cursor-pointer" onClick={() => setExpandedProject(project.id)}>
                        <img
                          src={project.image}
                          alt={project.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />
                        <div className="absolute top-4 left-4">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-gold-500 text-charcoal-900 font-body">
                            {project.status}
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <div className="flex items-center gap-2 mb-1">
                            {(() => { const Icon = CATEGORY_ICONS[project.category]; return Icon ? <Icon className="w-4 h-4 text-gold-400" /> : null; })()}
                            <span className="text-xs text-gold-300 font-body">{project.type}</span>
                          </div>
                          <h3 className="font-display text-lg font-bold text-white">{project.name}</h3>
                          <p className="text-sm text-white/70 mt-1 font-body flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" /> {project.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-charcoal-500 mt-3 font-body line-clamp-2">{project.overview}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="py-20 md:py-28 bg-beige-50">
        <div className="container">
          <SectionHeading
            eyebrow="Gallery"
            title="Project Gallery"
            subtitle="A visual journey through our developments — from architectural marvels to lush community spaces."
            center
          />
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
            {PROJECTS.map((project, i) => (
              <motion.div
                key={project.id}
                custom={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`overflow-hidden rounded-lg cursor-pointer group ${
                  i === 0 ? "col-span-2 row-span-2" : ""
                }`}
                onClick={() => setExpandedProject(project.id)}
              >
                <div className={`${i === 0 ? "h-[400px]" : "h-[190px]"} relative`}>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-charcoal-900/0 group-hover:bg-charcoal-900/40 transition-colors duration-300 flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white font-display font-semibold text-sm">{project.name}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setExpandedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-[250px] object-cover"
                />
                <button
                  onClick={() => setExpandedProject(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-charcoal-700" />
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 text-xs font-semibold rounded bg-emerald-600 text-white font-body">
                    {selectedProject.status}
                  </span>
                  <span className="text-sm text-charcoal-500 font-body flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {selectedProject.location}
                  </span>
                </div>
                <h2 className="font-display text-2xl font-bold text-charcoal-900">{selectedProject.name}</h2>
                <p className="text-sm text-gold-600 font-body font-medium mt-1">{selectedProject.type}</p>
                <p className="text-sm text-charcoal-600 mt-4 font-body leading-relaxed">{selectedProject.overview}</p>

                <div className="mt-6">
                  <h4 className="font-display text-base font-semibold text-charcoal-900 mb-3">Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-sm text-charcoal-700 font-body">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-display text-base font-semibold text-charcoal-900 mb-3 flex items-center gap-2">
                    <Leaf className="w-4 h-4 text-emerald-600" /> Sustainability Features
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProject.sustainability.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <Leaf className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="text-sm text-charcoal-700 font-body">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setExpandedProject(null);
                    openForm("inquiry");
                  }}
                  className="mt-8 px-6 py-3 bg-emerald-700 text-white font-semibold text-sm rounded-md hover:bg-emerald-800 transition-colors"
                >
                  Inquire About This Project
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-16 bg-emerald-800">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white">Interested in a Project?</h2>
          <p className="text-white/70 mt-3 font-body max-w-lg mx-auto">Schedule a site visit or speak with our team for detailed project information.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => openForm("site-visit")}
              className="px-7 py-3.5 bg-gold-500 text-charcoal-900 font-semibold text-sm rounded-md hover:bg-gold-400 transition-colors"
            >
              Schedule Site Visit
            </button>
            <button
              onClick={() => openForm("inquiry")}
              className="px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold text-sm rounded-md hover:bg-white/20 transition-colors"
            >
              Property Inquiry
            </button>
          </div>
        </div>
      </section>

      <LeadForm type={formType as any} open={isOpen} onOpenChange={closeForm} />
    </div>
  );
}
