import SectionLabel from "@/components/SectionLabel";
import CheckItem from "@/components/CheckItem";
import CtaBanner from "@/components/CtaBanner";
import PageHero from "@/components/PageHero";
import { imgMissionVisionHero, imgVandM, imgTarget, imgEye, imgAward, imgBriefcase } from "@/assets";

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
  { icon: imgAward,     color: "#f7a92c", title: "Integrity",   desc: "We operate with complete transparency and honesty in every interaction." },
  { icon: imgBriefcase, color: "#1565c0", title: "Innovation",  desc: "We constantly look for better, smarter ways to serve our clients." },
  { icon: imgTarget,    color: "#f2761e", title: "Excellence",  desc: "We hold ourselves to the highest standards in every project we deliver." },
  { icon: imgEye,       color: "#2e8b3d", title: "Inclusivity", desc: "Our services are designed to be accessible and affordable for all." },
];



export default function MissionVisionPage() {
  return (
    <>
      <PageHero bg={imgMissionVisionHero} title="Mission & Vision" subtitle="OUR PURPOSE" />

      {/* ── Light bridge section (separates hero from dark) ── */}
      <div className="bg-white px-10 lg:px-20 py-14 border-b border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex flex-col gap-5 flex-1">
            <SectionLabel>OUR PURPOSE</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
              Driving Change with a <span className="text-[#f7a92c]">Solid Shared Mission</span>
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.7] max-w-[620px]">
              Every decision we make, every project we take on, every relationship we build — it is all guided by a clear and unwavering purpose that defines who we are and where we are headed.
            </p>
          </div>
          {/* Right: accent stat cards */}
          <div className="flex gap-5 shrink-0">
            {[
              { color: "#f7a92c", value: "150+", label: "Projects" },
              { color: "#1565c0", value: "100%", label: "Satisfaction" },
              { color: "#f2761e", value: "1.2k+", label: "Clients" },
            ].map((s) => (
              <div key={s.label} className="bg-[#f5f6f8] rounded-2xl p-6 flex flex-col gap-1 items-center min-w-[110px] border border-[#f0f0f0]">
                <p style={{ fontFamily: "'Inter', sans-serif", color: s.color }} className="font-extrabold text-[32px] leading-none">{s.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#888] text-xs font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Dark section: Mission & Vision cards ── */}
      <div className="bg-[#0e0e10] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
          {/* Mission */}
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
              {missionPoints.map((t) => <CheckItem key={t} text={t} />)}
            </div>
          </div>

          {/* ── Centre image column ── */}
          <div className="hidden lg:flex shrink-0 w-[220px] self-stretch">
            <div
              className="w-full h-full rounded-[20px] flex flex-col items-center justify-center gap-5 px-5 py-8 overflow-hidden relative"
              style={{ background: "linear-gradient(160deg, #f7a92c 0%, #f2761e 50%, #1565c0 100%)" }}
            >
              {/* Decorative circles */}
              <div className="absolute -top-10 -right-10 w-36 h-36 rounded-full bg-white opacity-10" />
              <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-white opacity-10" />

              {/* Image */}
              <img
                src={imgVandM}
                alt="Rochan Ideas Builder"
                className="w-[170px] object-contain drop-shadow-2xl relative z-10"
              />

              {/* Label */}
              <div className="flex flex-col items-center gap-1 relative z-10 text-center">
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-white font-extrabold text-base leading-tight">
                  Ideas to
                </p>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-white font-extrabold text-base leading-tight">
                  Execution
                </p>
                <div className="w-10 h-[2px] bg-white opacity-60 mt-1 rounded-full" />
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-white text-[11px] opacity-80 leading-snug mt-1">
                  Rochan Ideas Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>

          {/* Vision */}
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
              {visionPoints.map((t) => <CheckItem key={t} text={t} />)}
            </div>
          </div>
        </div>
      </div>

      {/* ── Core Values ── */}
      <div className="bg-white px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>CORE VALUES</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[38px] leading-tight">The Principles That Guide Us</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {values.map((v) => (
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

      {/* ── Our Commitments ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14 border-y border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-bold tracking-widest uppercase">Our Promise</p>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[28px] leading-tight">
              Our <span className="text-[#f7a92c]">Commitments</span> to You
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "💰", color: "#f7a92c", bg: "#fff8ec", title: "Honest Pricing",         desc: "We give clear, upfront quotations with no hidden charges — what we quote is what you pay." },
              { icon: "🦺", color: "#1565c0", bg: "#eef4ff", title: "Safety First",           desc: "Every project follows strict safety standards for workers and residents throughout construction." },
              { icon: "🌱", color: "#f2761e", bg: "#fff3ec", title: "Long-Term Relations",    desc: "We build lasting partnerships, not just buildings. Our clients come back to us for every need." },
              { icon: "📈", color: "#2e8b3d", bg: "#edf7ef", title: "Continuous Improvement", desc: "We invest in training, tools, and techniques to keep improving the quality of our services." },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 flex flex-col gap-3 border border-[#f0f0f0] hover:shadow-lg transition-shadow"
                style={{ background: item.bg }}
              >
                <div className="size-12 rounded-xl flex items-center justify-center text-xl shrink-0" style={{ background: item.color + "22" }}>
                  {item.icon}
                </div>
                <p style={{ fontFamily: "'Sora', sans-serif", color: item.color }} className="font-bold text-base">{item.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#4f4f4f] text-[13px] leading-[1.65]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />
    </>
  );
}
