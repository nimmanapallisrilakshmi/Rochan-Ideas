import { NavLink } from "react-router-dom";
import LogoBrand from "@/components/LogoBrand";

const navLinks = [
  { label: "Home",             to: "/" },
  { label: "About",            to: "/about" },
  { label: "Mission & Vision", to: "/mission-vision" },
  { label: "Services",         to: "/services" },
  { label: "Projects",         to: "/projects" },
  { label: "Contact",          to: "/contact" },
];

export default function Navbar() {
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
      </div>
    </div>
  );
}
