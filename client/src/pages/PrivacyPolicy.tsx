/*
 * Vista Spaces Privacy Policy
 */
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/siteData";

export default function PrivacyPolicy() {
  return (
    <div>
      <PageHero title="Privacy Policy" subtitle="Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information." />
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <div className="prose prose-charcoal max-w-none">
            <p className="text-sm text-charcoal-400 font-body mb-6">Last updated: July 2026</p>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-8">1. Introduction</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              Vista Spaces Jakkur Residency Private Limited ("Vista Spaces," "we," "our," or "us") is committed to protecting the privacy and security of your personal information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when you visit our website, interact with our services, or engage with us in any manner.
            </p>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              This policy applies to all information collected through our website ({COMPANY.email}), our physical offices, and any related services, sales, marketing, or events.
            </p>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">2. Information We Collect</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              We may collect personal information that you voluntarily provide to us when you register on the website, express interest in our properties or services, participate in activities, or otherwise contact us. This includes:
            </p>
            <ul className="mt-3 space-y-2">
              {["Name and contact details (email, phone, address)", "Property preferences and budget information", "Investment-related queries and requirements", "Site visit scheduling information", "Technical data (browser type, device, IP address)"].map((item) => (
                <li key={item} className="text-sm text-charcoal-600 font-body flex gap-2">
                  <span className="text-emerald-600">•</span> {item}
                </li>
              ))}
            </ul>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">3. How We Use Your Information</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              We use the information we collect for purposes including: providing and maintaining our services, processing property inquiries and transactions, communicating about projects and updates, sending marketing communications (with your consent), improving our website and services, and complying with legal obligations.
            </p>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">4. Information Sharing</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except with your consent, to comply with the law, or to protect our rights. We may share information with trusted third parties who assist us in operating our business, provided they agree to keep this information confidential.
            </p>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">5. Data Security</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">6. Your Rights</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by contacting us or clicking the unsubscribe link in our emails.
            </p>

            <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">7. Contact Us</h2>
            <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
              If you have questions about this Privacy Policy, please contact us at {COMPANY.email} or write to us at: {COMPANY.fullAddress}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
