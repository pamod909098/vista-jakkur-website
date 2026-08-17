/*
 * Vista Spaces Sustainability Policy
 */
import PageHero from "@/components/PageHero";
import { COMPANY, SUSTAINABILITY_PILLARS } from "@/lib/siteData";

export default function SustainabilityPolicy() {
  return (
    <div>
      <PageHero title="Sustainability Policy" subtitle="Our comprehensive approach to sustainable development and environmental responsibility." />
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <p className="text-sm text-charcoal-400 font-body mb-6">Last updated: July 2026</p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-8">1. Our Commitment</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Vista Spaces Jakkur Residency Private Limited is committed to sustainable development practices that minimize environmental impact while maximizing the quality of life for our residents and communities. This policy outlines our approach to environmental stewardship across all our projects.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">2. Green Building Standards</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            All Vista Spaces projects are designed and constructed in accordance with recognized green building standards, including LEED (Leadership in Energy and Environmental Design), IGBC (Indian Green Building Council), and GRIHA (Green Rating for Integrated Habitat Assessment) guidelines.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">3. Sustainability Framework</h2>
          <div className="mt-4 space-y-4">
            {SUSTAINABILITY_PILLARS.map((pillar) => (
              <div key={pillar.title} className="p-4 rounded-lg bg-beige-50 border border-emerald-100/50">
                <h3 className="font-display text-base font-semibold text-charcoal-900">{pillar.title}</h3>
                <p className="text-sm text-charcoal-500 mt-1 font-body leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">4. Energy Management</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            We implement smart energy management systems across all projects, including solar energy integration, energy-efficient lighting and HVAC systems, and real-time energy monitoring to reduce carbon footprint.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">5. Water Conservation</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Every Vista Spaces project incorporates rainwater harvesting, greywater recycling, low-flow fixtures, and drought-resistant landscaping to minimize water consumption and promote responsible water management.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">6. Waste Management</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            We implement comprehensive waste management protocols during construction and operation, including segregation at source, recycling programs, and composting facilities for organic waste.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">7. Community Well-being</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Our developments prioritize community health and well-being through ample green spaces, pedestrian-friendly layouts, clean air initiatives, noise reduction measures, and recreational facilities.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">8. Review & Updates</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            This Sustainability Policy is reviewed annually and updated to reflect new regulations, technologies, and best practices. Contact us at {COMPANY.email} for the latest version.
          </p>
        </div>
      </section>
    </div>
  );
}
