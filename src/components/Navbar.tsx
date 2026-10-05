<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import LogoBrand from "@/components/LogoBrand";
=======
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { imgLogoFull } from "@/assets";
>>>>>>> 9d3fab8 (Fix the changes)

const navLinks = [
  { label: "Home",             to: "/" },
  { label: "About",            to: "/about" },
  { label: "Mission & Vision", to: "/mission-vision" },
  { label: "Services",         to: "/services" },
<<<<<<< HEAD
=======
  { label: "Careers",          to: "/careers" },
>>>>>>> 9d3fab8 (Fix the changes)
  { label: "Projects",         to: "/projects" },
  { label: "Contact",          to: "/contact" },
];

export default function Navbar() {
<<<<<<< HEAD
  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full backdrop-blur-[8px] bg-[rgba(250,250,250,0.97)] border-b border-[rgba(215,195,174,0.3)] shadow-[0_1px_10px_0_rgba(0,0,0,0.09)]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 py-2">
        {/* ── Full branded logo ── */}
        <NavLink
          to="/"
          className="flex items-center group transition-transform duration-300 hover:scale-[1.02]"
          aria-label="Rochan Ideas Pvt. Ltd. – Home"
        >
          <LogoBrand size="md" dark={false} />
        </NavLink>

        {/* ── Nav links ── */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"}>
              {({ isActive }) => (
                <div
                  className={`px-3 py-1 ${
                    isActive ? "border-b-2 border-[#f7a92c]" : ""
                  }`}
                >
                  <span
                    style={{ fontFamily: "'Inter', sans-serif" }}
                    className={`text-base leading-[1.6] transition-colors ${
                      isActive
                        ? "font-bold text-[#f7a92c]"
                        : "text-[#5d5d5d] hover:text-[#f7a92c] cursor-pointer"
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ── WhatsApp CTA ── */}
        <a
          href="https://wa.me/916303074930"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f7a92c] text-white px-6 py-3 rounded-full text-base font-semibold whitespace-nowrap hover:bg-[#e09920] transition-colors shadow-[0_2px_10px_rgba(247,169,44,0.35)]"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          WhatsApp
        </a>
=======
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Top accent bar */}
      <div className="h-[3px] w-full" style={{ background: "linear-gradient(90deg,#f7a92c 0%,#f2761e 40%,#1565c0 100%)" }} />

      <div className="backdrop-blur-[10px] bg-[rgba(255,255,255,0.97)] border-b border-[rgba(215,195,174,0.25)] shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between px-6 lg:px-10 py-0 h-[70px]">

          {/* ── Logo ── */}
          <NavLink
            to="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label="Rochan Ideas Pvt. Ltd. – Home"
          >
            {/* Logo image — large & prominent */}
            <img
              src={imgLogoFull}
              alt="Rochan Ideas"
              className="h-[58px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
              style={{ filter: "drop-shadow(0 2px 8px rgba(247,169,44,0.18))" }}
              draggable={false}
            />
          </NavLink>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === "/"}>
                {({ isActive }) => (
                  <div
                    className={`relative px-3.5 py-2 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-[rgba(247,169,44,0.10)]"
                        : "hover:bg-[rgba(247,169,44,0.06)]"
                    }`}
                  >
                    <span
                      style={{ fontFamily: "'Inter', sans-serif" }}
                      className={`text-[14px] font-semibold transition-colors whitespace-nowrap ${
                        isActive ? "text-[#f7a92c]" : "text-[#252525] hover:text-[#f7a92c]"
                      }`}
                    >
                      {link.label}
                    </span>
                    {isActive && (
                      <div className="absolute bottom-0 left-3.5 right-3.5 h-[2px] rounded-full bg-[#f7a92c]" />
                    )}
                  </div>
                )}
              </NavLink>
            ))}
          </nav>

          {/* ── Right side ── */}
          <div className="flex items-center gap-3">
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/916303074930"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 text-white text-sm font-bold px-5 py-2.5 rounded-full whitespace-nowrap transition-all hover:shadow-lg hover:scale-[1.02]"
              style={{
                background: "linear-gradient(135deg,#f7a92c,#f2761e)",
                fontFamily: "'Inter', sans-serif",
                boxShadow: "0 3px 12px rgba(247,169,44,0.35)",
              }}
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" className="size-4 fill-white shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#f5f5f5] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block h-0.5 w-5 bg-[#252525] rounded transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-5 bg-[#252525] rounded transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-[#252525] rounded transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>

        {/* ── Mobile menu ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[#f0f0f0] bg-white px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMobileOpen(false)}
              >
                {({ isActive }) => (
                  <div className={`px-4 py-3 rounded-xl ${isActive ? "bg-[rgba(247,169,44,0.12)] text-[#f7a92c]" : "text-[#252525] hover:bg-[#fafafa]"}`}>
                    <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold">{link.label}</span>
                  </div>
                )}
              </NavLink>
            ))}
            <a
              href="https://wa.me/916303074930"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 text-white text-sm font-bold px-5 py-3 rounded-full"
              style={{ background: "linear-gradient(135deg,#f7a92c,#f2761e)", fontFamily: "'Inter', sans-serif" }}
            >
              WhatsApp Us
            </a>
          </div>
        )}
>>>>>>> 9d3fab8 (Fix the changes)
      </div>
    </div>
  );
}
