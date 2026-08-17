/*
 * Vista Spaces Disclaimer
 */
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/siteData";

export default function Disclaimer() {
  return (
    <div>
      <PageHero title="Disclaimer" subtitle="Important information regarding the use of our website and services." />
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <p className="text-sm text-charcoal-400 font-body mb-6">Last updated: July 2026</p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-8">1. General Disclaimer</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            The information provided on the Vista Spaces website is for general informational and marketing purposes only. While we strive to keep the information up to date and accurate, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">2. Property Information</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            All property descriptions, prices, availability, floor plans, specifications, and other details shown on this website are subject to change without notice. They are intended as preliminary information only and do not constitute an offer or contract. Actual properties may differ in design, specifications, and features from those shown on this website.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">3. Investment Disclaimer</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Any investment-related information on this website is provided for educational and informational purposes only and does not constitute financial advice, investment advice, or an offer to sell any property or investment product. Past performance is not indicative of future results.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">4. External Links</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            This website may contain links to external websites that are not provided or maintained by Vista Spaces. We do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">5. RERA Disclaimer</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Vista Spaces Jakkur Residency Private Limited is registered under the Real Estate (Regulation and Development) Act, 2016 (RERA). All applicable RERA numbers will be displayed on the respective project pages. Prospective buyers are advised to verify all details before making any investment decision.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">Contact</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            {COMPANY.email} | {COMPANY.fullAddress}
          </p>
        </div>
      </section>
    </div>
  );
}
