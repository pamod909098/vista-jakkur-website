/*
 * Vista Jakkur — Architectural Precision
 * A deliberate, linear navigation system with cobalt wayfinding and an editorial wordmark.
 */
import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, MoveUpRight, Phone, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 36);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (href: string) => href === "/" ? location === "/" : location.startsWith(href);
  const foreground = scrolled || mobileOpen ? "text-graphite-900" : "text-white";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? "border-b border-graphite-900/10 bg-limestone-50/95 backdrop-blur-xl" : "bg-gradient-to-b from-graphite-950/55 to-transparent"}`}>
      <div className="container flex h-[76px] items-center justify-between lg:h-[88px]">
        <Link href="/" className="group flex shrink-0 items-center gap-3" aria-label="Vista Jakkur home">
          <span className="grid h-10 w-10 place-items-center border border-current/35 bg-graphite-950/10 p-1.5 transition-transform duration-300 group-hover:-translate-y-0.5">
            <img src="/images/vj-logo-mark.png" alt="" className="h-full w-full object-contain" />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-body text-[0.78rem] font-extrabold tracking-[0.19em] ${foreground}`}>VISTA JAKKUR</span>
            <span className={`mt-1 text-[0.55rem] font-bold tracking-[0.2em] ${scrolled || mobileOpen ? "text-cobalt-700" : "text-white/65"}`}>BUILT WITH INTENT</span>
          </span>
        </Link>

        <nav className="hidden items-center lg:flex" aria-label="Primary navigation">
          {NAV_LINKS.slice(0, 6).map((link) => (
            <div key={link.href} className="relative" onMouseEnter={() => link.children && setActiveDropdown(link.href)} onMouseLeave={() => setActiveDropdown(null)}>
              <Link href={link.href} className={`group flex items-center gap-1 px-3 py-3 text-[0.68rem] font-extrabold tracking-[0.08em] transition-colors ${isActive(link.href) ? (scrolled ? "text-cobalt-700" : "text-brass-400") : `${foreground} opacity-80 hover:opacity-100`}`}>
                {link.label.toUpperCase()}
                {link.children && <ChevronDown className="h-3 w-3" />}
              </Link>
              {link.children && activeDropdown === link.href && (
                <div className="absolute left-0 top-full w-[238px] border border-graphite-900/10 bg-limestone-50 p-2 shadow-[0_18px_50px_rgba(17,19,24,.16)]">
                  {link.children.map((child) => (
                    <Link key={child.href} href={child.href} className="block border-l-2 border-transparent px-3 py-3 text-xs font-bold text-graphite-700 transition-colors hover:border-cobalt-600 hover:bg-white hover:text-cobalt-700">
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className={`hidden items-center gap-2 border px-4 py-2.5 text-[0.64rem] font-extrabold tracking-[0.12em] transition-all duration-200 md:flex ${scrolled ? "border-graphite-900 bg-graphite-900 text-white hover:bg-cobalt-700 hover:border-cobalt-700" : "border-white/70 bg-white/10 text-white hover:bg-white hover:text-graphite-900"}`}>
            <Phone className="h-3.5 w-3.5" />
            PLAN A VISIT
          </Link>
          <button type="button" className={`grid h-10 w-10 place-items-center border transition-colors lg:hidden ${scrolled || mobileOpen ? "border-graphite-900/20 text-graphite-900" : "border-white/35 text-white"}`} onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle menu">
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-graphite-900/10 bg-limestone-50 px-4 py-5 shadow-xl lg:hidden" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <div key={link.href} className="border-b border-graphite-900/10 last:border-0">
              <Link href={link.href} className={`flex items-center justify-between py-3 text-sm font-extrabold tracking-[0.08em] ${isActive(link.href) ? "text-cobalt-700" : "text-graphite-800"}`}>
                {link.label.toUpperCase()} <MoveUpRight className="h-4 w-4" />
              </Link>
              {link.children && <div className="pb-3 pl-4">{link.children.map((child) => <Link key={child.href} href={child.href} className="block py-1.5 text-xs font-semibold text-graphite-600">{child.label}</Link>)}</div>}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
}
