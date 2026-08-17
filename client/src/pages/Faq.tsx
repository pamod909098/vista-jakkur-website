/*
 * Vista Spaces FAQ Page — Verdant Modernism
 */
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/ui/section-heading";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { FAQ_DATA } from "@/lib/siteData";

export default function Faq() {
  const { formType, openForm, closeForm, isOpen } = useLeadForm();

  return (
    <div>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our projects, services, investment opportunities, and company policies."
        bgImage="/images/vj-commercial.webp"
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="container max-w-3xl">
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <AccordionItem value={`item-${i}`} className="border border-emerald-100/50 rounded-lg overflow-hidden">
                  <AccordionTrigger className="px-6 py-5 text-left font-display text-base font-semibold text-charcoal-900 hover:text-emerald-700 transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-5 text-sm text-charcoal-600 leading-relaxed font-body">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="mt-14 p-8 rounded-lg bg-beige-50 text-center border border-emerald-100/50">
            <h3 className="font-display text-xl font-bold text-charcoal-900">Still Have Questions?</h3>
            <p className="text-sm text-charcoal-500 mt-2 font-body">Our team is happy to help with any additional queries.</p>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                onClick={() => openForm("callback")}
                className="px-6 py-3 bg-emerald-700 text-white text-sm font-semibold rounded-md hover:bg-emerald-800 transition-colors"
              >
                Request a Callback
              </button>
              <button
                onClick={() => openForm("inquiry")}
                className="px-6 py-3 bg-gold-500 text-charcoal-900 text-sm font-semibold rounded-md hover:bg-gold-400 transition-colors"
              >
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <LeadForm type={formType as any} open={isOpen} onOpenChange={closeForm} />
    </div>
  );
}
