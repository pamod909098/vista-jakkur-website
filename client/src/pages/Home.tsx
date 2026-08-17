/*
 * Vista Jakkur — Architectural Precision
 * An asymmetric portfolio home page built from monumental imagery, blueprint grids, and measured editorial blocks.
 */
import type { ElementType } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowDownRight, ArrowUpRight, Building2, Check, ChevronRight, CircleGauge, Home as HomeIcon, Landmark, Leaf, MapPin, MoveRight, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import LeadForm from "@/components/LeadForm";
import { useLeadForm } from "@/hooks/useLeadForm";
import { BLOG_POSTS, DEVELOPMENT_PROCESS, INDUSTRIES, PROJECTS, SERVICES, STATS, SUSTAINABILITY_PILLARS } from "@/lib/siteData";

const ICONS: Record<string, ElementType> = { Home: HomeIcon, Building2, TrendingUp, Landmark, Leaf, Briefcase: CircleGauge };

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0, transition: { duration: 0.52 } } };

export default function Home() {
  const { formType, isOpen, openForm, closeForm } = useLeadForm();

  return (
    <main className="overflow-hidden bg-limestone-50">
      <section className="relative isolate min-h-[760px] bg-graphite-950 pt-[76px] lg:pt-[88px]">
        <img src="/images/vj-hero-architecture.webp" alt="Contemporary Vista Jakkur district at dusk" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" loading="eager" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,19,24,.96)_0%,rgba(17,19,24,.79)_42%,rgba(17,19,24,.18)_100%)]" />
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="absolute bottom-0 left-[10%] top-0 w-px bg-brass-400/75" />
        <div className="absolute bottom-0 right-[10%] top-0 w-px bg-white/20" />
        <div className="container relative flex min-h-[684px] flex-col justify-end py-14 md:py-20">
          <div className="max-w-3xl border-l-2 border-brass-400 pl-5 md:pl-7">
            <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="text-[.66rem] font-extrabold tracking-[.22em] text-cobalt-300">VISTA JAKKUR / BENGALURU / EST. 2020</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68, delay: 0.08 }} className="mt-5 font-display text-[3.75rem] font-medium leading-[.83] tracking-[-.03em] text-white sm:text-7xl md:text-[6rem] lg:text-[7rem]">
              Places that <em className="font-normal text-brass-400">hold</em> their ground.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.58, delay: 0.21 }} className="mt-7 max-w-xl text-sm leading-7 text-white/72 md:text-base">We shape residential, commercial, and mixed-use addresses with a disciplined eye for the life of a city — and the long view of an investment.</motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.32 }} className="mt-9 flex flex-wrap gap-3">
              <button type="button" onClick={() => openForm("site-visit")} className="inline-flex items-center gap-2 bg-cobalt-700 px-5 py-3 text-[.67rem] font-extrabold tracking-[.13em] text-white transition-colors hover:bg-cobalt-600">PLAN A SITE VISIT <ArrowUpRight className="h-4 w-4" /></button>
              <Link href="/projects" className="inline-flex items-center gap-2 border border-white/45 bg-white/5 px-5 py-3 text-[.67rem] font-extrabold tracking-[.13em] text-white transition-colors hover:bg-white hover:text-graphite-900">VIEW THE PORTFOLIO <MoveRight className="h-4 w-4" /></Link>
            </motion.div>
          </div>
          <div className="mt-14 flex items-end justify-between border-t border-white/20 pt-4 text-white/55">
            <p className="max-w-xs text-[.62rem] font-bold leading-5 tracking-[.12em]">A PRIVATE REAL ESTATE DEVELOPMENT COMPANY. BUILT WITH INTENT.</p>
            <ArrowDownRight className="h-7 w-7 text-brass-400" />
          </div>
        </div>
      </section>

      <section className="border-b border-graphite-900/10 bg-limestone-100">
        <div className="container grid grid-cols-2 divide-x divide-y divide-graphite-900/10 lg:grid-cols-4 lg:divide-y-0">
          {STATS.map((stat, index) => <div key={stat.label} className="px-4 py-7 sm:px-7 lg:px-10"><p className="font-display text-4xl font-semibold leading-none text-graphite-900">{stat.value}</p><p className="mt-2 text-[.63rem] font-extrabold tracking-[.12em] text-graphite-600">0{index + 1} / {stat.label.toUpperCase()}</p></div>)}
        </div>
      </section>

      <section className="architect-grid relative py-20 md:py-28">
        <div className="container grid items-end gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={reveal} className="relative border-l border-graphite-900/25 pl-5 md:pl-8">
            <p className="eyebrow">01 / The Vista Position</p>
            <h2 className="mt-5 max-w-md font-display text-5xl font-medium leading-[.9] text-graphite-900 md:text-6xl">A sharper outlook on <em className="font-normal text-cobalt-700">urban life.</em></h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-graphite-600">Vista Jakkur creates places that respect their context and reward the people who choose them. Every decision is considered: from the city block to the final material junction.</p>
            <div className="mt-8 grid max-w-md grid-cols-2 gap-x-6 gap-y-4 border-t border-graphite-900/15 pt-6">{["Residential precision", "Commercial clarity", "Lasting value", "Urban responsibility"].map((item) => <p key={item} className="flex gap-2 text-xs font-bold text-graphite-800"><Check className="h-4 w-4 text-cobalt-700" />{item}</p>)}</div>
            <Link href="/about" className="mt-9 inline-flex items-center gap-2 text-[.66rem] font-extrabold tracking-[.14em] text-cobalt-700 hover:text-graphite-900">OUR APPROACH <ArrowUpRight className="h-4 w-4" /></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.65 }} className="relative ml-auto w-full max-w-3xl">
            <img src="/images/vj-residential.webp" alt="Vista Jakkur contemporary residential architecture" className="h-[390px] w-full object-cover md:h-[530px]" loading="lazy" />
            <div className="absolute -bottom-5 -left-3 max-w-xs border border-graphite-900/15 bg-limestone-50 p-5 shadow-[0_14px_32px_rgba(17,19,24,.08)] md:-left-8"><p className="blueprint-label">Material / Light / Sequence</p><p className="mt-2 font-display text-2xl leading-tight text-graphite-900">Architecture made for daily life, not just first impressions.</p></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-graphite-950 py-20 text-white md:py-28">
        <div className="container">
          <div className="grid gap-10 border-b border-white/20 pb-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="eyebrow !text-brass-400">02 / Selected Work</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[.9] md:text-6xl">A portfolio with a <em className="font-normal text-cobalt-300">point of view.</em></h2></div><p className="max-w-md text-sm leading-7 text-white/62">Different programs. One deliberate standard: a development must do more than occupy a site. It should improve the way that site participates in the city.</p></div>
          <div className="mt-10 grid gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-3">{PROJECTS.slice(0, 6).map((project, index) => <Link href={`/projects#${project.id}`} key={project.id} className={`group relative min-h-[330px] overflow-hidden bg-graphite-900 ${index === 0 ? "md:col-span-2" : ""}`}><img src={project.image} alt={project.name} className="absolute inset-0 h-full w-full object-cover opacity-65 transition-transform duration-700 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-graphite-950 via-graphite-950/10 to-transparent" /><div className="relative flex h-full min-h-[330px] flex-col justify-between p-5 md:p-6"><div className="flex justify-between"><span className="border border-white/35 px-2 py-1 text-[.56rem] font-extrabold tracking-[.13em] text-white">0{index + 1}</span><span className="text-[.59rem] font-extrabold tracking-[.14em] text-brass-300">{project.status.toUpperCase()}</span></div><div><p className="text-[.62rem] font-bold tracking-[.12em] text-white/60">{project.type.toUpperCase()}</p><h3 className="mt-2 font-display text-3xl leading-none text-white">{project.name}</h3><p className="mt-3 flex items-center gap-1 text-xs text-white/65"><MapPin className="h-3.5 w-3.5" />{project.location}</p></div></div></Link>)}</div>
          <Link href="/projects" className="mt-10 inline-flex items-center gap-2 border-b border-brass-400 pb-2 text-[.66rem] font-extrabold tracking-[.14em] text-white">EXPLORE ALL PROJECTS <ChevronRight className="h-4 w-4 text-brass-400" /></Link>
        </div>
      </section>

      <section className="relative py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <div><p className="eyebrow">03 / Capabilities</p><h2 className="mt-5 font-display text-5xl font-medium leading-[.9] text-graphite-900 md:text-6xl">The full development <em className="font-normal text-cobalt-700">equation.</em></h2><p className="mt-6 max-w-sm text-sm leading-7 text-graphite-600">A multi-disciplinary platform that moves from land strategy to post-handover performance with one coherent measure of quality.</p><Link href="/services" className="mt-8 inline-flex items-center gap-2 text-[.66rem] font-extrabold tracking-[.14em] text-cobalt-700">VIEW OUR CAPABILITIES <ArrowUpRight className="h-4 w-4" /></Link></div>
          <div className="grid divide-y divide-graphite-900/15 border-y border-graphite-900/15">{SERVICES.map((service, index) => { const Icon = ICONS[service.icon] ?? Building2; return <Link key={service.id} href={`/services#${service.id}`} className="group grid grid-cols-[2.5rem_1fr_auto] gap-4 py-5 first:pt-5 hover:bg-white/70 md:grid-cols-[3rem_1fr_2.2fr_auto] md:gap-6 md:py-6"><span className="font-display text-2xl text-brass-500">0{index + 1}</span><Icon className="mt-1 h-5 w-5 text-cobalt-700" /><div><h3 className="text-sm font-extrabold tracking-[.03em] text-graphite-900">{service.title}</h3><p className="mt-2 hidden max-w-sm text-xs leading-6 text-graphite-600 md:block">{service.description}</p></div><ArrowUpRight className="h-4 w-4 text-graphite-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cobalt-700" /></Link>})}</div>
        </div>
      </section>

      <section className="bg-limestone-100 py-20 md:py-28">
        <div className="container grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
          <div className="relative overflow-hidden bg-graphite-900 p-7 text-white md:p-12"><div className="absolute inset-0 opacity-50"><img src="/images/vj-community.webp" alt="Sustainable urban courtyard" className="h-full w-full object-cover" loading="lazy" /></div><div className="absolute inset-0 bg-graphite-950/65" /><div className="relative"><p className="eyebrow !text-brass-400">04 / Responsibility</p><h2 className="mt-5 max-w-lg font-display text-5xl font-medium leading-[.9] md:text-6xl">Performance, considered <em className="font-normal text-cobalt-300">beyond</em> the facade.</h2><p className="mt-7 max-w-md text-sm leading-7 text-white/70">Our approach to sustainability is practical and measurable: lower resource demand, resilient landscape systems, and places that remain relevant to the people who use them.</p><Link href="/sustainability" className="mt-9 inline-flex items-center gap-2 border-b border-brass-400 pb-2 text-[.66rem] font-extrabold tracking-[.14em] text-white">OUR RESPONSIBILITY <ArrowUpRight className="h-4 w-4 text-brass-400" /></Link></div></div>
          <div className="grid content-center gap-4">{SUSTAINABILITY_PILLARS.slice(0, 5).map((pillar, index) => <div key={pillar.title} className="surface-panel grid grid-cols-[2rem_1fr] gap-4 p-5"><span className="font-display text-2xl text-brass-500">0{index + 1}</span><div><h3 className="text-sm font-extrabold text-graphite-900">{pillar.title}</h3><p className="mt-1 text-xs leading-5 text-graphite-600">{pillar.description}</p></div></div>)}</div>
        </div>
      </section>

      <section className="py-20 md:py-28"><div className="container"><div className="grid gap-9 border-b border-graphite-900/15 pb-9 lg:grid-cols-[.75fr_1.25fr] lg:items-end"><div><p className="eyebrow">05 / The Method</p><h2 className="mt-5 font-display text-5xl font-medium leading-[.9] text-graphite-900">A project is a sequence of <em className="font-normal text-cobalt-700">decisions.</em></h2></div><p className="max-w-2xl text-sm leading-7 text-graphite-600">From early land study to the quiet details of handover, the work is governed by accountability, clarity, and a stubborn respect for the long term.</p></div><div className="mt-9 grid gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-5">{DEVELOPMENT_PROCESS.map((step) => <div key={step.step} className="border-t-2 border-cobalt-700 pt-4"><p className="font-display text-3xl text-brass-500">{step.step}</p><h3 className="mt-3 text-sm font-extrabold text-graphite-900">{step.title}</h3><p className="mt-2 text-xs leading-6 text-graphite-600">{step.description}</p></div>)}</div></div></section>

      <section className="bg-cobalt-700 py-16 text-white md:py-20"><div className="container grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-[.64rem] font-extrabold tracking-[.2em] text-cobalt-100">A CONVERSATION WORTH HAVING</p><h2 className="mt-4 max-w-3xl font-display text-5xl font-medium leading-[.9] md:text-6xl">Thinking about a new address or a new investment?</h2></div><button type="button" onClick={() => openForm("investment")} className="inline-flex items-center gap-2 self-start bg-brass-400 px-5 py-3 text-[.67rem] font-extrabold tracking-[.13em] text-graphite-950 transition-colors hover:bg-white">START A CONVERSATION <ArrowUpRight className="h-4 w-4" /></button></div></section>

      <section className="py-20 md:py-28"><div className="container"><div className="flex flex-col justify-between gap-6 border-b border-graphite-900/15 pb-7 md:flex-row md:items-end"><div><p className="eyebrow">06 / Perspectives</p><h2 className="mt-4 font-display text-5xl font-medium leading-[.9] text-graphite-900">Reading the city.</h2></div><Link href="/blog" className="inline-flex items-center gap-2 text-[.66rem] font-extrabold tracking-[.14em] text-cobalt-700">VIEW ALL NOTES <ArrowUpRight className="h-4 w-4" /></Link></div><div className="mt-7 grid gap-7 md:grid-cols-3">{BLOG_POSTS.slice(0, 3).map((post, index) => <Link href={`/blog#${post.id}`} key={post.id} className="group"><div className="relative h-48 overflow-hidden bg-graphite-900"><img src={post.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" /><span className="absolute left-3 top-3 border border-white/40 bg-graphite-950/45 px-2 py-1 text-[.55rem] font-extrabold tracking-[.12em] text-white">0{index + 1}</span></div><p className="mt-4 text-[.6rem] font-extrabold tracking-[.15em] text-cobalt-700">{post.category.toUpperCase()} / {post.readTime}</p><h3 className="mt-2 font-display text-3xl leading-[.96] text-graphite-900 transition-colors group-hover:text-cobalt-700">{post.title}</h3><p className="mt-3 text-xs leading-6 text-graphite-600">{post.excerpt}</p></Link>)}</div></div></section>

      <section className="border-t border-graphite-900/10 bg-limestone-100 py-10"><div className="container flex flex-wrap gap-x-6 gap-y-3"><span className="text-[.62rem] font-extrabold tracking-[.16em] text-graphite-500">SECTORS WE SERVE</span>{INDUSTRIES.map((industry) => <span key={industry} className="text-[.64rem] font-extrabold tracking-[.12em] text-graphite-800">{industry.toUpperCase()}</span>)}</div></section>

      <LeadForm type={formType} open={isOpen} onOpenChange={(open) => !open && closeForm()} />
    </main>
  );
}
