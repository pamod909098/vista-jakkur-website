/*
 * Vista Jakkur — Architectural Precision
 * A quiet graphite footer structured like a drawing title block.
 */
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "wouter";
import { COMPANY } from "@/lib/siteData";

export default function Footer() {
  const links = [
    { label: "Company", href: "/about" }, { label: "Capabilities", href: "/services" }, { label: "Portfolio", href: "/projects" }, { label: "Responsibility", href: "/sustainability" }, { label: "Perspectives", href: "/blog" }, { label: "Contact", href: "/contact" },
  ];
  const legal = [
    { label: "Privacy", href: "/privacy-policy" }, { label: "Terms", href: "/terms" }, { label: "Disclaimer", href: "/disclaimer" }, { label: "Cookies", href: "/cookie-policy" },
  ];
  return (
    <footer className="bg-graphite-950 text-white">
      <div className="border-b border-white/15">
        <div className="container grid gap-8 py-10 lg:grid-cols-[1.4fr_.6fr] lg:items-center lg:py-14">
          <div>
            <p className="text-[0.64rem] font-extrabold tracking-[.2em] text-brass-400">THE NEXT ADDRESS STARTS WITH A CONVERSATION</p>
            <h2 className="mt-3 max-w-2xl font-display text-4xl font-medium leading-[.94] md:text-5xl">Make a considered move.</h2>
          </div>
          <Link href="/contact" className="group inline-flex w-fit items-center gap-3 border border-white/35 px-5 py-3 text-[.67rem] font-extrabold tracking-[.14em] transition-colors hover:border-cobalt-500 hover:bg-cobalt-700">
            SPEAK WITH VISTA <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
      <div className="container grid gap-10 py-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.65fr_.8fr_1.15fr] lg:py-16">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-white/25 p-1.5"><img src="/images/vj-logo-mark.png" alt="Vista Jakkur" className="h-full w-full object-contain" /></span>
            <span><span className="block text-xs font-extrabold tracking-[.19em]">VISTA JAKKUR</span><span className="mt-1 block text-[.56rem] font-bold tracking-[.2em] text-white/45">BUILT WITH INTENT</span></span>
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-7 text-white/58">Premium places for a changing city — delivered with an exacting approach to craft, performance, and long-term relevance.</p>
        </div>
        <div>
          <p className="text-[.63rem] font-extrabold tracking-[.18em] text-brass-400">EXPLORE</p>
          <ul className="mt-5 space-y-3">{links.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-[.63rem] font-extrabold tracking-[.18em] text-brass-400">POLICIES</p>
          <ul className="mt-5 space-y-3">{legal.map((link) => <li key={link.href}><Link href={link.href} className="text-sm text-white/60 transition-colors hover:text-white">{link.label}</Link></li>)}</ul>
        </div>
        <div>
          <p className="text-[.63rem] font-extrabold tracking-[.18em] text-brass-400">OFFICE</p>
          <address className="mt-5 not-italic text-sm leading-6 text-white/60">{COMPANY.fullAddress}</address>
          <a href={`tel:${COMPANY.phone}`} className="mt-5 flex items-center gap-2 text-sm text-white/70 hover:text-white"><Phone className="h-4 w-4 text-cobalt-400" />{COMPANY.phone}</a>
          <a href={`mailto:${COMPANY.email}`} className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-white"><Mail className="h-4 w-4 text-cobalt-400" />{COMPANY.email}</a>
          <Link href="/contact" className="mt-3 flex items-center gap-2 text-sm text-white/70 hover:text-white"><MapPin className="h-4 w-4 text-cobalt-400" />Find our office</Link>
        </div>
      </div>
      <div className="border-t border-white/10"><div className="container flex flex-col gap-3 py-5 text-[.63rem] font-semibold tracking-[.08em] text-white/38 md:flex-row md:items-center md:justify-between"><span>© {new Date().getFullYear()} VISTA SPACES JAKKUR RESIDENCY PRIVATE LIMITED</span><span>CIN {COMPANY.cin} · BENGALURU, INDIA</span></div></div>
    </footer>
  );
}
