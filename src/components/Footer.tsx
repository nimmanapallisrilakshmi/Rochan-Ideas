import { NavLink } from "react-router-dom";
import LogoBrand from "@/components/LogoBrand";
import { imgMail, imgPhone, imgLinkedin, imgInstagram } from "@/assets";

const quickLinks = [
  { label: "Home",        to: "/" },
  { label: "About",       to: "/about" },
  { label: "Services",    to: "/services" },
  { label: "Our Mission", to: "/mission-vision" },
  { label: "Contact Us",  to: "/contact" },
];

const serviceLinks = [
  { label: "Construction & Engineering",  to: "/services/construction" },
  { label: "Interiors & UV Wall Printing", to: "/services/interiors" },
  { label: "Home Quality Inspections",    to: "/services/inspections" },
  { label: "Trading, Import & Export",    to: "/services/trading" },
  { label: "E-Commerce Services",         to: "/services/ecommerce" },
];

const socials = [
  { icon: imgLinkedin,  label: "Rochan Ideas Pvt Ltd", href: "https://www.linkedin.com" },
  { icon: imgInstagram, label: "@rochanideas",          href: "https://www.instagram.com/rochanideas?igsi=MTUxMmprcjZkeWRo" },
  { icon: imgInstagram, label: "@wallstory4all",         href: "https://www.instagram.com/wallstory4all?igsi=MXh3dXM1bjMwN3RsNw" },
];

export default function Footer() {
  return (
    <div className="bg-[#0e0e10] px-10 lg:px-20 pt-14 pb-8 flex flex-col gap-10">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col lg:flex-row gap-12">

        {/* ── Brand column ── */}
        <div className="flex-1 max-w-[320px] flex flex-col gap-5">
          <LogoBrand size="lg" dark />
          <p
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#999] text-sm leading-[1.75]"
          >
            Building homes, bespoke interiors, structural inspections, and
            long-term trust — under one roof. Dedicated to high architectural
            and execution standards.
          </p>
        </div>

        {/* ── Quick Links ── */}
        <div className="flex-1 flex flex-col gap-5">
          <p
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="font-extrabold text-white text-sm tracking-[1.5px] uppercase"
          >
            QUICK LINKS
          </p>
          <div className="flex flex-col gap-3">
            {quickLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                end={l.to === "/"}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors w-fit ${
                    isActive ? "text-[#f7a92c]" : "text-[#aaa] hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* ── Services ── */}
        <div className="flex-1 flex flex-col gap-5">
          <p
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="font-extrabold text-white text-sm tracking-[1.5px] uppercase"
          >
            SERVICES
          </p>
          <div className="flex flex-col gap-3">
            {serviceLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                style={{ fontFamily: "'Inter', sans-serif" }}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors w-fit ${
                    isActive ? "text-[#f7a92c]" : "text-[#aaa] hover:text-white"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* ── Get In Touch ── */}
        <div className="flex-1 max-w-[300px] flex flex-col gap-5">
          <p
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            className="font-extrabold text-white text-sm tracking-[1.5px] uppercase"
          >
            GET IN TOUCH
          </p>
          <div className="flex flex-col gap-4">
            <p
              style={{ fontFamily: "'Inter', sans-serif" }}
              className="text-[#aaa] text-sm leading-[1.6]"
            >
              Gomati Nagar, Nellore – 524003, Andhra Pradesh
            </p>
            {[
              { icon: imgMail,  bg: "#1565c0", text: "rochanideas@gmail.com" },
              { icon: imgMail,  bg: "#0891b2", text: "wallstory4all@gmail.com" },
            ].map((c) => (
              <div key={c.text} className="flex gap-3 items-center">
                <div
                  className="flex items-center justify-center size-9 rounded-full shrink-0"
                  style={{ background: c.bg }}
                >
                  <img alt="" className="size-4 object-contain" src={c.icon} />
                </div>
                <p
                  style={{ fontFamily: "'Inter', sans-serif" }}
                  className="text-[#f7a92c] text-sm font-medium"
                >
                  {c.text}
                </p>
              </div>
            ))}
            <div className="flex gap-3 items-center">
              <div className="flex items-center justify-center size-9 rounded-full shrink-0 bg-[#f7a92c]">
                <img alt="" className="size-4 object-contain" src={imgPhone} />
              </div>
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[#f7a92c] text-sm font-bold"
              >
                +91-6303074930
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Socials + copyright ── */}
      <div className="max-w-[1440px] mx-auto w-full flex flex-col gap-5">
        <div className="flex flex-wrap gap-8 items-center">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2.5 items-center cursor-pointer group"
            >
              <div className="bg-[#1e1e22] flex items-center justify-center rounded-lg size-9 shrink-0 group-hover:bg-[#f7a92c] transition-colors duration-200">
                <img alt="" className="size-5 object-contain" src={s.icon} />
              </div>
              <p
                style={{ fontFamily: "'Inter', sans-serif" }}
                className="text-[#aaa] text-sm whitespace-nowrap group-hover:text-white transition-colors duration-200"
              >
                {s.label}
              </p>
            </a>
          ))}
        </div>
        <div className="border-t border-[#1e1e22]" />
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#555] text-xs text-center pb-2"
        >
          © 2026 Rochan Ideas Pvt. Ltd. All rights reserved.
        </p>
      </div>
    </div>
  );
}
