import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import {
  imgServicesHero, imgBriefcase,
  imgIconConstruction, imgIconHomeInterior, imgIconInspection,
  imgIconTrading, imgIconEcommerce, imgIconCreativeDesign,
} from "@/assets";

const services = [
  {
    number: "01", color: "#f7a92c", slug: "construction",
    title: "Construction & Engineering",
    icon: imgIconConstruction,
    desc: "End-to-end residential and commercial construction services. From structural design and civil works to site management and quality inspection, we handle it all with precision.",
    points: ["Residential Buildings", "Commercial Complexes", "Structural Engineering", "Civil Works & Finishing"],
  },
  {
    number: "02", color: "#1565c0", slug: "interiors",
    title: "Interiors & UV Wall Printing",
    icon: imgIconHomeInterior,
    desc: "Transform your spaces with our creative interior design services and state-of-the-art UV wall printing technology that brings walls to life with vibrant, durable artwork.",
    points: ["Interior Design & Execution", "UV Wall Printing", "Custom Wall Murals", "Furniture & Décor"],
  },
  {
    number: "03", color: "#f2761e", slug: "inspections",
    title: "Home Quality Inspections",
    icon: imgIconInspection,
    desc: "Our certified inspectors conduct thorough structural, electrical, and plumbing assessments before you buy, sell, or renovate your property — saving you from costly surprises.",
    points: ["Pre-Purchase Inspections", "Structural Assessment", "Electrical & Plumbing Audit", "Detailed Reports & Recommendations"],
  },
  {
    number: "04", color: "#2e8b3d", slug: "trading",
    title: "Trading, Import & Export",
    icon: imgIconTrading,
    desc: "We source and supply premium construction materials, sanitaryware, tiles, and fittings from trusted global manufacturers. Competitive pricing, reliable logistics.",
    points: ["Construction Materials", "Sanitaryware & Fittings", "Tiles & Flooring", "Import Coordination"],
  },
  {
    number: "05", color: "#7c3aed", slug: "ecommerce",
    title: "E-Commerce — Quality Products",
    icon: imgIconEcommerce,
    desc: "We offer a diverse range of quality products across various categories — carefully selected for reliability, utility, and value for money — at affordable prices you can trust.",
    points: ["Wide & Diverse Product Range", "Affordable & Competitive Pricing", "Quality-Assured Products", "Fast & Reliable Delivery"],
  },
  {
    number: "06", color: "#0891b2", slug: "project-management",
    title: "Project Management",
    icon: imgIconCreativeDesign,
    desc: "Comprehensive project management ensuring your construction or renovation project is completed on time, within budget, and to the highest quality standards.",
    points: ["Timeline Planning", "Budget Management", "Contractor Coordination", "Quality Control & Handover"],
  },
];

// ── Spotlight cursor section ──────────────────────────────────────────────────
function SpotlightSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [inside, setInside] = useState(false);

  return (
    <div
      ref={ref}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setInside(true)}
      onMouseLeave={() => setInside(false)}
      className="relative bg-[#0e0e10] px-10 lg:px-20 py-16 overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: inside ? 1 : 0,
          background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(247,169,44,0.12) 0%, rgba(242,118,30,0.06) 40%, transparent 70%)`,
        }}
      />
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12 relative z-10">
        <div className="flex flex-col gap-4">
          <SectionLabel light>WHY CHOOSE US</SectionLabel>
          <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-white text-[38px] leading-tight">
            The Rochan Ideas Advantage
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {[
            { color: "#f7a92c", n: "01", title: "Tailored Solutions",   desc: "No one-size-fits-all. Every service is customised to your specific needs, space, and budget." },
            { color: "#1565c0", n: "02", title: "Licensed Experts",     desc: "All our engineers, designers, and inspectors are certified professionals with hands-on experience." },
            { color: "#f2761e", n: "03", title: "Warranty on Work",     desc: "We stand behind our work. Select services come with a quality warranty for your peace of mind." },
            { color: "#2e8b3d", n: "04", title: "Aftersales Support",   desc: "Our relationship doesn't end at handover. We're available for queries, support, and follow-ups." },
          ].map((w) => (
            <div
              key={w.title}
              className="group bg-[rgba(255,255,255,0.04)] border border-[#2e2e32] rounded-2xl p-8 flex flex-col gap-4 hover:border-[rgba(247,169,44,0.35)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-300 cursor-default"
            >
              <p style={{ fontFamily: "'Sora', sans-serif", color: w.color }} className="font-extrabold text-4xl">{w.n}</p>
              <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-white text-lg">{w.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm leading-[1.6] group-hover:text-[#ccc] transition-colors">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      <PageHero bg={imgServicesHero} title="Our Services" subtitle="WHAT WE OFFER" />

      {/* ── Intro ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-4 items-center text-center">
          <SectionLabel>COMPLETE SOLUTIONS</SectionLabel>
          <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[42px] leading-tight max-w-[720px]">
            Everything You Need, Under One Roof
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.7] max-w-[680px]">
            From the foundation of your building to the finishing touches of your interiors, from structural inspections to international trading — Rochan Ideas is your single trusted partner for every property and business need.
          </p>
        </div>
      </div>

      {/* ── Service cards ── */}
      <div className="bg-white px-10 lg:px-20 py-6 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-white border border-[#e8e8e8] rounded-2xl p-8 flex flex-col gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <p style={{ fontFamily: "'Sora', sans-serif", color: s.color, opacity: 0.15 }} className="font-extrabold text-[56px] leading-none">{s.number}</p>
                {s.icon ? (
                  <div className="flex items-center justify-center rounded-xl size-14 shrink-0 bg-white p-1 shadow-sm border border-[#e8e8e8]">
                    <img alt={s.title} className="size-full object-contain rounded-lg" src={s.icon} />
                  </div>
                ) : (
                  <div className="flex items-center justify-center rounded-xl size-12 shrink-0" style={{ background: s.color }}>
                    <img alt="" className="size-6 object-contain" src={imgBriefcase} />
                  </div>
                )}
              </div>
              <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-xl">{s.title}</p>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7]">{s.desc}</p>
              <div className="flex flex-col gap-2 pt-2 border-t border-[#f0f0f0]">
                {s.points.map((pt) => (
                  <div key={pt} className="flex gap-2 items-center">
                    <div className="size-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm">{pt}</p>
                  </div>
                ))}
              </div>
              <div className="mt-auto pt-2">
                <NavLink
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold transition-all group/btn"
                  style={{ fontFamily: "'Inter', sans-serif", color: s.color }}
                >
                  <span className="border-b border-transparent group-hover/btn:border-current transition-all">Learn More</span>
                  <svg className="size-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SpotlightSection />
      <CtaBanner />
    </>
  );
}
