/*
 * Vista Spaces Terms & Conditions
 */
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/siteData";

export default function Terms() {
  return (
    <div>
      <PageHero title="Terms & Conditions" subtitle="Please read these terms carefully before using our website and services." />
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <p className="text-sm text-charcoal-400 font-body mb-6">Last updated: July 2026</p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-8">1. Acceptance of Terms</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            By accessing and using the Vista Jakkur website (vistajakkur.site), you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our website.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">2. Intellectual Property</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            All content on this website, including text, images, logos, designs, and other materials, is the property of Vista Spaces Jakkur Residency Private Limited or its content suppliers and is protected by applicable intellectual property laws.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">3. Use of Website</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            You agree to use this website only for lawful purposes and in a manner consistent with all applicable local, state, national, and international laws and regulations. You may not use the website to transmit any material that is illegal, harmful, or objectionable.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">4. Property Information</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            All property descriptions, pricing, availability, and other information on this website are provided for general informational purposes only. We make no warranties regarding the accuracy of such information. Actual property details may differ from those displayed on the website.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">5. Limitation of Liability</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Vista Spaces shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from the use of or inability to use this website. Our total liability shall not exceed the amount paid by you, if any, for using our services.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">6. Third-Party Links</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Our website may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">7. Governing Law</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">8. Changes to Terms</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this page. Your continued use of the website after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">9. Contact</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            For questions about these Terms and Conditions, please contact us at {COMPANY.email} or write to us at: {COMPANY.fullAddress}
          </p>
        </div>
      </section>
    </div>
  );
}
