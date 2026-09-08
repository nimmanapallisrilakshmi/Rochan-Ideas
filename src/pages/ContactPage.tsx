import SectionLabel from "@/components/SectionLabel";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { imgContactHero, imgPhone, imgMail, imgBriefcase, imgLinkedin, imgInstagram } from "@/assets";

export default function ContactPage() {
  return (
    <>
      <PageHero bg={imgContactHero} title="Get In Touch" subtitle="CONTACT US" />

      {/* ── Contact body ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16">

          {/* Left: info */}
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
                { icon: imgPhone, bg: "#f7a92c", label: "Phone",  value: "+91-6303074930",      sub: "Tue–Sunday, 8 AM – 6 PM" },
                { icon: imgMail,  bg: "#f7a92c", label: "Email",  value: "rochanideas@gmail.com", sub: "wallstory4all@gmail.com" },
              ].map((c) => (
                <div key={c.label} className="flex gap-4 items-start">
                  <div className="flex items-center justify-center rounded-xl size-12 shrink-0" style={{ background: c.bg }}>
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
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.6]">
                    Gomati Nagar, Nellore – 524003<br />Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-base">Follow Us</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  { icon: imgLinkedin,  label: "LinkedIn",      href: "https://www.linkedin.com" },
                  { icon: imgInstagram, label: "@rochanideas",  href: "https://www.instagram.com/rochanideas?igsi=MTUxMmprcjZkeWRo" },
                  { icon: imgInstagram, label: "@wallstory4all", href: "https://www.instagram.com/wallstory4all?igsi=MXh3dXM1bjMwN3RsNw" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#f0f0f0] rounded-full px-4 py-2 cursor-pointer hover:bg-[#f7a92c] hover:text-white transition-colors group"
                  >
                    <img alt="" className="size-5 object-contain" src={s.icon} />
                    <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] group-hover:text-white text-xs font-medium transition-colors">{s.label}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="flex-1 bg-white rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.06)] p-10 flex flex-col gap-6">
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-2xl">Send Us a Message</p>
            <ContactForm />
          </div>
        </div>
      </div>

      {/* ── Map ── */}
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

      {/* ── FAQ ── */}
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
            ].map((faq) => (
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
