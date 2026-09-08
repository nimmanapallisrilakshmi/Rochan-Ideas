import { useState } from "react";
import { NavLink } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import CtaBanner from "@/components/CtaBanner";
import StarRow from "@/components/StarRow";
import CheckItem from "@/components/CheckItem";
import {
  imgHeroSection, imgAbout1, imgAbout2, imgAbout3, imgAbout4,
  imgPortfolioItem, imgPortfolioItem1, imgPortfolioItem2,
  imgBentoBook, imgBentoIpad, imgBentoBillboard, imgBentoLaptop,
  imgBentoTote, imgBentoChair,
  imgArrow, imgCheck, imgAward, imgBriefcase, imgTarget, imgEye,
  imgAvatar, imgAvatar1, imgAvatar2,
} from "@/assets";

// ── Service tab data ─────────────────────────────────────────────────────────
const SERVICES_TAB = [
  {
    number: "01",
    title: "Construction & Engineering",
    slug: "construction",
    img: imgAbout2,
    features: [
      { label: "Structural Planning",   desc: "Architectural design and engineering layouts built with structural integrity." },
      { label: "Quality Construction",  desc: "High-standard building execution for residential, commercial, or structural projects." },
      { label: "Precision Engineering", desc: "Accurate technical planning, safety compliance, and robust engineering solutions." },
      { label: "Project Management",    desc: "End-to-end supervision from initial foundation work to final construction delivery." },
      { label: "Safety & Compliance",   desc: "Strict adherence to building codes, structural standards, and safety regulations throughout the build." },
    ],
  },
  {
    number: "02",
    title: "Interiors & UV Wall Printing",
    slug: "interiors",
    img: imgAbout1,
    features: [
      { label: "Interior Design",       desc: "Bespoke space planning, mood boards, and full 3D visualisation before any work begins." },
      { label: "UV Wall Printing",       desc: "Vibrant, durable prints directly onto walls, tiles, glass, or any flat surface." },
      { label: "Custom Murals",          desc: "Large-format original artwork for homes, offices, restaurants, and retail spaces." },
      { label: "Furniture & Décor",      desc: "Curated furniture, lighting, and soft furnishings sourced from trusted vendors." },
      { label: "Modular Kitchens",       desc: "Functional, stylish kitchens and wardrobes designed around your daily routines." },
    ],
  },
  {
    number: "03",
    title: "Home Quality Inspections",
    slug: "inspections",
    img: imgAbout3,
    features: [
      { label: "Pre-Purchase Check",     desc: "Complete structural and systems evaluation before you sign any property agreement." },
      { label: "Structural Assessment",  desc: "Foundations, columns, slabs, and load-bearing walls audited by certified engineers." },
      { label: "Electrical Audit",        desc: "Wiring, earthing, switchgear, and load capacity inspected for safety compliance." },
      { label: "Plumbing Audit",          desc: "Pipe integrity, drainage, water pressure, and leakage detection tested thoroughly." },
      { label: "Detailed Report",         desc: "30–60 page photographic report with severity ratings and prioritised recommendations." },
    ],
  },
  {
    number: "04",
    title: "Trading, Import & Export",
    slug: "trading",
    img: imgAbout4,
    features: [
      { label: "Construction Materials", desc: "Cement, steel, aggregates, and all primary construction inputs in bulk or retail." },
      { label: "Sanitaryware & Fittings", desc: "Premium bathroom fittings, toilets, and accessories from global brands." },
      { label: "Tiles & Flooring",        desc: "Ceramic, vitrified, marble, wooden, and vinyl flooring in a wide range of options." },
      { label: "Import Coordination",     desc: "Full documentation, customs clearance, and last-mile logistics handled for you." },
      { label: "Export Services",         desc: "We help Indian manufacturers reach international buyers with complete compliance support." },
    ],
  },
  {
    number: "05",
    title: "E-Commerce — Quality Products",
    slug: "ecommerce",
    img: imgPortfolioItem,
    features: [
      { label: "Diverse Product Range",    desc: "Products across electronics, home, lifestyle, and more — hand-picked for quality, utility, and value for money." },
      { label: "Affordable Pricing",        desc: "Competitive prices on every product without compromising quality, so you always get the best deal." },
      { label: "Quality Assurance",         desc: "Every product is sourced from reliable manufacturers and verified before it reaches your doorstep." },
      { label: "Fast & Reliable Delivery", desc: "Efficient logistics and trusted courier partners ensure your orders arrive quickly and safely." },
      { label: "Trusted Shopping",          desc: "A secure, transparent, customer-first platform you can rely on for every purchase." },
    ],
  },
  {
    number: "06",
    title: "Project Management",
    slug: "project-management",
    img: imgPortfolioItem2,
    features: [
      { label: "Scope & Timeline",        desc: "Detailed Gantt charts, work breakdown structure, and milestone definitions from day one." },
      { label: "Budget Control",           desc: "Real-time budget tracking, variance reporting, and value engineering to prevent overruns." },
      { label: "Contractor Management",    desc: "We coordinate all sub-contractors, track deliverables, and resolve site conflicts proactively." },
      { label: "Quality Audits",           desc: "Regular QC checks at every milestone to ensure design specifications are met precisely." },
      { label: "Handover Management",      desc: "Thorough snagging, defect resolution, and organised handover with full documentation." },
    ],
  },
];

// ── Services Tab Component ───────────────────────────────────────────────────
function HomeServicesTab() {
  const [active, setActive] = useState(0);
  const svc = SERVICES_TAB[active];

  return (
    <div className="bg-white px-10 lg:px-20 py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="flex flex-col gap-3">
            <SectionLabel>SERVICES</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">
              Our <span className="text-[#f7a92c]">Service Solutions</span>
            </p>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7] max-w-[320px] text-right">
            Everything your property needs, from planning and construction to final handover and imports.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-stretch h-auto lg:h-[580px]">
          {/* Left: tabs */}
          <div className="flex flex-col gap-2 w-full lg:w-[440px] shrink-0 justify-between">
            {SERVICES_TAB.map((s, i) => (
              <button
                key={s.slug}
                onClick={() => setActive(i)}
                className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl text-left transition-all duration-200 ${
                  active === i
                    ? "bg-[#f7a92c] shadow-[0_4px_20px_rgba(247,169,44,0.35)]"
                    : "bg-[#f5f6f8] hover:bg-[#eef0f3]"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span style={{ fontFamily: "'Sora', sans-serif" }} className={`font-extrabold text-base ${active === i ? "text-white" : "text-[#aaa]"}`}>
                    {s.number}
                  </span>
                  <span style={{ fontFamily: "'Sora', sans-serif" }} className={`font-bold text-base ${active === i ? "text-white" : "text-[#252525]"}`}>
                    {s.title}
                  </span>
                </div>
                <div className={`flex items-center justify-center size-8 rounded-full shrink-0 ${active === i ? "bg-white" : "bg-[#e0e0e0]"}`}>
                  <svg className={`size-4 ${active === i ? "text-[#f7a92c]" : "text-[#888]"}`} fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
          {/* Right: detail */}
          <div className="flex-1 bg-[#f5f6f8] rounded-3xl overflow-hidden flex flex-col">
            <div className="relative h-[220px] overflow-hidden shrink-0">
              <img key={svc.img} alt={svc.title} className="absolute inset-0 size-full max-w-none object-cover transition-opacity duration-300" src={svc.img} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]" />
            </div>
            <div className="flex flex-col gap-4 p-8">
              {svc.features.map((f) => (
                <div key={f.label} className="flex gap-2">
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm leading-[1.7]">
                    <span className="font-bold text-[#f7a92c]">{f.label}:</span>{" "}
                    <span className="text-[#454545]">{f.desc}</span>
                  </p>
                </div>
              ))}
              <NavLink to={`/services/${svc.slug}`} className="flex items-center gap-2 w-fit mt-2 text-sm font-semibold text-[#f7a92c] hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
                Explore {svc.title} →
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── HomePage ─────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <div className="relative h-[680px] flex items-center overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgHeroSection} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(33,26,18,0.8)] to-[rgba(33,26,18,0)]" />
        <div className="relative z-10 flex flex-col gap-4 p-12 max-w-[802px]">
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white tracking-[-1.12px]">
            <p className="text-[64px] leading-tight mb-0">Complete Property</p>
            <p className="text-[64px] leading-tight mb-0">Solutions,</p>
            <p className="text-[64px] leading-tight text-[#f7a92c]">Under One Roof</p>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-medium text-[#e7e7e7] text-base leading-6 max-w-[576px]">
            Building better spaces, stronger structures and smarter solutions for a better tomorrow. Ideas to Execution.
          </p>
        </div>
        <div className="absolute bottom-12 right-12 backdrop-blur-[6px] bg-[rgba(255,248,244,0.9)] rounded-2xl p-6 flex flex-col gap-2 max-w-[384px] shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)]">
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-semibold text-[#252525] text-xl leading-6">Start Your Project</p>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-6 pb-2">
            From initial concepts to final handover, we manage every detail with precision.
          </p>
          <a href="/contact" className="bg-[#f7a92c] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 font-semibold text-xl w-full hover:bg-[#e09920] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
            Get Started
            <img alt="" className="size-[9px] object-contain" src={imgArrow} />
          </a>
        </div>
      </div>

      {/* ── About snippet ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-[72px] items-center">
          <div className="flex flex-col gap-5 w-full lg:w-[640px] shrink-0">
            <div className="flex flex-col gap-2">
              <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-bold text-[#454545] text-base tracking-[1.2px] uppercase">ABOUT US</p>
              <div className="bg-[#f7a92c] h-1 rounded-full w-10" />
              <div className="pt-2">
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
                  Professional <span className="text-[#f7a92c]">Property Solutions</span>,
                </p>
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">Every Time</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-[15px] leading-[1.6] text-justify">
              Rochan Ideas Pvt. Ltd. was established with a simple vision—to make construction and property-related services easy, reliable, and accessible for everyone. We bring a wide range of services together under one roof including construction, engineering, interiors, UV wall printing, home inspections, project management, trading, import &amp; export, e-commerce, and related business solutions.
            </p>
            <div className="flex flex-col gap-3">
              {["Quality Assured Materials & Execution", "Transparent Communication & Trust", "Customer-Focused End-to-End Delivery"].map((item) => (
                <div key={item} className="flex gap-3 items-center">
                  <img alt="" className="size-5 shrink-0 object-contain" src={imgCheck} />
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-base leading-6">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5">
              {[
                { bg: "#f7a92c", icon: imgAward,     title: "Proven Expertise",   desc: "Quality solutions delivered across every service line with extreme precision." },
                { bg: "#1565c0", icon: imgBriefcase,  title: "Complete Solutions",  desc: "One strategic partner for construction, interiors, export and way beyond." },
              ].map((card) => (
                <div key={card.title} className="bg-[#f0f0f0] flex-1 flex flex-col gap-3 p-5 rounded-xl">
                  <div className="flex items-center justify-center p-2 rounded-lg size-9 shrink-0" style={{ background: card.bg }}>
                    <img alt="" className="size-4 object-contain" src={card.icon} />
                  </div>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">{card.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[13px] leading-[1.5]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 gap-4 min-w-0">
            <div className="flex flex-col gap-4 flex-1 pb-8">
              <div className="h-48 relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)] overflow-hidden">
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAbout1} />
              </div>
              <div className="h-64 relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)] overflow-hidden">
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAbout2} />
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1 pt-8">
              <div className="h-64 relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)] overflow-hidden">
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAbout3} />
              </div>
              <div className="h-48 relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)] overflow-hidden">
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAbout4} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Why Choose Us ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14 border-t border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="text-center">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[28px] leading-tight">
              Why Choose <span className="text-[#f7a92c]">Rochan Ideas?</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "✅", color: "#f7a92c", bg: "#fff8ec", title: "Quality Assured",   desc: "Every project meets strict quality standards before handover — no shortcuts, ever." },
              { icon: "💬", color: "#1565c0", bg: "#eef4ff", title: "Full Transparency", desc: "Clear communication, honest pricing, and zero hidden costs throughout your project." },
              { icon: "⏱️", color: "#f2761e", bg: "#fff3ec", title: "On-Time Delivery", desc: "We plan carefully and execute efficiently to deliver your project right on schedule." },
              { icon: "🤝", color: "#2e8b3d", bg: "#edf7ef", title: "Customer First",   desc: "Your satisfaction is our top priority. We listen, adapt, and go the extra mile for you." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 flex flex-col gap-3 border border-[#f0f0f0] hover:shadow-lg transition-shadow"
                style={{ background: item.bg }}
              >
                <div
                  className="size-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: item.color + "22" }}
                >
                  {item.icon}
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif", color: item.color }} className="font-bold text-base">
                  {item.title}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[13px] leading-[1.65]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mission / Vision preview ── */}
      <div className="bg-[#0e0e10] px-10 lg:px-20 py-14 flex flex-col gap-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-3">
          <SectionLabel light>OUR PURPOSE</SectionLabel>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-[38px] leading-tight">
            Driving Change with a Solid Shared Mission
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-10">
          <div className="flex-1 bg-[rgba(37,37,37,0.8)] border border-[#2e2e32] rounded-[20px] p-10 flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="bg-[#f2761e] flex items-center justify-center rounded-3xl size-12 shrink-0">
                <img alt="" className="size-5 object-contain" src={imgTarget} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-2xl">Our Mission</p>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-white text-base leading-[1.6]">
              To simplify construction and property-related services by providing complete, high-quality, and innovative solutions under one trusted brand.
            </p>
            <div className="flex flex-col gap-3.5">
              {["Create beautiful interior and wall décor solutions", "Deliver quality construction and engineering services", "Ensure quality through professional home inspections", "Provide reliable trading, import & export, and e-commerce services", "Build lasting relationships through honesty and customer satisfaction"].map((t) => (
                <CheckItem key={t} text={t} />
              ))}
            </div>
          </div>
          <div className="flex-1 bg-[rgba(37,37,37,0.8)] border border-[#2e2e32] rounded-[20px] p-10 flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="bg-[#1565c0] flex items-center justify-center rounded-3xl size-12 shrink-0">
                <img alt="" className="size-5 object-contain" src={imgEye} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-2xl">Our Vision</p>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-white text-base leading-[1.6]">
              To become a trusted and innovative company providing complete solutions for construction, interiors, inspections, trading, import &amp; export, and e-commerce—making it easier for people to build, improve, and manage their homes and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* ── Services Tab ── */}
      <HomeServicesTab />

      {/* ── Projects preview ── */}
      <div className="bg-white px-10 lg:px-20 py-14 flex flex-col gap-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-4">
          <SectionLabel>OUR WORK</SectionLabel>
          <div className="flex items-center justify-between gap-8">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">
              Explore Our <span className="text-[#f7a92c]">Completed Projects</span>
            </p>
            <NavLink to="/projects" className="text-[#f7a92c] text-sm font-semibold hover:underline whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif" }}>
              View All Projects →
            </NavLink>
          </div>
        </div>
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-3 gap-6" style={{ gridTemplateRows: "260px 260px" }}>
          {[
            { src: imgAbout1,         label: "Wallstory Interiors",   desc: "Bespoke interior design project featuring UV wall printing, custom furniture, and signature ambient lighting." },
            { src: imgAbout2,         label: "Nellore Site Project",  desc: "Residential construction project featuring modern structural design with reinforced concrete framework." },
            { src: imgAbout3,         label: "Skyline Residency",     desc: "High-rise residential complex built with precision engineering and premium facade finishing." },
            { src: imgPortfolioItem2, label: "Modern Villa",          desc: "Luxury private villa with open-plan interiors, pool deck, and bespoke landscape integration." },
            { src: imgPortfolioItem,  label: "Commercial Complex",    desc: "Multi-tenant commercial development delivered on time with full project management oversight." },
            { src: imgPortfolioItem1, label: "Heritage Restoration",  desc: "Sensitive restoration of a heritage structure preserving original character while meeting modern codes." },
          ].map((item) => (
            <div key={item.label} className="relative rounded-2xl overflow-hidden flex items-end p-6 group cursor-pointer">
              <img alt="" className="absolute inset-0 size-full max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-110" src={item.src} />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.55)] group-hover:to-[rgba(0,0,0,0.78)] transition-all duration-500" />
              <div className="relative flex flex-col gap-1.5">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-xl leading-tight">{item.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#e0e0e0] text-sm leading-[1.5] line-clamp-2 max-h-0 opacity-0 overflow-hidden group-hover:max-h-[60px] group-hover:opacity-100 transition-all duration-400 ease-out">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner />

      {/* ── Testimonials ── */}
      <div className="bg-white px-10 lg:px-20 py-14 flex flex-col gap-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-4">
          <SectionLabel>TESTIMONIALS</SectionLabel>
          <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
            Impressive Words From Our Clients
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-6">
          {[
            { quote: '"Rochan Ideas handled both the foundation civil works and custom interior decorations flawlessly. Their wall-printing is stunning!"', name: "Rajesh Sekhar", avatar: imgAvatar },
            { quote: '"The home inspection team saved us millions in structural flaws before purchase. Absolute transparency and thorough testing."', name: "Sowmya K.", avatar: imgAvatar1 },
            { quote: '"Excellent import/export coordination. Handled our luxury bath fittings import with precision. True professional team."', name: "Karan Johar", avatar: imgAvatar2 },
          ].map((t) => (
            <div key={t.name} className="flex-1 bg-[#f5f6f8] rounded-2xl p-8 flex flex-col gap-5">
              <StarRow />
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="italic text-[#5b5f66] text-sm leading-[1.5] flex-1">{t.quote}</p>
              <div className="flex gap-3 items-center">
                <img alt={t.name} className="size-10 rounded-full object-cover shrink-0" src={t.avatar} />
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#0e0e10] text-sm">{t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bento image grid ── */}
      <div className="w-full h-[800px] relative overflow-hidden rounded-3xl mx-auto max-w-[1440px]">
        <div className="absolute left-20 top-0 w-[340px] h-[800px] rounded-xl overflow-hidden">
          <div className="absolute left-[-150px] top-0 w-[640px] h-[800px]">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgBentoBook} />
          </div>
        </div>
        <div className="absolute left-[444px] top-0 w-[430px] h-[388px] rounded-xl overflow-hidden">
          <div className="absolute left-[-43px] top-0 w-[517px] h-[388px]">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgBentoIpad} />
          </div>
        </div>
        <div className="absolute left-[898px] top-0 w-[462px] h-[388px] rounded-xl overflow-hidden">
          <div className="absolute left-[-11px] top-0 w-[485px] h-[388px]">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgBentoBillboard} />
          </div>
        </div>
        <div className="absolute left-[444px] top-[412px] w-[289px] h-[388px] rounded-xl overflow-hidden">
          <div className="absolute left-[-10px] top-0 w-[310px] h-[388px]">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgBentoLaptop} />
          </div>
        </div>
        <div className="absolute left-[757px] top-[412px] w-[289px] h-[388px] rounded-xl overflow-hidden">
          <div className="absolute left-[-114px] top-0 w-[517px] h-[388px]">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgBentoTote} />
          </div>
        </div>
        <div className="absolute left-[1070px] top-[412px] w-[290px] h-[388px] rounded-xl overflow-hidden">
          <div className="absolute left-[-113px] top-0 w-[517px] h-[388px]">
            <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgBentoChair} />
          </div>
        </div>
      </div>
    </>
  );
}
