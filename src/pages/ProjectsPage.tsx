import { NavLink } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import CtaBanner from "@/components/CtaBanner";
import StarRow from "@/components/StarRow";
import PageHero from "@/components/PageHero";
import {
  imgAbout1, imgAbout2, imgAbout3,
  imgPortfolioItem, imgPortfolioItem1, imgPortfolioItem2,
  imgProjectsHero, imgAvatar, imgAvatar1, imgAvatar2,
} from "@/assets";

const projects = [
  { img: imgPortfolioItem2, category: "Construction",  title: "Modern Villa",          location: "Nellore, AP",    year: "2025", desc: "A luxury 4-BHK villa featuring contemporary architecture, smart home integration, and premium finishes throughout." },
  { img: imgPortfolioItem,  category: "Commercial",    title: "Commercial Complex",     location: "Nellore, AP",    year: "2025", desc: "A multi-purpose commercial building with modern retail spaces, offices, and a rooftop terrace for events." },
  { img: imgPortfolioItem1, category: "Heritage",      title: "Heritage Restoration",   location: "Vijayawada, AP", year: "2024", desc: "Sensitive restoration of a 100-year-old heritage building, preserving original architectural elements while modernising the interiors." },
  { img: imgAbout1,         category: "Interiors",     title: "Premium Home Interiors", location: "Chennai, TN",    year: "2024", desc: "Complete interior design and execution for a high-end apartment, featuring custom furniture and UV wall printing." },
  { img: imgAbout2,         category: "Inspection",    title: "Pre-Purchase Audit",     location: "Hyderabad, TS",  year: "2024", desc: "Comprehensive pre-purchase inspection for a 3-storey residential building, uncovering critical structural defects." },
  { img: imgAbout3,         category: "Construction",  title: "Township Development",   location: "Nellore, AP",    year: "2023", desc: "Large-scale township project comprising 50 residential units with landscaping, utilities, and community amenities." },
];

const categories = ["All", "Construction", "Commercial", "Interiors", "Inspection", "Heritage"];



export default function ProjectsPage() {
  return (
    <>
      <PageHero bg={imgProjectsHero} title="Our Projects" subtitle="OUR WORK" />

      {/* ── Our Work Process ── */}
      <div className="px-10 lg:px-20 py-14" style={{ background: "linear-gradient(135deg, #1e3a5f 0%, #2c5282 50%, #1e3a5f 100%)" }}>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="text-center flex flex-col gap-3">
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-bold tracking-widest uppercase">How We Work</p>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-white text-[30px] leading-tight">
              From Idea to <span className="text-[#f7a92c]">Execution</span> — Our Process
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {[
              { step: "01", title: "Consultation", desc: "We start by understanding your needs, goals, budget, and timeline through a free initial discussion." },
              { step: "02", title: "Planning",     desc: "Our team creates a detailed project plan — design, materials, schedule, and cost breakdown." },
              { step: "03", title: "Execution",    desc: "Skilled professionals carry out the work with quality checks at every stage of the project." },
              { step: "04", title: "Handover",     desc: "We deliver the completed project, walk you through everything, and remain available for support." },
            ].map((item, i, arr) => (
              <div key={item.step} className="relative flex flex-col gap-4">
                {/* Connector line */}
                {i < arr.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%_-_12px)] w-full h-[2px] z-0"
                    style={{ background: "linear-gradient(to right, #f7a92c66, transparent)" }}
                  />
                )}
                <div className="bg-[rgba(247,169,44,0.06)] border border-[#f7a92c33] rounded-2xl p-7 flex flex-col gap-4 hover:border-[#f7a92c] hover:bg-[rgba(247,169,44,0.1)] transition-all duration-300 relative z-10">
                  <div className="size-14 rounded-2xl flex items-center justify-center shrink-0"
                    style={{ background: "#f7a92c22", border: "1.5px solid #f7a92c66" }}
                  >
                    <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-xl text-[#f7a92c]">{item.step}</p>
                  </div>
                  <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-base text-[#f7a92c]">{item.title}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-[13px] leading-[1.65]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Portfolio header + filters ── */}
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
              <div
                key={c}
                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-colors ${
                  i === 0 ? "bg-[#f7a92c] text-white" : "bg-[#f0f0f0] text-[#454545] hover:bg-[#f7a92c] hover:text-white"
                }`}
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Project cards ── */}
      <div className="bg-white px-10 lg:px-20 pb-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="group bg-white border border-[#e8e8e8] rounded-2xl overflow-hidden hover:shadow-[0_8px_40px_rgba(0,0,0,0.1)] transition-all duration-300">
              <div className="relative h-[240px] overflow-hidden">
                <img alt={p.title} className="absolute inset-0 size-full max-w-none object-cover group-hover:scale-105 transition-transform duration-500" src={p.img} />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.3)]" />
                <div className="absolute top-4 left-4 bg-[#f7a92c] text-white text-xs font-bold px-3 py-1 rounded-full" style={{ fontFamily: "'Inter', sans-serif" }}>
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

      {/* ── Client testimonials ── */}
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
          ].map((t) => (
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
