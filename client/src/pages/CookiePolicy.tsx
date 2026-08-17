/*
 * Vista Spaces Cookie Policy
 */
import PageHero from "@/components/PageHero";
import { COMPANY } from "@/lib/siteData";

export default function CookiePolicy() {
  return (
    <div>
      <PageHero title="Cookie Policy" subtitle="Learn about how we use cookies and similar technologies on our website." />
      <section className="py-16 bg-white">
        <div className="container max-w-3xl">
          <p className="text-sm text-charcoal-400 font-body mb-6">Last updated: July 2026</p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-8">1. What Are Cookies?</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">2. How We Use Cookies</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            Vista Spaces uses cookies for the following purposes:
          </p>
          <ul className="mt-3 space-y-2">
            {[
              "Essential Cookies — Required for the website to function properly (session management, security)",
              "Analytics Cookies — Help us understand how visitors use our website (page views, session duration)",
              "Performance Cookies — Improve website speed and reliability",
              "Functionality Cookies — Remember your preferences and settings",
            ].map((item) => (
              <li key={item.split(" — ")[0]} className="text-sm text-charcoal-600 font-body flex gap-2">
                <span className="text-emerald-600 shrink-0">•</span> {item}
              </li>
            ))}
          </ul>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">3. Managing Cookies</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website. Most browsers allow you to block or delete cookies, but doing so may impact your experience.
          </p>

          <h2 className="font-display text-xl font-bold text-charcoal-900 mt-10">4. Contact</h2>
          <p className="text-sm text-charcoal-600 font-body leading-relaxed mt-3">
            If you have questions about our use of cookies, please contact us at {COMPANY.email}.
          </p>
        </div>
      </section>
    </div>
  );
}
