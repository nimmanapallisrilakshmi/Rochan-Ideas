import { BrowserRouter, Routes, Route, NavLink, useLocation, useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const A = `${import.meta.env.BASE_URL.replace(/\/$/, "")}/assets`;
const imgLogo           = `${A}/283bb.png`;
const imgHeroSection    = `${A}/89d03.png`;
const imgAbout1         = `${A}/8e6b7.png`;
const imgAbout2         = `${A}/d30ce.png`;
const imgAbout3         = `${A}/ebe99.png`;
const imgAbout4         = `${A}/5285e.png`;
const imgPortfolioItem  = `${A}/a6451.png`;
const imgPortfolioItem1 = `${A}/99ef5.png`;
const imgPortfolioItem2 = `${A}/a4f90.png`;
const imgCtaBanner      = `${A}/cbde1.png`;
const imgContactHero    = `${A}/contact.jpg`;
const imgServicesHero   = `${A}/services.jpg`;
const imgProjectsHero   = `${A}/project.jpg`;
const imgAboutHero      = `${A}/about.jpg`;
const imgMissionVisionHero = `${A}/vm.jpg`;
const imgIconHomeInterior = `${A}/icon1_home_interior.png`;
const imgIconConstruction = `${A}/icon2_construction.png`;
const imgIconInspection   = `${A}/icon3_property_search.png`;
const imgIconTrading      = `${A}/icon4_import_export.png`;
const imgIconCreativeDesign = `${A}/icon5_creative_design.png`;
const imgIconEcommerce    = `${A}/icon6_ecommerce.png`;
const imgAvatar         = `${A}/91e20.png`;
const imgAvatar1        = `${A}/7e474.png`;
const imgAvatar2        = `${A}/8342f.png`;
const imgBentoBook      = `${A}/bd0fb.png`;
const imgBentoIpad      = `${A}/470f5.png`;
const imgBentoBillboard = `${A}/fbd0c.png`;
const imgBentoLaptop    = `${A}/a3742.png`;
const imgBentoTote      = `${A}/25923.png`;
const imgBentoChair     = `${A}/845d6.png`;
const imgArrow          = `${A}/0ecdd.svg`;
const imgCheck          = `${A}/c775f.svg`;
const imgAward          = `${A}/12bc9.svg`;
const imgBriefcase      = `${A}/806dd.svg`;
const imgTarget         = `${A}/c2063.svg`;
const imgEye            = `${A}/4850a.svg`;
const imgPhoneCall      = `${A}/940a3.svg`;
const imgStar           = `${A}/73fdf.svg`;
const imgMail           = `${A}/08458.svg`;
const imgPhone          = `${A}/f3763.svg`;
const imgLinkedin       = `${A}/48f3e.svg`;
const imgInstagram      = `${A}/ed4bd.svg`;

function StarRow() {
  return (
    <div className="flex gap-2 items-center">
      {[0,1,2,3,4].map(i => (
        <div key={i} className="size-[14px] flex items-center justify-center">
          <img alt="★" className="size-[10px]" src={imgStar} />
        </div>
      ))}
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start w-full">
      <div className="mt-0.5 bg-[#2e8b3d] rounded-full size-3 shrink-0" />
      <p style={{ fontFamily: "'Inter', sans-serif" }} className="flex-1 font-medium text-[#f6f6f6] text-sm leading-normal">{text}</p>
    </div>
  );
}

function SectionLabel({ light, children }: { light?: boolean; children: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p style={{ fontFamily: "'Inter', sans-serif" }}
        className={`font-bold text-base tracking-[1.5px] uppercase ${light ? "text-[#e7e7e7]" : "text-[#454545]"}`}>
        {children}
      </p>
      <div className="bg-[#f7a92c] h-[3px] rounded-[2px] w-10" />
    </div>
  );
}

const navLinks = [
  { label: "Home",             to: "/" },
  { label: "About",            to: "/about" },
  { label: "Mission & Vision", to: "/mission-vision" },
  { label: "Services",         to: "/services" },
  { label: "Projects",         to: "/projects" },
  { label: "Contact",          to: "/contact" },
];

function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-[8px] bg-[rgba(250,250,250,0.95)] border-b border-[rgba(215,195,174,0.3)] shadow-[0_1px_8px_0_rgba(0,0,0,0.07)]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-3">
        <NavLink to="/" className="flex gap-3 items-center">
          <div className="relative size-14 overflow-hidden shrink-0">
            <img alt="Logo" className="absolute h-[121.62%] left-[-38.6%] top-[-2.49%] w-[182.42%] max-w-none" src={imgLogo} />
          </div>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-bold text-[32px] leading-none whitespace-nowrap">
            <span className="text-[#f9ad35]">Rochan</span>
            <span className="text-[#835500]"> </span>
            <span className="text-[#78c722]">Ideas</span>
          </p>
        </NavLink>
        <nav className="hidden lg:flex items-center">
          {navLinks.map(link => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {({ isActive }) => (
                <div className={`px-3 py-1 ${isActive ? "border-b-2 border-[#f7a92c]" : ""}`}>
                  <span style={{ fontFamily: "'Inter', sans-serif" }}
                    className={`text-base leading-[1.6] transition-colors ${isActive ? "font-bold text-[#f7a92c]" : "text-[#5d5d5d] hover:text-[#f7a92c] cursor-pointer"}`}>
                    {link.label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>
        <a href="https://wa.me/916303074930" target="_blank" rel="noopener noreferrer"
          className="bg-[#f7a92c] text-white px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap hover:bg-[#e09920] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          WhatsApp
        </a>
      </div>
    </div>
  );
}



function Footer() {
  return (
    <div className="bg-[#0e0e10] px-10 lg:px-20 pt-14 pb-8 flex flex-col gap-10">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-12">
        {/* Brand column */}
        <div className="flex-1 max-w-[300px] flex flex-col gap-5">
          <div className="flex gap-3 items-center">
            <div className="relative size-12 overflow-hidden shrink-0">
              <img alt="Logo" className="absolute h-[121.62%] left-[-38.6%] top-[-2.49%] w-[182.42%] max-w-none" src={imgLogo} />
            </div>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-bold text-[26px] leading-none whitespace-nowrap">
              <span className="text-[#f9ad35]">Rochan</span>
              <span className="text-[#78c722]"> Ideas</span>
            </p>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#999] text-sm leading-[1.75]">
            Building homes, bespoke interiors, structural inspections, and long-term trust — under one roof. Dedicated to high architectural and execution standards.
          </p>
        </div>
        {/* Quick Links */}
        <div className="flex-1 flex flex-col gap-5">
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white text-sm tracking-[1.5px] uppercase">QUICK LINKS</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Home",        to: "/" },
              { label: "About",       to: "/about" },
              { label: "Services",    to: "/services" },
              { label: "Our Mission", to: "/mission-vision" },
              { label: "Contact Us",  to: "/contact" },
            ].map(l => (
              <NavLink key={l.label} to={l.to} end={l.to === "/"}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className={({ isActive }) => `text-sm font-medium transition-colors w-fit ${isActive ? "text-[#f7a92c]" : "text-[#aaa] hover:text-white"}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* Services */}
        <div className="flex-1 flex flex-col gap-5">
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white text-sm tracking-[1.5px] uppercase">SERVICES</p>
          <div className="flex flex-col gap-3">
            {[
              { label: "Construction & Engineering",  to: "/services/construction" },
              { label: "Interiors & UV Wall Printing", to: "/services/interiors" },
              { label: "Home Quality Inspections",    to: "/services/inspections" },
              { label: "Trading, Import & Export",    to: "/services/trading" },
              { label: "E-Commerce Services",         to: "/services/ecommerce" },
            ].map(l => (
              <NavLink key={l.label} to={l.to}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className={({ isActive }) => `text-sm font-medium transition-colors w-fit ${isActive ? "text-[#f7a92c]" : "text-[#aaa] hover:text-white"}`}>
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
        {/* Get In Touch */}
        <div className="flex-1 max-w-[300px] flex flex-col gap-5">
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white text-sm tracking-[1.5px] uppercase">GET IN TOUCH</p>
          <div className="flex flex-col gap-4">
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm leading-[1.6]">Gomati Nagar, Nellore – 524003, Andhra Pradesh</p>
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center size-9 rounded-full shrink-0 bg-[#1565c0]">
                <img alt="" className="size-4 object-contain" src={imgMail} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-medium">rochanideas@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center size-9 rounded-full shrink-0 bg-[#0891b2]">
                <img alt="" className="size-4 object-contain" src={imgMail} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-medium">wallstory4all@gmail.com</p>
            </div>
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center size-9 rounded-full shrink-0 bg-[#f7a92c]">
                <img alt="" className="size-4 object-contain" src={imgPhone} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-bold">+91-6303074930</p>
            </div>
          </div>
        </div>
      </div>
      {/* Social + copyright */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-5">
        {/* Social row — above the line */}
        <div className="flex flex-wrap gap-8 items-center">
          {[
            { icon: imgLinkedin,  label: "Rochan Ideas Pvt Ltd", href: "https://www.linkedin.com" },
            { icon: imgInstagram, label: "@rochanideas",         href: "https://www.instagram.com/rochanideas?igsi=MTUxMmprcjZkeWRo" },
            { icon: imgInstagram, label: "@wallstory4all",        href: "https://www.instagram.com/wallstory4all?igsi=MXh3dXM1bjMwN3RsNw" },
          ].map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 items-center cursor-pointer group">
              <div className="bg-[#1e1e22] flex items-center justify-center rounded-lg size-9 shrink-0 group-hover:bg-[#f7a92c] transition-colors duration-200">
                <img alt="" className="size-5 object-contain" src={s.icon} />
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm whitespace-nowrap group-hover:text-white transition-colors duration-200">{s.label}</p>
            </a>
          ))}
        </div>
        {/* Divider line */}
        <div className="border-t border-[#1e1e22]" />
        {/* Copyright — centered */}
        <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#555] text-xs text-center pb-2">
          © 2026 Rochan Ideas Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}

function CtaBanner() {
  return (
    <div className="relative flex items-center justify-center px-10 lg:px-20 py-[100px] overflow-hidden">
      <div className="absolute inset-0">
        <img alt="" className="absolute size-full max-w-none object-cover" src={imgCtaBanner} />
        <div className="absolute inset-0 bg-[rgba(14,14,16,0.75)]" />
      </div>
      <div className="relative flex flex-col gap-6 items-center max-w-[800px] w-full">
        <SectionLabel light>GET IN TOUCH</SectionLabel>
        <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-white text-[42px] text-center leading-[1.2]">
          Need Reliable Construction &amp; Property Services?
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#d1d1d1] text-base leading-[1.6] text-center">
          From initial planning and blueprint analysis to final high-end handover, our team is ready to bring your project to life.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a href="/contact" className="bg-[#f7a92c] text-white px-7 py-3.5 rounded-[99px] font-semibold text-lg whitespace-nowrap hover:bg-[#e09920] transition-colors" style={{ fontFamily: "'Sora', sans-serif" }}>
            Book a Consultation
          </a>
          <a href="tel:+916303074930" className="bg-[#1565c0] flex items-center justify-center rounded-[25px] size-[50px] hover:bg-[#1255a8] transition-colors">
            <img alt="" className="size-4 object-contain" src={imgPhoneCall} />
          </a>
        </div>
      </div>
    </div>
  );
}

function PageHero({ bg, title, subtitle }: { bg: string; title: string; subtitle: string }) {
  return (
    <div className="relative h-[340px] flex items-center overflow-hidden">
      <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={bg} />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,14,16,0.85)] to-[rgba(14,14,16,0.3)]" />
      <div className="relative z-10 flex flex-col gap-3 px-10 lg:px-20 max-w-[800px]">
        <SectionLabel light>{subtitle}</SectionLabel>
        <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          className="font-extrabold text-white text-[52px] leading-tight tracking-[-1px]">
          {title}
        </h1>
      </div>
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

// ══════════════════════════════════════════════════════════════════════════════
// COMPONENT: HomeServicesTab (interactive service tab on home page)
// ══════════════════════════════════════════════════════════════════════════════
function HomeServicesTab() {
  const services = [
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
        { label: "Sanitaryware & Fittings",desc: "Premium bathroom fittings, toilets, and accessories from global brands." },
        { label: "Tiles & Flooring",        desc: "Ceramic, vitrified, marble, wooden, and vinyl flooring in a wide range of options." },
        { label: "Import Coordination",     desc: "Full documentation, customs clearance, and last-mile logistics handled for you." },
        { label: "Export Services",         desc: "We help Indian manufacturers reach international buyers with complete compliance support." },
      ],
    },
    {
      number: "05",
      title: "E-Commerce Services",
      slug: "ecommerce",
      img: imgPortfolioItem,
      features: [
        { label: "Store Setup",             desc: "End-to-end setup on Amazon, Flipkart, Shopify, WooCommerce, or a custom storefront." },
        { label: "Product Listings",         desc: "SEO-optimised titles, descriptions, images, and categories for maximum visibility." },
        { label: "Digital Marketing",        desc: "Google Ads, social media, influencer campaigns, and email marketing to drive traffic." },
        { label: "Order Management",         desc: "Integrated inventory tracking, order processing, and stockout prevention systems." },
        { label: "Growth Analytics",          desc: "Monthly performance reports and data-driven strategies to continuously grow sales." },
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

  const [active, setActive] = useState(0);
  const svc = services[active];

  return (
    <div className="bg-white px-10 lg:px-20 py-16">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Header row */}
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
        {/* Two-column tab layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch h-auto lg:h-[580px]">
          {/* Left: service tabs */}
          <div className="flex flex-col gap-2 w-full lg:w-[440px] shrink-0 justify-between">
            {services.map((s, i) => (
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
                  <span
                    style={{ fontFamily: "'Sora', sans-serif" }}
                    className={`font-extrabold text-base ${
                      active === i ? "text-white" : "text-[#aaa]"
                    }`}
                  >
                    {s.number}
                  </span>
                  <span
                    style={{ fontFamily: "'Sora', sans-serif" }}
                    className={`font-bold text-base ${
                      active === i ? "text-white" : "text-[#252525]"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
                <div
                  className={`flex items-center justify-center size-8 rounded-full shrink-0 ${
                    active === i ? "bg-white" : "bg-[#e0e0e0]"
                  }`}
                >
                  <svg className={`size-4 ${ active === i ? "text-[#f7a92c]" : "text-[#888]" }`}
                    fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 4l4 4-4 4" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
          {/* Right: detail panel */}
          <div className="flex-1 bg-[#f5f6f8] rounded-3xl overflow-hidden flex flex-col">
            {/* Image — fixed height so features area always has consistent space */}
            <div className="relative h-[220px] overflow-hidden shrink-0">
              <img
                key={svc.img}
                alt={svc.title}
                className="absolute inset-0 size-full max-w-none object-cover transition-opacity duration-300"
                src={svc.img}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.4)]" />
            </div>
            {/* Features */}
            <div className="flex flex-col gap-4 p-8">
              {svc.features.map(f => (
                <div key={f.label} className="flex gap-2">
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm leading-[1.7]">
                    <span className="font-bold text-[#f7a92c]">{f.label}:</span>
                    {" "}
                    <span className="text-[#454545]">{f.desc}</span>
                  </p>
                </div>
              ))}
              {/* Link to detail page */}
              <NavLink
                to={`/services/${svc.slug}`}
                className="flex items-center gap-2 w-fit mt-2 text-sm font-semibold text-[#f7a92c] hover:underline"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Explore {svc.title} →
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <div className="relative h-[680px] flex items-center overflow-hidden shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgHeroSection} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(33,26,18,0.8)] to-[rgba(33,26,18,0)]" />
        <div className="relative z-10 flex flex-col gap-4 p-12 max-w-[802px]">
          <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white tracking-[-1.12px]">
            <p className="text-[64px] leading-tight mb-0">Complete Property</p>
            <p className="text-[64px] leading-tight mb-0">Solutions,</p>
            <p className="text-[64px] leading-tight text-[#f7a92c]">Under OneRoof</p>
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
              {["Quality Assured Materials & Execution","Transparent Communication & Trust","Customer-Focused End-to-End Delivery"].map(item => (
                <div key={item} className="flex gap-3 items-center">
                  <img alt="" className="size-5 shrink-0 object-contain" src={imgCheck} />
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-base leading-6">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-5">
              <div className="bg-[#f0f0f0] flex-1 flex flex-col gap-3 p-5 rounded-xl">
                <div className="bg-[#f7a92c] flex items-center justify-center p-2 rounded-lg size-9 shrink-0">
                  <img alt="" className="size-4 object-contain" src={imgAward} />
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">Proven Expertise</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[13px] leading-[1.5]">Quality solutions delivered across every service line with extreme precision.</p>
              </div>
              <div className="bg-[#f0f0f0] flex-1 flex flex-col gap-3 p-5 rounded-xl">
                <div className="bg-[#1565c0] flex items-center justify-center p-2 rounded-lg size-9 shrink-0">
                  <img alt="" className="size-4 object-contain" src={imgBriefcase} />
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">Complete Solutions</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[13px] leading-[1.5]">One strategic partner for construction, interiors, export and way beyond.</p>
              </div>
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
      <div className="bg-[#fafafa] px-10 lg:px-20 py-12 border-t border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "1.2k+", label: "Happy Clients" },
            { value: "5",    label: "Service Categories" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-1 items-center gap-10">
              {i > 0 && <div className="bg-[#d1d5db] h-[60px] w-px shrink-0" />}
              <div className="flex-1 flex flex-col gap-1.5 items-center">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-[#1565c0] text-[48px] tracking-[-1px] leading-normal">{stat.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-[#454545] text-base leading-normal">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
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
              <CheckItem text="Create beautiful interior and wall décor solutions" />
              <CheckItem text="Deliver quality construction and engineering services" />
              <CheckItem text="Ensure quality through professional home inspections" />
              <CheckItem text="Provide reliable trading, import & export, and e-commerce services" />
              <CheckItem text="Build lasting relationships through honesty and customer satisfaction" />
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
      {/* Interactive Services Section */}
      <HomeServicesTab />
      {/* Projects Section on Home */}
      <div className="bg-white px-10 lg:px-20 py-14 flex flex-col gap-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-4">
          <SectionLabel>OUR WORK</SectionLabel>
          <div className="flex items-center justify-between gap-8">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">Explore Our <span className="text-[#f7a92c]">Completed Projects</span></p>
            <NavLink to="/projects"
              className="text-[#f7a92c] text-sm font-semibold hover:underline whitespace-nowrap"
              style={{ fontFamily: "'Inter', sans-serif" }}>View All Projects →</NavLink>
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
          ].map(item => (
            <div key={item.label} className="relative rounded-2xl overflow-hidden flex items-end p-6 group cursor-pointer">
              {/* Image with zoom */}
              <img
                alt=""
                className="absolute inset-0 size-full max-w-none object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                src={item.src}
              />
              {/* Gradient — deepens on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[rgba(0,0,0,0.55)] group-hover:to-[rgba(0,0,0,0.78)] transition-all duration-500" />
              {/* Text block */}
              <div className="relative flex flex-col gap-1.5">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-xl leading-tight">
                  {item.label}
                </p>
                {/* Description: hidden by default, slides + fades in on hover */}
                <p
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-[#e0e0e0] text-sm leading-[1.5] line-clamp-2
                    max-h-0 opacity-0 overflow-hidden
                    group-hover:max-h-[60px] group-hover:opacity-100
                    transition-all duration-400 ease-out"
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CtaBanner />
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
          ].map(t => (
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

function AboutPage() {
  return (
    <>
      <PageHero bg={imgAboutHero} title="About Rochan Ideas" subtitle="WHO WE ARE" />
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex flex-col gap-6 flex-1">
            <SectionLabel>OUR STORY</SectionLabel>
            <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
              Professional <span className="text-[#f7a92c]">Property Solutions</span>, Every Time
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-[15px] leading-[1.7] text-justify">
              Rochan Ideas Pvt. Ltd. was established with a simple vision—to make construction and property-related services easy, reliable, and accessible for everyone. We bring a wide range of services together under one roof including construction, engineering, interiors, UV wall printing, home inspections, project management, trading, import &amp; export, e-commerce, and related business solutions. Our goal is to deliver quality, innovation, transparency, and customer satisfaction in everything we do.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-[15px] leading-[1.7] text-justify">
              Based in Nellore, Andhra Pradesh, we are committed to transforming the way people experience construction and property services. Every project we take on is handled with the same level of dedication — whether it is a small home renovation or a large-scale commercial development.
            </p>
            <div className="flex flex-col gap-3">
              {["Quality Assured Materials & Execution","Transparent Communication & Trust","Customer-Focused End-to-End Delivery","On-Time Project Delivery Guaranteed"].map(item => (
                <div key={item} className="flex gap-3 items-center">
                  <img alt="" className="size-5 shrink-0 object-contain" src={imgCheck} />
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-base leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-1 gap-4 min-w-0">
            <div className="flex flex-col gap-4 flex-1 pb-8">
              <div className="h-52 relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)] overflow-hidden">
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
              <div className="h-52 relative rounded-2xl shadow-[0px_10px_30px_0px_rgba(20,20,20,0.05)] overflow-hidden">
                <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAbout4} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] px-10 lg:px-20 py-12 border-t border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "1.2k+", label: "Happy Clients" },
            { value: "5",    label: "Service Categories" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-1 items-center gap-10">
              {i > 0 && <div className="bg-[#d1d5db] h-[60px] w-px shrink-0" />}
              <div className="flex-1 flex flex-col gap-1.5 items-center">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-[#1565c0] text-[48px] tracking-[-1px] leading-normal">{stat.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-[#454545] text-base leading-normal">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>CORE VALUES</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">What We Stand For</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { icon: imgAward,     color: "#f7a92c", title: "Quality First",         desc: "We never compromise on the quality of materials or execution. Every project meets our high standards before delivery." },
              { icon: imgBriefcase, color: "#1565c0", title: "Complete Solutions",     desc: "From foundation to finishing, from design to delivery—we are your single point of contact for all property needs." },
              { icon: imgTarget,    color: "#f2761e", title: "Customer at the Centre", desc: "Your satisfaction drives every decision we make. We listen, adapt, and deliver what you truly need." },
            ].map(v => (
              <div key={v.title} className="bg-[#f0f0f0] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center rounded-xl size-12" style={{ background: v.color }}>
                  <img alt="" className="size-6 object-contain" src={v.icon} />
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-xl">{v.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[15px] leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14 flex flex-col gap-12">
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
          ].map(t => (
            <div key={t.name} className="flex-1 bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
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
      <CtaBanner />
    </>
  );
}

function MissionVisionPage() {
  const missionPoints = [
    "Create beautiful interior and wall décor solutions",
    "Deliver quality construction and engineering services",
    "Ensure quality through professional home inspections",
    "Provide reliable trading, import & export, and e-commerce services",
    "Build lasting relationships through honesty and customer satisfaction",
    "Foster a culture of innovation and continuous improvement",
  ];
  const visionPoints = [
    "Become the most trusted property solutions brand in India",
    "Expand our services to every major city across the country",
    "Set new benchmarks for quality and customer experience",
    "Enable every family to build their dream home affordably",
  ];
  const values = [
    { icon: imgAward,     color: "#f7a92c", title: "Integrity",    desc: "We operate with complete transparency and honesty in every interaction." },
    { icon: imgBriefcase, color: "#1565c0", title: "Innovation",   desc: "We constantly look for better, smarter ways to serve our clients." },
    { icon: imgTarget,    color: "#f2761e", title: "Excellence",   desc: "We hold ourselves to the highest standards in every project we deliver." },
    { icon: imgEye,       color: "#2e8b3d", title: "Inclusivity",  desc: "Our services are designed to be accessible and affordable for all." },
  ];

  return (
    <>
      <PageHero bg={imgMissionVisionHero} title="Mission & Vision" subtitle="OUR PURPOSE" />
      <div className="bg-[#0e0e10] px-10 lg:px-20 py-16 flex flex-col gap-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-4">
          <SectionLabel light>OUR PURPOSE</SectionLabel>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-[38px] leading-tight max-w-[700px]">
            Driving Change with a Solid Shared Mission
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-base leading-[1.7] max-w-[700px]">
            Every decision we make, every project we take on, every relationship we build — it is all guided by a clear and unwavering purpose that defines who we are and where we are headed.
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-10">
          <div className="flex-1 bg-[rgba(37,37,37,0.8)] border border-[#2e2e32] rounded-[20px] p-10 flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="bg-[#f2761e] flex items-center justify-center rounded-3xl size-14 shrink-0">
                <img alt="" className="size-7 object-contain" src={imgTarget} />
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-2xl">Our Mission</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm">What we do every day</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#e0e0e0] text-base leading-[1.7]">
              To simplify construction and property-related services by providing complete, high-quality, and innovative solutions under one trusted brand — making it easier for individuals and businesses to build, improve, and manage their spaces.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              {missionPoints.map(t => <CheckItem key={t} text={t} />)}
            </div>
          </div>
          <div className="flex-1 bg-[rgba(37,37,37,0.8)] border border-[#2e2e32] rounded-[20px] p-10 flex flex-col gap-6">
            <div className="flex gap-4 items-center">
              <div className="bg-[#1565c0] flex items-center justify-center rounded-3xl size-14 shrink-0">
                <img alt="" className="size-7 object-contain" src={imgEye} />
              </div>
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-white text-2xl">Our Vision</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm">Where we are headed</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#e0e0e0] text-base leading-[1.7]">
              To become a trusted and innovative company providing complete solutions for construction, interiors, inspections, trading, import &amp; export, and e-commerce—making it easier for people to build, improve, and manage their homes and businesses across India.
            </p>
            <div className="flex flex-col gap-4 pt-2">
              {visionPoints.map(t => <CheckItem key={t} text={t} />)}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>CORE VALUES</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">The Principles That Guide Us</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {values.map(v => (
              <div key={v.title} className="bg-[#f5f6f8] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-center rounded-xl size-12" style={{ background: v.color }}>
                  <img alt="" className="size-6 object-contain" src={v.icon} />
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-lg">{v.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[14px] leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] px-10 lg:px-20 py-12 border-y border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "1.2k+", label: "Happy Clients" },
            { value: "5",    label: "Service Categories" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-1 items-center gap-10">
              {i > 0 && <div className="bg-[#d1d5db] h-[60px] w-px shrink-0" />}
              <div className="flex-1 flex flex-col gap-1.5 items-center">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-[#1565c0] text-[48px] tracking-[-1px] leading-normal">{stat.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-[#454545] text-base leading-normal">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <CtaBanner />
    </>
  );
}

function ServicesPage() {
  const services = [
    {
      number: "01",
      color: "#f7a92c",
      slug: "construction",
      title: "Construction & Engineering",
      icon: imgIconConstruction,
      desc: "End-to-end residential and commercial construction services. From structural design and civil works to site management and quality inspection, we handle it all with precision.",
      points: ["Residential Buildings", "Commercial Complexes", "Structural Engineering", "Civil Works & Finishing"],
    },
    {
      number: "02",
      color: "#1565c0",
      slug: "interiors",
      title: "Interiors & UV Wall Printing",
      icon: imgIconHomeInterior,
      desc: "Transform your spaces with our creative interior design services and state-of-the-art UV wall printing technology that brings walls to life with vibrant, durable artwork.",
      points: ["Interior Design & Execution", "UV Wall Printing", "Custom Wall Murals", "Furniture & Décor"],
    },
    {
      number: "03",
      color: "#f2761e",
      slug: "inspections",
      title: "Home Quality Inspections",
      icon: imgIconInspection,
      desc: "Our certified inspectors conduct thorough structural, electrical, and plumbing assessments before you buy, sell, or renovate your property — saving you from costly surprises.",
      points: ["Pre-Purchase Inspections", "Structural Assessment", "Electrical & Plumbing Audit", "Detailed Reports & Recommendations"],
    },
    {
      number: "04",
      color: "#2e8b3d",
      slug: "trading",
      title: "Trading, Import & Export",
      icon: imgIconTrading,
      desc: "We source and supply premium construction materials, sanitaryware, tiles, and fittings from trusted global manufacturers. Competitive pricing, reliable logistics.",
      points: ["Construction Materials", "Sanitaryware & Fittings", "Tiles & Flooring", "Import Coordination"],
    },
    {
      number: "05",
      color: "#7c3aed",
      slug: "ecommerce",
      title: "E-Commerce Services",
      icon: imgIconEcommerce,
      desc: "We help businesses and individuals establish and grow their online presence through our e-commerce consulting, store setup, and digital operations support.",
      points: ["Online Store Setup", "Product Listing & Management", "Digital Marketing Support", "Logistics & Order Fulfilment"],
    },
    {
      number: "06",
      color: "#0891b2",
      slug: "project-management",
      title: "Project Management",
      icon: imgIconCreativeDesign,
      desc: "Comprehensive project management ensuring your construction or renovation project is completed on time, within budget, and to the highest quality standards.",
      points: ["Timeline Planning", "Budget Management", "Contractor Coordination", "Quality Control & Handover"],
    },
  ];

  return (
    <>
      <PageHero bg={imgServicesHero} title="Our Services" subtitle="WHAT WE OFFER" />
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
      <div className="bg-white px-10 lg:px-20 py-6 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map(s => (
            <div key={s.title}
              className="group bg-white border border-[#e8e8e8] rounded-2xl p-8 flex flex-col gap-5 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-300">
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
                {s.points.map(pt => (
                  <div key={pt} className="flex gap-2 items-center">
                    <div className="size-1.5 rounded-full shrink-0" style={{ background: s.color }} />
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm">{pt}</p>
                  </div>
                ))}
              </div>
              {/* Learn More button */}
              <div className="mt-auto pt-2">
                <NavLink
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-2 text-sm font-semibold transition-all group/btn"
                  style={{ fontFamily: "'Inter', sans-serif", color: s.color }}
                >
                  <span className="border-b border-transparent group-hover/btn:border-current transition-all">
                    Learn More
                  </span>
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

// Spotlight cursor section used in ServicesPage
function SpotlightSection() {
  const ref = useRef(null as null | HTMLDivElement);
  const [pos, setPos] = useState({ x: -999, y: -999 });
  const [inside, setInside] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
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
            { color: "#f7a92c", n: "01", title: "One Stop Shop",      desc: "Every property need handled by one trusted team — no juggling multiple vendors." },
            { color: "#1565c0", n: "02", title: "Proven Quality",      desc: "Certified professionals and quality-assured materials on every single project." },
            { color: "#f2761e", n: "03", title: "Transparent Pricing", desc: "No hidden costs. Detailed quotations before work begins, always." },
            { color: "#2e8b3d", n: "04", title: "On-Time Delivery",    desc: "We respect your time. Our projects are completed as per agreed timelines." },
          ].map(w => (
            <div key={w.title}
              className="group bg-[rgba(255,255,255,0.04)] border border-[#2e2e32] rounded-2xl p-8 flex flex-col gap-4 hover:border-[rgba(247,169,44,0.35)] hover:bg-[rgba(255,255,255,0.07)] transition-all duration-300 cursor-default">
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

function ProjectsPage() {
  const projects = [
    { img: imgPortfolioItem2, category: "Construction",       title: "Modern Villa",             location: "Nellore, AP",    year: "2025", desc: "A luxury 4-BHK villa featuring contemporary architecture, smart home integration, and premium finishes throughout." },
    { img: imgPortfolioItem,  category: "Commercial",         title: "Commercial Complex",        location: "Nellore, AP",    year: "2025", desc: "A multi-purpose commercial building with modern retail spaces, offices, and a rooftop terrace for events." },
    { img: imgPortfolioItem1, category: "Heritage",           title: "Heritage Restoration",      location: "Vijayawada, AP", year: "2024", desc: "Sensitive restoration of a 100-year-old heritage building, preserving original architectural elements while modernising the interiors." },
    { img: imgAbout1,         category: "Interiors",          title: "Premium Home Interiors",    location: "Chennai, TN",    year: "2024", desc: "Complete interior design and execution for a high-end apartment, featuring custom furniture and UV wall printing." },
    { img: imgAbout2,         category: "Inspection",         title: "Pre-Purchase Audit",        location: "Hyderabad, TS",  year: "2024", desc: "Comprehensive pre-purchase inspection for a 3-storey residential building, uncovering critical structural defects." },
    { img: imgAbout3,         category: "Construction",       title: "Township Development",      location: "Nellore, AP",    year: "2023", desc: "Large-scale township project comprising 50 residential units with landscaping, utilities, and community amenities." },
  ];

  const categories = ["All", "Construction", "Commercial", "Interiors", "Inspection", "Heritage"];

  return (
    <>
      <PageHero bg={imgProjectsHero} title="Our Projects" subtitle="OUR WORK" />
      <div className="bg-[#fafafa] px-10 lg:px-20 py-12 border-b border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          {[
            { value: "150+", label: "Projects Completed" },
            { value: "6",    label: "Cities Served" },
            { value: "3+",   label: "Years Experience" },
            { value: "100%", label: "On-Time Delivery" },
          ].map((stat, i) => (
            <div key={stat.label} className="flex flex-1 items-center gap-10">
              {i > 0 && <div className="bg-[#d1d5db] h-[60px] w-px shrink-0" />}
              <div className="flex-1 flex flex-col gap-1.5 items-center">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-extrabold text-[#1565c0] text-[48px] tracking-[-1px] leading-normal">{stat.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="font-semibold text-[#454545] text-base leading-normal">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white px-10 lg:px-20 py-8">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>PORTFOLIO</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">
              Explore Our Completed Projects
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <div key={c} className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${i === 0 ? "bg-[#f7a92c] text-white" : "bg-[#f0f0f0] text-[#454545] hover:bg-[#f7a92c] hover:text-white"}`}
                style={{ fontFamily: "'Inter', sans-serif" }}>
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white px-10 lg:px-20 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map(p => (
            <div key={p.title} className="group bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="relative h-[240px] overflow-hidden">
                <img alt={p.title} className="absolute inset-0 size-full max-w-none object-cover group-hover:scale-105 transition-transform duration-500" src={p.img} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)]" />
                <div className="absolute top-4 left-4 bg-[#f7a92c] text-white text-xs font-bold px-3 py-1 rounded-full"
                  style={{ fontFamily: "'Inter', sans-serif" }}>
                  {p.category}
                </div>
              </div>
              <div className="p-6 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-2">
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-lg leading-tight">{p.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-bold shrink-0">{p.year}</p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#888] text-xs font-medium">📍 {p.location}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-sm leading-[1.6]">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14 flex flex-col gap-12">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-4">
          <SectionLabel>CLIENT FEEDBACK</SectionLabel>
          <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
            What Our Clients Say
          </p>
        </div>
        <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-6">
          {[
            { quote: '"Rochan Ideas handled both the foundation civil works and custom interior decorations flawlessly. Their wall-printing is stunning!"', name: "Rajesh Sekhar", avatar: imgAvatar },
            { quote: '"The home inspection team saved us millions in structural flaws before purchase. Absolute transparency and thorough testing."', name: "Sowmya K.", avatar: imgAvatar1 },
            { quote: '"Excellent import/export coordination. Handled our luxury bath fittings import with precision. True professional team."', name: "Karan Johar", avatar: imgAvatar2 },
          ].map(t => (
            <div key={t.name} className="flex-1 bg-white rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
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
      <CtaBanner />
    </>
  );
}

function ContactForm() {
  const [vals, setVals]   = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (field: string, value: string) => {
    switch (field) {
      case "firstName":
      case "lastName":
        if (!value.trim()) return "This field is required.";
        if (!/^[A-Za-z]+( [A-Za-z]+)?$/.test(value.trim()))
          return "Only letters allowed (one space between first & last name).";
        return "";
      case "email":
        if (!value.trim()) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.com$/.test(value.trim()))
          return "Email must be a valid address ending in .com";
        return "";
      case "phone":
        if (!value) return "Phone number is required.";
        if (!/^\d{10}$/.test(value)) return "Phone must be exactly 10 digits.";
        return "";
      default:
        return "";
    }
  };

  const errors: Record<string, string> = {};
  (["firstName", "lastName", "email", "phone"] as const).forEach(f => {
    errors[f] = validate(f, vals[f]);
  });

  const hasErrors = Object.values(errors).some(Boolean);

  const handleChange = (field: string, value: string) => {
    if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    if (field === "firstName" || field === "lastName") {
      // allow letters and at most one space
      value = value.replace(/[^A-Za-z ]/g, "").replace(/  +/g, " ");
    }
    setVals(v => ({ ...v, [field]: value }));
  };

  const handleBlur = (field: string) => setTouched(t => ({ ...t, [field]: true }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, phone: true });
    if (hasErrors) return;
    setSubmitted(true);
  };

  const inputCls = (field: string) => {
    const err = touched[field] && errors[field];
    const ok  = touched[field] && !errors[field] && vals[field as keyof typeof vals];
    return `border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${
      err ? "border-red-400 focus:border-red-500" :
      ok  ? "border-green-400 focus:border-green-500" :
            "border-[#e0e0e0] focus:border-[#f7a92c]"
    }`;
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <div className="size-16 rounded-full bg-[#f7a92c] flex items-center justify-center">
          <svg className="size-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-2xl">Message Sent!</p>
        <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#888] text-sm text-center max-w-[320px]">
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button onClick={() => { setSubmitted(false); setVals({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" }); setTouched({}); }}
          className="mt-2 text-[#f7a92c] text-sm font-semibold hover:underline"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-firstName" style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">First Name</label>
          <input id="cf-firstName" type="text" placeholder="John"
            value={vals.firstName}
            onChange={e => handleChange("firstName", e.target.value)}
            onBlur={() => handleBlur("firstName")}
            className={inputCls("firstName")}
            style={{ fontFamily: "'Inter', sans-serif" }} />
          {touched.firstName && errors.firstName &&
            <p className="text-red-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.firstName}</p>}
        </div>
        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-lastName" style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">Last Name</label>
          <input id="cf-lastName" type="text" placeholder="Doe"
            value={vals.lastName}
            onChange={e => handleChange("lastName", e.target.value)}
            onBlur={() => handleBlur("lastName")}
            className={inputCls("lastName")}
            style={{ fontFamily: "'Inter', sans-serif" }} />
          {touched.lastName && errors.lastName &&
            <p className="text-red-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.lastName}</p>}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">Email Address</label>
          <input id="cf-email" type="email" placeholder="john@example.com"
            value={vals.email}
            onChange={e => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={inputCls("email")}
            style={{ fontFamily: "'Inter', sans-serif" }} />
          {touched.email && errors.email &&
            <p className="text-red-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.email}</p>}
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-phone" style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">Phone Number</label>
          <input id="cf-phone" type="tel" placeholder="10-digit number"
            value={vals.phone}
            maxLength={10}
            onChange={e => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            className={inputCls("phone")}
            style={{ fontFamily: "'Inter', sans-serif" }} />
          {touched.phone && errors.phone
            ? <p className="text-red-500 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{errors.phone}</p>
            : <p className="text-[#aaa] text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>{vals.phone.length}/10 digits</p>}
        </div>
      </div>
      {/* Service */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-service" style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">Service Interested In</label>
        <select id="cf-service" value={vals.service} onChange={e => setVals(v => ({ ...v, service: e.target.value }))}
          className="border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#f7a92c] transition-colors text-[#454545]"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          <option value="">Select a service…</option>
          {["Construction & Engineering","Interiors & UV Wall Printing","Home Quality Inspections","Trading, Import & Export","E-Commerce Services","Project Management","Other"].map(o => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
      </div>
      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">Your Message</label>
        <textarea id="cf-message" rows={5} placeholder="Tell us about your project or query…"
          value={vals.message}
          onChange={e => setVals(v => ({ ...v, message: e.target.value }))}
          className="border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#f7a92c] transition-colors resize-none"
          style={{ fontFamily: "'Inter', sans-serif" }} />
      </div>
      <button type="submit"
        className="bg-[#f7a92c] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e09920] transition-colors w-full disabled:opacity-50"
        style={{ fontFamily: "'Sora', sans-serif" }}>
        Send Message
      </button>
    </form>
  );
}

function ContactPage() {

  return (
    <>
      <PageHero bg={imgContactHero} title="Get In Touch" subtitle="CONTACT US" />
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex flex-col gap-8 w-full lg:w-[420px] shrink-0">
            <div className="flex flex-col gap-4">
              <SectionLabel>REACH US</SectionLabel>
              <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[34px] leading-tight">
                We Would Love to Hear From You
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.7]">
                Whether you are planning a new construction, looking for interior design solutions, or need a property inspection — our team is here to help. Reach out and we will respond within 24 hours.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { icon: imgPhone, label: "Phone", value: "+91-6303074930", sub: "Mon–Sat, 9 AM – 6 PM" },
                { icon: imgMail,  label: "Email", value: "rochanideas@gmail.com", sub: "wallstory4all@gmail.com" },
              ].map(c => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="bg-[#f7a92c] flex items-center justify-center rounded-xl size-12 shrink-0">
                    <img alt="" className="size-6 object-contain" src={c.icon} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">{c.label}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] font-semibold text-base">{c.value}</p>
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#888] text-sm">{c.sub}</p>
                  </div>
                </div>
              ))}
              <div className="flex gap-4 items-start">
                <div className="bg-[#1565c0] flex items-center justify-center rounded-xl size-12 shrink-0">
                  <img alt="" className="size-6 object-contain" src={imgBriefcase} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">Office Address</p>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.6]">Gomati Nagar, Nellore – 524003<br />Andhra Pradesh, India</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { icon: imgLinkedin,  label: "LinkedIn",      href: "https://www.linkedin.com" },
                  { icon: imgInstagram, label: "@rochanideas",  href: "https://www.instagram.com/rochanideas?igsi=MTUxMmprcjZkeWRo" },
                  { icon: imgInstagram, label: "@wallstory4all", href: "https://www.instagram.com/wallstory4all?igsi=MXh3dXM1bjMwN3RsNw" },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-[#f0f0f0] rounded-full px-4 py-2 cursor-pointer hover:bg-[#f7a92c] hover:text-white transition-colors group">
                    <img alt="" className="size-5 object-contain" src={s.icon} />
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] group-hover:text-white text-xs font-medium transition-colors">{s.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-10 flex flex-col gap-6">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-2xl">Send Us a Message</p>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="bg-white px-10 lg:px-20 py-10">
        <div className="max-w-[1440px] mx-auto">
          <div className="rounded-2xl overflow-hidden h-[380px] bg-[#e8e8e8] flex items-center justify-center relative">
            <iframe
              title="Rochan Ideas Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15380.86!2d79.989!3d14.444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4cf6d9b3c8a%3A0x0!2sNellore%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>FAQ</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
              Frequently Asked Questions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              { q: "What areas do you serve?",                    a: "We primarily serve Nellore and surrounding areas in Andhra Pradesh, and have completed projects in Hyderabad, Chennai, and Vijayawada." },
              { q: "How do I get a quote?",                       a: "Simply fill in the contact form above or call us directly. We offer free initial consultations and quotations for all services." },
              { q: "How long does a typical project take?",       a: "Project timelines vary. A home inspection takes 1–2 days, an interior project 4–8 weeks, and a full construction project 6–18 months depending on scope." },
              { q: "Do you handle import of construction materials?", a: "Yes! We specialise in importing premium sanitaryware, tiles, and fittings from trusted global manufacturers at competitive prices." },
              { q: "Are your inspectors certified?",              a: "Absolutely. All our home inspectors hold relevant certifications and follow industry-standard inspection protocols." },
              { q: "Can I track my project progress?",            a: "Yes. We provide regular updates, site visit reports, and maintain full transparency throughout the project lifecycle." },
            ].map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-sm">
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">{faq.q}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// ══════════════════════════════════════════════════════════════════════════════
// SERVICE DETAIL DATA
// ══════════════════════════════════════════════════════════════════════════════
const SERVICE_DATA: Record<string, {
  slug: string;
  color: string;
  number: string;
  icon?: string;
  title: string;
  tagline: string;
  overview: string;
  bg: string;
  features: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  construction: {
    slug: "construction",
    color: "#f7a92c",
    number: "01",
    bg: imgAbout1,
    icon: imgIconConstruction,
    title: "Construction & Engineering",
    tagline: "Building stronger structures, every single time.",
    overview: "Rochan Ideas offers complete end-to-end construction and engineering services for both residential and commercial clients. From blueprint analysis and structural design to ground-breaking, civil works, and final handover — our experienced team manages every phase of the project with precision, accountability, and the highest quality standards. We work closely with architects, engineers, and consultants to deliver spaces that are safe, durable, and beautiful.",
    features: [
      { title: "Residential Construction",     desc: "Custom-built homes designed around your lifestyle. We handle everything from layouts to luxury finishing." },
      { title: "Commercial Buildings",          desc: "Office spaces, retail complexes, warehouses, and multi-purpose buildings built to international standards." },
      { title: "Structural Engineering",        desc: "In-house structural analysis and reinforcement design ensuring every building is safe and long-lasting." },
      { title: "Civil Works",                   desc: "Foundation work, drainage, roads, retaining walls and all civil infrastructure handled professionally." },
      { title: "Renovation & Retrofitting",     desc: "Breathing new life into existing structures with safe, compliant, and aesthetically pleasing renovations." },
      { title: "Site Supervision & QC",         desc: "On-site project supervisors ensure daily progress, quality checks, and compliance at every milestone." },
    ],
    process: [
      { step: "01", title: "Consultation & Site Survey",  desc: "We begin with a detailed consultation and site survey to understand scope, soil conditions, and access requirements." },
      { step: "02", title: "Design & Approvals",          desc: "Architectural and structural designs are prepared, and all necessary regulatory approvals are obtained." },
      { step: "03", title: "Construction Phase",          desc: "Our skilled workforce and curated material vendors commence construction with daily reporting to the client." },
      { step: "04", title: "Quality Audit & Handover",    desc: "A thorough quality audit precedes the final handover, along with all documentation and warranties." },
    ],
    faqs: [
      { q: "Do you handle government approvals?",         a: "Yes. We assist with building plan approvals, RERA registration, and other necessary permits." },
      { q: "What is your typical project timeline?",      a: "Residential projects typically take 8–18 months depending on scope. Commercial projects vary by size." },
      { q: "Can I track my construction progress?",       a: "Absolutely. We provide weekly photo reports and site visits at agreed milestones." },
      { q: "Do you provide a structural warranty?",       a: "Yes. We provide a 5-year structural warranty on all new construction projects." },
    ],
  },
  interiors: {
    slug: "interiors",
    color: "#1565c0",
    number: "02",
    bg: imgAbout2,
    icon: imgIconHomeInterior,
    title: "Interiors & UV Wall Printing",
    tagline: "Spaces that inspire. Walls that tell your story.",
    overview: "Our interior design team creates stunning, functional spaces that reflect your personality and lifestyle. We go beyond aesthetics — every element is selected and placed for purpose. Alongside our design services, we offer industry-leading UV wall printing technology that can transform any wall into a vibrant, durable masterpiece. From concept boards to installation, we manage the entire process for you.",
    features: [
      { title: "Interior Design & Planning",   desc: "Full 3D visualisation, space planning, and material selection tailored to your taste and budget." },
      { title: "UV Wall Printing",              desc: "High-definition, UV-resistant artwork printed directly onto walls, tiles, glass, and more." },
      { title: "Custom Wall Murals",            desc: "Unique, large-format murals for homes, offices, restaurants, and commercial spaces." },
      { title: "False Ceiling & Lighting",     desc: "Designer false ceilings with integrated ambient, accent, and task lighting systems." },
      { title: "Furniture & Décor Sourcing",   desc: "Curated furniture, fixtures, and soft furnishings sourced from trusted vendors and manufacturers." },
      { title: "Kitchen & Wardrobe Design",    desc: "Modular kitchens and custom wardrobes designed for maximum functionality and visual appeal." },
    ],
    process: [
      { step: "01", title: "Concept & Brief",       desc: "We understand your style preferences, budget, and functional needs through a detailed brief session." },
      { step: "02", title: "3D Design Presentation", desc: "A full 3D walkthrough of your space is presented before any procurement begins." },
      { step: "03", title: "Procurement & Execution", desc: "Materials are sourced, and our skilled installation teams execute the design with precision." },
      { step: "04", title: "Styling & Handover",    desc: "Final styling and finishing touches are added before the space is handed over to you." },
    ],
    faqs: [
      { q: "How long does an interior project take?",    a: "A typical 3BHK apartment takes 6–10 weeks from design approval to handover." },
      { q: "Can UV printing be done on any surface?",    a: "UV printing can be applied to walls, tiles, glass, wood, metal, and most flat surfaces." },
      { q: "Do you handle site supervision?",            a: "Yes, our project coordinator is present on-site throughout the execution phase." },
      { q: "Is a minimum budget required?",              a: "We cater to all budgets. Our consultants will guide you on the best options for your investment." },
    ],
  },
  inspections: {
    slug: "inspections",
    color: "#f2761e",
    number: "03",
    bg: imgAbout3,
    icon: imgIconInspection,
    title: "Home Quality Inspections",
    tagline: "Know exactly what you are buying — before you sign.",
    overview: "Our certified home inspection service gives you complete peace of mind before purchasing, selling, or renovating a property. Our inspectors conduct a thorough, systematic evaluation of all structural, electrical, plumbing, and finishing elements. You receive a comprehensive, photographic report within 24–48 hours detailing every finding with severity ratings and recommendations — empowering you to make informed decisions.",
    features: [
      { title: "Pre-Purchase Inspection",      desc: "A complete structural and systems check before you finalise a property purchase." },
      { title: "Pre-Sale Inspection",          desc: "Identify and fix issues before listing your property to command a higher price." },
      { title: "Structural Assessment",        desc: "Load-bearing walls, foundations, columns, beams, and slabs are carefully evaluated." },
      { title: "Electrical Audit",             desc: "Wiring, switchgear, earthing, load capacity, and safety compliance are all checked." },
      { title: "Plumbing & Waterproofing",     desc: "Pipe integrity, drainage, leakages, and water pressure are tested and documented." },
      { title: "Detailed Photographic Report", desc: "A 30–60 page report with photos, severity ratings, and prioritised remediation guidance." },
    ],
    process: [
      { step: "01", title: "Booking & Scheduling",    desc: "Book online or via phone. An inspector is scheduled within 48 hours at your convenience." },
      { step: "02", title: "On-Site Inspection",     desc: "Our certified inspector spends 2–4 hours thoroughly examining the property." },
      { step: "03", title: "Report Generation",      desc: "A comprehensive, photographic inspection report is prepared and delivered within 24 hours." },
      { step: "04", title: "Consultation & Guidance", desc: "Our team walks you through the findings and helps you prioritise remediation actions." },
    ],
    faqs: [
      { q: "How long does an inspection take?",        a: "A typical residential inspection takes 2–4 hours depending on the size and age of the property." },
      { q: "Are your inspectors certified?",           a: "Yes. All inspectors hold relevant professional certifications and carry insurance." },
      { q: "What does the report include?",            a: "The report includes 30–60 pages of findings, photos, severity ratings, and recommendations." },
      { q: "Do you inspect commercial properties?",   a: "Yes. We inspect offices, retail units, warehouses, and other commercial properties." },
    ],
  },
  trading: {
    slug: "trading",
    color: "#2e8b3d",
    number: "04",
    bg: imgAbout4,
    icon: imgIconTrading,
    title: "Trading, Import & Export",
    tagline: "Premium materials. Global sourcing. Local reliability.",
    overview: "Rochan Ideas operates a dedicated trading, import, and export division that sources and supplies premium construction materials, sanitaryware, tiles, flooring, and architectural fittings from trusted manufacturers across India and the world. Whether you are a contractor, developer, or homeowner, we offer competitive pricing, reliable logistics, and end-to-end coordination — so you get the right products on time, every time.",
    features: [
      { title: "Construction Materials",     desc: "Cement, steel, aggregates, bricks, and other primary construction materials supplied in bulk or retail." },
      { title: "Sanitaryware & Fittings",   desc: "Premium bathroom fittings, toilets, basins, and accessories from leading global brands." },
      { title: "Tiles & Flooring",          desc: "A wide range of ceramic, vitrified, marble, wooden, and vinyl flooring options." },
      { title: "Import Coordination",       desc: "Full import documentation, customs clearance, and last-mile delivery handled by our experts." },
      { title: "Export Services",           desc: "We assist Indian manufacturers export their products to international buyers with all compliance." },
      { title: "Vendor Network",            desc: "Access to our curated network of 100+ verified suppliers across India, Europe, and Asia." },
    ],
    process: [
      { step: "01", title: "Requirement Brief",       desc: "You share your material specifications, quantities, and delivery timelines." },
      { step: "02", title: "Sourcing & Quotation",    desc: "We source from our verified vendor network and provide a competitive quotation within 48 hours." },
      { step: "03", title: "Order & Logistics",       desc: "Upon approval, we manage procurement, quality checks, and coordinate logistics end-to-end." },
      { step: "04", title: "Delivery & After-Service", desc: "Goods are delivered on schedule with all documentation. Post-delivery support is also provided." },
    ],
    faqs: [
      { q: "What is the minimum order quantity?",      a: "MOQ varies by product. Contact us for specific product details and bulk pricing." },
      { q: "Do you handle customs clearance?",         a: "Yes. Our logistics team handles all customs documentation and clearance for imported goods." },
      { q: "Which countries do you import from?",      a: "We source from India, Italy, Spain, China, UAE, and several other countries depending on the product." },
      { q: "Can you supply to remote locations?",      a: "Yes. We have logistics partners covering all major cities and districts across India." },
    ],
  },
  ecommerce: {
    slug: "ecommerce",
    color: "#7c3aed",
    number: "05",
    bg: imgPortfolioItem,
    icon: imgIconEcommerce,
    title: "E-Commerce Services",
    tagline: "Your business online — set up, scaled, and thriving.",
    overview: "The digital marketplace is where growth happens. Rochan Ideas helps businesses and individuals launch, optimise, and scale their online stores across all major e-commerce platforms. From product photography and listing to digital marketing and fulfilment strategy, our team provides comprehensive e-commerce solutions that drive sales and build brand loyalty in the competitive online space.",
    features: [
      { title: "Online Store Setup",           desc: "End-to-end setup on Amazon, Flipkart, Meesho, Shopify, WooCommerce, or a custom storefront." },
      { title: "Product Listing & Catalogue",  desc: "SEO-optimised product titles, descriptions, images, and categories for maximum visibility." },
      { title: "Digital Marketing",            desc: "Social media, Google Ads, influencer campaigns, and email marketing to drive targeted traffic." },
      { title: "Order & Inventory Management", desc: "Integrated systems to track inventory, manage orders, and prevent stockouts." },
      { title: "Logistics & Fulfilment",       desc: "Courier integrations and fulfilment strategies to ensure fast, reliable delivery to customers." },
      { title: "Analytics & Growth Strategy", desc: "Monthly performance reports and data-driven strategies to continuously grow your sales." },
    ],
    process: [
      { step: "01", title: "Business Audit",        desc: "We analyse your products, target audience, and competition to develop the right strategy." },
      { step: "02", title: "Platform Setup",         desc: "Store design, product listing, payment gateway integration, and logistics setup are completed." },
      { step: "03", title: "Launch & Marketing",     desc: "Your store goes live with a targeted launch campaign to drive initial traffic and sales." },
      { step: "04", title: "Optimise & Scale",       desc: "Ongoing optimisation, A/B testing, and scaling campaigns based on data insights." },
    ],
    faqs: [
      { q: "Which platforms do you support?",         a: "Amazon, Flipkart, Meesho, Shopify, WooCommerce, and custom-built e-commerce websites." },
      { q: "Do you help with product photography?",  a: "Yes. We offer professional product photography and editing as part of our listing service." },
      { q: "Can you manage returns and refunds?",     a: "We set up and manage return policies and coordinate with courier partners for smooth reverse logistics." },
      { q: "Do you offer ongoing management?",        a: "Yes. We offer monthly retainer packages for full-service e-commerce management." },
    ],
  },
  "project-management": {
    slug: "project-management",
    color: "#0891b2",
    number: "06",
    bg: imgPortfolioItem1,
    icon: imgIconCreativeDesign,
    title: "Project Management",
    tagline: "On time. On budget. Every single time.",
    overview: "Effective project management is the backbone of every successful construction or renovation project. Rochan Ideas provides dedicated project management services that act as the single point of accountability for your project. From scope definition and procurement planning to contractor coordination, milestone tracking, and final snag resolution — we ensure your project is delivered on schedule, within budget, and to the agreed quality standards.",
    features: [
      { title: "Scope & Timeline Planning",     desc: "Detailed work breakdown structure, Gantt charts, and milestone definitions from day one." },
      { title: "Budget Management",             desc: "Real-time budget tracking, variance reporting, and value engineering to keep costs in check." },
      { title: "Contractor Coordination",       desc: "We manage all sub-contractors, track deliverables, and resolve site conflicts proactively." },
      { title: "Quality Control",               desc: "Regular QC audits at every milestone ensure work meets design specifications and safety standards." },
      { title: "Progress Reporting",            desc: "Weekly photographic progress reports and monthly executive summaries keep you fully informed." },
      { title: "Snag & Handover Management",   desc: "A thorough snagging process and organised handover ensure a defect-free final product." },
    ],
    process: [
      { step: "01", title: "Project Kick-off",      desc: "Scope, timeline, budget, and communication protocols are agreed upon and documented." },
      { step: "02", title: "Planning & Mobilisation", desc: "Contractor selection, material procurement plan, and site setup are finalised." },
      { step: "03", title: "Execution & Monitoring", desc: "Daily on-site supervision, weekly progress meetings, and real-time budget tracking throughout." },
      { step: "04", title: "Snagging & Handover",   desc: "All defects are logged, rectified, and independently verified before formal handover." },
    ],
    faqs: [
      { q: "Do you manage both small and large projects?", a: "Yes. We manage projects from home renovations to large-scale commercial developments." },
      { q: "Can I appoint my own contractors?",            a: "Absolutely. We can manage your existing contractor relationships or recommend our vetted network." },
      { q: "How do you handle delays?",                    a: "We proactively identify risks and implement recovery plans to minimise delays and cost impact." },
      { q: "What is your fee structure?",                  a: "We typically charge a percentage of the project value or a fixed monthly management fee." },
    ],
  },
};

// ══════════════════════════════════════════════════════════════════════════════
// PAGE: SERVICE DETAIL
// ══════════════════════════════════════════════════════════════════════════════
function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const svc = SERVICE_DATA[slug ?? ""];

  if (!svc) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-6">
        <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-[#252525] text-3xl font-bold">Service Not Found</p>
        <NavLink to="/services" className="bg-[#f7a92c] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e09920] transition-colors"
          style={{ fontFamily: "'Inter', sans-serif" }}>
          ← Back to Services
        </NavLink>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <div className="relative h-[380px] flex items-end overflow-hidden">
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={svc.bg} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,14,16,0.88)] to-[rgba(14,14,16,0.3)]" />
        <div className="relative z-10 w-full px-10 lg:px-20 pb-12 flex flex-col gap-4 max-w-[900px]">
          {/* Breadcrumb */}
          <NavLink to="/services" className="flex items-center gap-2 text-[#f7a92c] text-sm font-semibold w-fit hover:underline"
            style={{ fontFamily: "'Inter', sans-serif" }}>
            <svg className="size-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 8H3M7 12l-4-4 4-4" />
            </svg>
            Back to Services
          </NavLink>
          <div className="flex items-center gap-4">
            {svc.icon ? (
              <div className="flex items-center justify-center rounded-2xl size-16 shrink-0 bg-white p-1.5 shadow-md border border-white/20">
                <img alt={svc.title} className="size-full object-contain rounded-xl" src={svc.icon} />
              </div>
            ) : (
              <div className="flex items-center justify-center rounded-2xl size-16 shrink-0" style={{ background: svc.color }}>
                <img alt="" className="size-8 object-contain" src={imgBriefcase} />
              </div>
            )}
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-bold tracking-widest uppercase mb-1">
                Service {svc.number}
              </p>
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                className="font-extrabold text-white text-[44px] leading-tight tracking-[-1px]">
                {svc.title}
              </h1>
            </div>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#e0e0e0] text-lg italic">{svc.tagline}</p>
        </div>
      </div>

      {/* Overview */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <SectionLabel>OVERVIEW</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[34px] leading-tight">
              What We Offer
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.8]">
              {svc.overview}
            </p>
            <a href="/contact"
              className="flex items-center gap-3 w-fit text-white font-semibold text-base px-7 py-3.5 rounded-full transition-colors"
              style={{ background: svc.color, fontFamily: "'Inter', sans-serif" }}
            >
              Get a Free Quote
              <svg className="size-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
          {/* Stats sidebar */}
          <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-4">
            {[
              { label: "Projects Delivered", value: "150+" },
              { label: "Client Satisfaction", value: "100%" },
              { label: "Years Experience",   value: "3+" },
              { label: "Cities Served",       value: "6+" },
            ].map(st => (
              <div key={st.label} className="bg-white rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm border border-[#f0f0f0]">
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm font-medium">{st.label}</p>
                <p style={{ fontFamily: "'Sora', sans-serif", color: svc.color }} className="font-extrabold text-2xl">{st.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>WHAT'S INCLUDED</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[34px] leading-tight">
              Everything Under This Service
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {svc.features.map((f, i) => (
              <div key={f.title} className="bg-[#f8f9fa] rounded-2xl p-7 flex flex-col gap-3 hover:shadow-md transition-shadow border border-[#f0f0f0]">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center size-9 rounded-xl shrink-0" style={{ background: svc.color }}>
                    <span style={{ fontFamily: "'Sora', sans-serif" }} className="text-white font-bold text-xs">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">{f.title}</p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7]">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="bg-[#0e0e10] px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel light>HOW IT WORKS</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-white text-[34px] leading-tight">
              Our Step-by-Step Process
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {svc.process.map((p, i) => (
              <div key={p.title} className="relative bg-[rgba(255,255,255,0.04)] border border-[#2e2e32] rounded-2xl p-7 flex flex-col gap-3">
                {i < svc.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 right-[-24px] z-10">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="#3a3a40" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
                <p style={{ fontFamily: "'Sora', sans-serif", color: svc.color }} className="font-extrabold text-4xl opacity-40">{p.step}</p>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-white text-lg">{p.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm leading-[1.6]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>FAQ</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[34px] leading-tight">
              Frequently Asked Questions
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {svc.faqs.map(faq => (
              <div key={faq.q} className="bg-white rounded-2xl p-7 flex flex-col gap-3 shadow-sm border border-[#f0f0f0]">
                <div className="flex gap-3 items-start">
                  <div className="flex items-center justify-center size-6 rounded-full shrink-0 mt-0.5" style={{ background: svc.color }}>
                    <span className="text-white text-xs font-bold">?</span>
                  </div>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">{faq.q}</p>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7] pl-9">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="bg-white px-10 lg:px-20 py-12 border-t border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-2xl">Explore Other Services</p>
            <NavLink to="/services" className="text-[#f7a92c] text-sm font-semibold hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
              View All →
            </NavLink>
          </div>
          <div className="flex flex-wrap gap-3">
            {Object.values(SERVICE_DATA).filter(s => s.slug !== svc.slug).map(s => (
              <NavLink key={s.slug} to={`/services/${s.slug}`}
                className="flex items-center gap-2 bg-[#f5f6f8] border border-[#e8e8e8] rounded-full px-5 py-2.5 text-sm font-medium text-[#252525] hover:border-[#f7a92c] hover:text-[#f7a92c] transition-all"
                style={{ fontFamily: "'Inter', sans-serif" }}>
                <div className="size-2 rounded-full" style={{ background: s.color }} />
                {s.title}
              </NavLink>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-white w-full min-h-dvh relative">
        <Navbar />
        <div className="pt-[72px] overflow-x-hidden">
          <Routes>
          <Route path="/"               element={<HomePage />} />
          <Route path="/about"          element={<AboutPage />} />
          <Route path="/mission-vision" element={<MissionVisionPage />} />
          <Route path="/services"            element={<ServicesPage />} />
          <Route path="/services/:slug"      element={<ServiceDetailPage />} />
          <Route path="/projects"            element={<ProjectsPage />} />
          <Route path="/contact"             element={<ContactPage />} />
        </Routes>
        </div>
        <div className="mt-10" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}
