import SectionLabel from "@/components/SectionLabel";
import CtaBanner from "@/components/CtaBanner";
import StarRow from "@/components/StarRow";
import PageHero from "@/components/PageHero";
import {
  imgAbout1, imgAbout2, imgAbout3, imgAbout4,
  imgAboutHero, imgCheck, imgAward, imgBriefcase, imgTarget,
  imgAvatar, imgAvatar1, imgAvatar2,
} from "@/assets";



export default function AboutPage() {
  return (
    <>
      <PageHero bg={imgAboutHero} title="About Rochan Ideas" subtitle="WHO WE ARE" />

      {/* ── Our Story ── */}
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
              {["Quality Assured Materials & Execution", "Transparent Communication & Trust", "Customer-Focused End-to-End Delivery", "On-Time Project Delivery Guaranteed"].map((item) => (
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

      {/* ── What Sets Us Apart ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-14 border-t border-[#f0f0f0]">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-8">
          <div className="text-center flex flex-col gap-2">
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-sm font-bold tracking-widest uppercase">About Us</p>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[28px] leading-tight">
              What Sets Us <span className="text-[#f7a92c]">Apart</span>
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "📍", color: "#f7a92c", bg: "#fff8ec", title: "Local Roots",            desc: "Born and based in Nellore, AP — we understand the local market, regulations, and community better than anyone." },
              { icon: "🏠", color: "#1565c0", bg: "#eef4ff", title: "All Under One Roof",     desc: "Construction, interiors, inspections, trading, e-commerce — every property need served by a single trusted team." },
              { icon: "👷", color: "#f2761e", bg: "#fff3ec", title: "Dedicated Professionals", desc: "Our team of certified engineers, designers, and inspectors bring real expertise and accountability to every job." },
              { icon: "🆓", color: "#2e8b3d", bg: "#edf7ef", title: "Free Consultation",      desc: "We offer a no-obligation free initial consultation for every new enquiry — no pressure, just honest advice." },
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

      {/* ── Core Values ── */}
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
            ].map((v) => (
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

      {/* ── Testimonials ── */}
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
