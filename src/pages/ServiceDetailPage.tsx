import { NavLink, useParams } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import CtaBanner from "@/components/CtaBanner";
import {
  imgAbout1, imgAbout2, imgAbout3, imgAbout4,
  imgPortfolioItem, imgPortfolioItem1,
  imgBriefcase,
  imgIconConstruction, imgIconHomeInterior, imgIconInspection,
  imgIconTrading, imgIconEcommerce, imgIconCreativeDesign,
  imgInteriorsHero,
  imgWS1, imgWS2, imgWS3, imgWS4, imgWS5, imgWS6, imgWS7, imgWS8,
  imgWS9, imgWS10, imgWS11, imgWS12, imgWS13, imgWS14, imgWS15, imgWS16,
} from "@/assets";

// ── Service detail data ───────────────────────────────────────────────────────
const SERVICE_DATA: Record<string, {
  slug: string; color: string; number: string; icon?: string;
  title: string; tagline: string; overview: string; bg: string;
  features: { title: string; desc: string }[];
  process:  { step: string; title: string; desc: string }[];
  faqs:     { q: string; a: string }[];
}> = {
  construction: {
    slug: "construction", color: "#f7a92c", number: "01",
    bg: imgAbout1, icon: imgIconConstruction,
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
    slug: "interiors", color: "#1565c0", number: "02",
    bg: imgInteriorsHero, icon: imgIconHomeInterior,
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
      { q: "What is UV wall printing?",                             a: "Direct-to-wall digital printing technology that creates high-resolution images and designs using UV-curable inks." },
      { q: "Can I print my own photograph or design?",             a: "Yes, you can print your own photographs, artwork, logos or designs, subject to quality and wall suitability." },
      { q: "Can you customize a design?",                          a: "Yes, we customize or create designs based on your requirements, wall dimensions and interior theme." },
      { q: "Can you print on different types of walls?",           a: "Yes, subject to the wall surface, condition and technical suitability." },
      { q: "Do you provide wall-printing machine information?",    a: "Yes, we provide information and assistance for customers interested in purchasing UV wall-printing machines." },
      { q: "Do you provide commercial wall-printing services?",    a: "Yes, we provide UV wall-printing services for residential, commercial, hospitality, retail and institutional spaces." },
      { q: "Can you print religious, traditional or cultural artwork?", a: "Yes, we can print customized religious, traditional, cultural and artistic designs." },
      { q: "Can you print a company logo or branding on a wall?",  a: "Yes, we provide customized wall printing for logos, branding, promotional graphics and corporate interiors." },
      { q: "Do you provide the design along with wall printing?",  a: "Yes, we can create or customize wall-ready designs based on your requirements." },
      { q: "Can I get a preview before printing?",                 a: "Yes, a design preview can be provided for customized projects before final printing." },
      { q: "How do I get a quotation?",                            a: "Submit your wall details, photograph, dimensions and requirements through our enquiry form to receive a quotation." },
    ],
  },
  inspections: {
    slug: "inspections", color: "#f2761e", number: "03",
    bg: imgAbout3, icon: imgIconInspection,
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
    slug: "trading", color: "#2e8b3d", number: "04",
    bg: imgAbout4, icon: imgIconTrading,
    title: "Trading, Import & Export",
    tagline: "Premium materials. Global sourcing. Local reliability.",
    overview: "Rochan Ideas operates a dedicated trading, import, and export division that sources and supplies premium construction materials, sanitaryware, tiles, flooring, and architectural fittings from trusted manufacturers across India and the world. Whether you are a contractor, developer, or homeowner, we offer competitive pricing, reliable logistics, and end-to-end coordination — so you get the right products on time, every time.",
    features: [
      { title: "Construction Materials",     desc: "Cement, steel, aggregates, bricks, and other primary construction materials supplied in bulk or retail." },
      { title: "Sanitaryware & Fittings",   desc: "Premium bathroom fittings, toilets, basins, and accessories from leading global brands." },
      { title: "Tiles & Flooring",          desc: "A wide range of ceramic, vitrified, marble, wooden, and vinyl flooring options." },
      { title: "Import Coordination",       desc: "Full import documentation, customs clearance, and last-mile delivery handled by our experts." },
      { title: "Export Services",           desc: "We assist Indian manufacturers export their products to international buyers with all compliance support." },
      { title: "Global Vendor Network",     desc: "Access to our curated network of verified suppliers spanning various countries across the world — ensuring the best quality and pricing for every requirement." },
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
    slug: "ecommerce", color: "#7c3aed", number: "05",
    bg: imgPortfolioItem, icon: imgIconEcommerce,
    title: "E-Commerce — Quality Products",
    tagline: "Quality products. Affordable prices. Delivered to your door.",
    overview: "Our E-Commerce business is built on one simple promise — making quality and reliable products accessible to everyone at affordable prices. We offer a diverse range of products across various categories, each carefully selected based on quality, utility, reliability, and value for money. Our goal is to provide customers with a convenient and trustworthy online shopping experience backed by competitive pricing and dependable service. From browsing to delivery, we ensure every step of your journey is smooth, secure, and satisfying.",
    features: [
      { title: "Wide & Diverse Product Range",    desc: "Products spanning electronics, home essentials, lifestyle, and more — hand-picked across various categories for quality and utility." },
      { title: "Affordable Pricing",               desc: "Competitive prices on every product without compromising on quality, so every customer gets the best value for their money." },
      { title: "Quality Assurance",                desc: "Every product is sourced from reliable manufacturers and undergoes thorough quality checks before it reaches you." },
      { title: "Fast & Reliable Delivery",         desc: "Efficient logistics and trusted courier integrations ensure your orders arrive quickly, safely, and on time." },
      { title: "Easy Returns & Customer Support",  desc: "Hassle-free return policies and a responsive support team ensure a worry-free shopping experience every time." },
      { title: "Trusted Shopping Platform",        desc: "A secure, transparent, and customer-first platform designed to make your online shopping experience convenient and dependable." },
    ],
    process: [
      { step: "01", title: "Browse & Discover",    desc: "Explore our curated catalogue of quality products across various categories, all at honest and competitive prices." },
      { step: "02", title: "Select & Order",        desc: "Choose your products, complete a secure checkout, and receive instant order confirmation." },
      { step: "03", title: "Quality Check & Pack", desc: "Every order is quality-verified and carefully packed to ensure safe and damage-free delivery." },
      { step: "04", title: "Delivery & Support",   desc: "Your order is dispatched with a reliable courier partner and tracked until it reaches your doorstep." },
    ],
    faqs: [
      { q: "What product categories do you offer?",      a: "We offer products across electronics, home essentials, lifestyle, personal care, and more — with new categories added regularly." },
      { q: "How do you ensure product quality?",         a: "Every product is sourced from verified manufacturers and passes our quality checks before being listed or dispatched." },
      { q: "What is your return & refund policy?",       a: "We offer a hassle-free return window. Simply raise a return request and our support team will coordinate the pickup and refund." },
      { q: "How long does delivery take?",               a: "Standard delivery typically takes 3–7 business days depending on your location. Express options may be available for select products." },
    ],
  },
  "project-management": {
    slug: "project-management", color: "#0891b2", number: "06",
    bg: imgPortfolioItem1, icon: imgIconCreativeDesign,
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

// ── ServiceDetailPage ─────────────────────────────────────────────────────────
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const svc = SERVICE_DATA[slug ?? ""];

  if (!svc) {
    return (
      <div className="flex flex-col items-center justify-center py-40 gap-6">
        <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-[#252525] text-3xl font-bold">Service Not Found</p>
        <NavLink to="/services" className="bg-[#f7a92c] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e09920] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
          ← Back to Services
        </NavLink>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero ── */}
      <div className={`relative flex items-end overflow-hidden ${svc.slug === "interiors" ? "h-[460px]" : "h-[380px]"}`}>
        <img
          alt=""
          className="absolute inset-0 size-full max-w-none object-cover"
          style={svc.slug === "interiors" ? { objectPosition: "65% top" } : {}}
          src={svc.bg}
        />
        <div className={"absolute inset-0 " + (svc.slug === "interiors"
          ? "bg-gradient-to-r from-[rgba(14,14,16,0.92)] from-30% via-[rgba(14,14,16,0.40)] via-50% to-transparent"
          : "bg-gradient-to-r from-[rgba(14,14,16,0.92)] via-[rgba(14,14,16,0.55)] to-transparent")
        } />
        <div className={`relative z-10 w-full px-10 lg:px-20 pb-12 flex flex-col gap-4 ${svc.slug === "interiors" ? "max-w-[460px]" : "max-w-[900px]"}`}>
          <NavLink to="/services" className="flex items-center gap-2 text-[#f7a92c] text-sm font-semibold w-fit hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>
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
              <h1 style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white text-[44px] leading-tight tracking-[-1px]">
                {svc.title}
              </h1>
            </div>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#e0e0e0] text-lg italic">{svc.tagline}</p>
        </div>
      </div>

      {/* ── Overview ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-start">
          <div className="flex-1 flex flex-col gap-6">
            <SectionLabel>OVERVIEW</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[34px] leading-tight">What We Offer</p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.8]">{svc.overview}</p>
            <a
              href="/contact"
              className="flex items-center gap-3 w-fit text-white font-semibold text-base px-7 py-3.5 rounded-full transition-colors"
              style={{ background: svc.color, fontFamily: "'Inter', sans-serif" }}
            >
              Get a Free Quote
              <svg className="size-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-[460px] shrink-0 lg:mt-20">
            {svc.slug === "interiors" ? (
              /* Wall Story brand video in place of stats */
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#e0e0e0]">
                {/* Gradient accent bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 z-10"
                  style={{ background: "linear-gradient(90deg, #1565c0, #f7a92c)" }}
                />
                <video
                  id="wallstory-brand-video"
                  className="w-full aspect-video object-cover block"
                  src="/assets/MicrosoftTeams-video.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
                {/* Overlay badge */}
                <div
                  className="absolute bottom-4 left-4 flex items-center gap-2 bg-[rgba(0,0,0,0.65)] backdrop-blur-md rounded-xl px-4 py-2 pointer-events-none"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div className="size-2.5 rounded-full animate-pulse" style={{ background: "#1565c0" }} />
                  <p
                    style={{ fontFamily: "'Sora', sans-serif" }}
                    className="text-white text-xs font-bold tracking-wide"
                  >
                    Wall Story — Brand Introduction
                  </p>
                </div>
              </div>
            ) : (
              /* Stats panel for all other services */
              <div className="flex flex-col gap-4">
                {[
                  { label: "Projects Delivered", value: "150+" },
                  { label: "Client Satisfaction", value: "100%" },
                  { label: "Years Experience",   value: "3+" },
                  { label: "Cities Served",       value: "6+" },
                ].map((st) => (
                  <div key={st.label} className="bg-white rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm border border-[#f0f0f0]">
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm font-medium">{st.label}</p>
                    <p style={{ fontFamily: "'Sora', sans-serif", color: svc.color }} className="font-extrabold text-2xl">{st.value}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Wall Story Photo Gallery (Interiors only) ── */}
      {svc.slug === "interiors" && (() => {
        const galleryImgs = [
          imgWS1, imgWS2, imgWS3, imgWS4, imgWS5, imgWS6, imgWS7, imgWS8,
          imgWS9, imgWS10, imgWS11, imgWS12, imgWS13, imgWS14, imgWS15, imgWS16,
        ];
        return (
          <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                <div className="flex flex-col gap-3">
                  <SectionLabel>OUR WORK</SectionLabel>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[34px] leading-tight">
                    Wall Story — Print Gallery
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.7] max-w-[520px]">
                    A curated showcase of our UV wall printing projects — from religious artwork to corporate branding, murals to custom designs.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="flex items-center gap-2 w-fit text-white text-sm font-semibold px-6 py-3 rounded-full shrink-0 hover:opacity-90 transition-opacity"
                  style={{ background: "#1565c0", fontFamily: "'Inter', sans-serif" }}
                >
                  Get a Quote
                  <svg className="size-4" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                  </svg>
                </a>
              </div>

              {/* Masonry Grid */}
              <div className="columns-2 lg:columns-4 gap-4 space-y-4">
                {galleryImgs.map((src, i) => (
                  <div
                    key={i}
                    className="break-inside-avoid rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={src}
                        alt={`Wall Story print ${i + 1}`}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* hover overlay */}
                      <div className="absolute inset-0 bg-[rgba(21,101,192,0.0)] group-hover:bg-[rgba(21,101,192,0.18)] transition-colors duration-300 flex items-end p-3">
                        <span
                          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{ background: "rgba(0,0,0,0.55)", fontFamily: "'Sora', sans-serif" }}
                        >
                          Wall Story Print #{String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}
      {/* ── Features ── */}
      <div className="bg-white px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>WHAT'S INCLUDED</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[34px] leading-tight">Everything Under This Service</p>
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

      {/* ── Process ── */}
      <div className="bg-[#0e0e10] px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel light>HOW IT WORKS</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-white text-[34px] leading-tight">Our Step-by-Step Process</p>
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

      {/* ── FAQ ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>FAQ</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[34px] leading-tight">Frequently Asked Questions</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {svc.faqs.map((faq) => (
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

      {/* ── Related Services ── */}
      <div className="bg-white px-10 lg:px-20 py-12 border-t border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-2xl">Explore Other Services</p>
            <NavLink to="/services" className="text-[#f7a92c] text-sm font-semibold hover:underline" style={{ fontFamily: "'Inter', sans-serif" }}>View All →</NavLink>
          </div>
          <div className="flex flex-wrap gap-3">
            {Object.values(SERVICE_DATA)
              .filter((s) => s.slug !== svc.slug)
              .map((s) => (
                <NavLink
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="flex items-center gap-2 bg-[#f5f6f8] border border-[#e8e8e8] rounded-full px-5 py-2.5 text-sm font-medium text-[#252525] hover:border-[#f7a92c] hover:text-[#f7a92c] transition-all"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
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
