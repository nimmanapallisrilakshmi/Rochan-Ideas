import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import CtaBanner from "@/components/CtaBanner";
import { imgAbout2 } from "@/assets";

const OPENINGS = [
  { title: "UV Wall Printing Technician",   dept: "Wall Story — Operations",  type: "Full-Time",           location: "Nellore, AP",             desc: "Operate and maintain UV flatbed wall-printing machines, execute client print jobs with precision, and ensure quality finishing across residential and commercial sites." },
  { title: "Interior Design Executive",     dept: "Interiors",                type: "Full-Time",           location: "Nellore, AP",             desc: "Create 3D design concepts, liaise with clients for briefs and approvals, coordinate with vendors, and supervise on-site execution of interior projects." },
  { title: "Site Supervisor — Construction",dept: "Construction & Engineering",type: "Full-Time",           location: "Nellore / Vijayawada, AP", desc: "Oversee day-to-day construction site activities, manage labour and sub-contractors, conduct QC checks, and report progress to the project manager." },
  { title: "Business Development Executive",dept: "Sales & Growth",           type: "Full-Time",           location: "Nellore, AP",             desc: "Identify and pursue new client opportunities, nurture leads, attend site visits, and close deals across our full service portfolio." },
  { title: "Social Media & Content Creator",dept: "Marketing",                type: "Part-Time / Freelance",location: "Remote / Nellore",        desc: "Create engaging reels, posts, and stories for @rochanideas and @wallstory4all Instagram accounts, showcasing our projects, team, and brand story." },
  { title: "Home Inspection Engineer",      dept: "Quality Inspections",      type: "Full-Time",           location: "Pan Andhra Pradesh",      desc: "Conduct structural, electrical, and plumbing inspections for residential and commercial properties, and prepare detailed photographic reports." },
];

const PERKS = [
  { icon: "🚀", title: "Fast Growth",         desc: "Work directly with founders across construction, design, and tech verticals from day one." },
  { icon: "🎨", title: "Creative Freedom",    desc: "Bring your ideas to life — we encourage innovation in design, marketing, and process at every level." },
  { icon: "📍", title: "On-Site Experience",  desc: "Get hands-on experience across real projects and build a portfolio that speaks for itself." },
  { icon: "💰", title: "Competitive Pay",     desc: "Market-aligned compensation with performance bonuses and growth-linked pay reviews." },
  { icon: "🤝", title: "Collaborative Culture",desc: "A tight-knit team that supports each other, celebrates wins, and solves problems together." },
  { icon: "🌱", title: "Learning & Development",desc: "Access to training, workshops, and mentorship — we invest in our people's growth." },
];

const typeColor: Record<string, string> = {
  "Full-Time": "#1565c0",
  "Part-Time / Freelance": "#f7a92c",
};

// ── Application Modal ─────────────────────────────────────────────────────────
interface ModalProps { jobTitle: string; onClose: () => void; }

// Field-level validation rules
const VALIDATORS: Record<string, (v: string) => string> = {
  name:  (v) => /^[a-zA-Z\s]+$/.test(v.trim()) ? "" : "Name must contain letters only (no numbers or symbols).",
  email: (v) => /^[^\s@]+@[^\s@]+\.com$/.test(v)  ? "" : "Email must be a valid address ending with .com",
  phone: (v) => /^\d{10}$/.test(v)                 ? "" : "Phone must be exactly 10 digits (numbers only).",
};

function ApplicationModal({ jobTitle, onClose }: ModalProps) {
  const [form, setForm]       = useState({ name: "", email: "", phone: "", experience: "", message: "" });
  const [errors, setErrors]   = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [resume, setResume]   = useState<File | null>(null);
  const [resumeErr, setResumeErr] = useState("");
  const [status, setStatus]   = useState<"idle" | "sending" | "success" | "error">("idle");
  const [serverErr, setServerErr] = useState("");

  // Mark field as touched on blur and run validation
  function handleBlur(k: string) {
    return () => {
      setTouched((t) => ({ ...t, [k]: true }));
      const val = (form as Record<string, string>)[k];
      if (k === "name") {
        setErrors((er) => ({ ...er, name: !val.trim() ? "Full name is required." : VALIDATORS.name(val) }));
      } else if (VALIDATORS[k]) {
        setErrors((er) => ({ ...er, [k]: !val.trim() ? `${k === "email" ? "Email" : "Phone"} is required.` : VALIDATORS[k](val) }));
      }
    };
  }

  // Only show error if the field has been touched
  function fieldErr(k: string) {
    return touched[k] ? errors[k] : undefined;
  }

  // Generic field change — update value only (no error while typing)
  function handleChange(k: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const val = e.target.value;
      // Name: silently strip digits & symbols as they type
      if (k === "name") {
        const letters = val.replace(/[^a-zA-Z\s]/g, "");
        setForm((f) => ({ ...f, name: letters }));
        // If already touched, keep error updated
        if (touched.name) setErrors((er) => ({ ...er, name: letters.trim() ? VALIDATORS.name(letters) : "Full name is required." }));
        return;
      }
      // Phone: safety cap at 10 chars — blocking done via onKeyDown
      if (k === "phone") {
        const v = val.slice(0, 10);
        setForm((f) => ({ ...f, phone: v }));
        // Only update error message if already touched
        if (touched.phone) setErrors((er) => ({ ...er, phone: VALIDATORS.phone(v) }));
        return;
      }
      setForm((f) => ({ ...f, [k]: val }));
      if (touched[k] && VALIDATORS[k]) setErrors((er) => ({ ...er, [k]: VALIDATORS[k](val) }));
    };
  }

  // Resume file handler
  function handleResume(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0] ?? null;
    if (!file) { setResume(null); setResumeErr(""); return; }
    const allowed = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) { setResumeErr("Only PDF, DOC, or DOCX files are allowed."); setResume(null); return; }
    if (file.size > 5 * 1024 * 1024) { setResumeErr("File size must be under 5 MB."); setResume(null); return; }
    setResume(file);
    setResumeErr("");
  }

  // Final validation on submit — mark all fields touched to reveal any remaining errors
  function validate(): boolean {
    setTouched({ name: true, email: true, phone: true });
    const newErrors: Record<string, string> = {};
    if (!form.name.trim())  newErrors.name  = "Full name is required.";
    else if (VALIDATORS.name(form.name))   newErrors.name  = VALIDATORS.name(form.name);
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (VALIDATORS.email(form.email)) newErrors.email = VALIDATORS.email(form.email);
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    else if (VALIDATORS.phone(form.phone)) newErrors.phone = VALIDATORS.phone(form.phone);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setServerErr("");
    try {
      const fd = new FormData();
      fd.append("jobTitle",   jobTitle);
      fd.append("name",       form.name.trim());
      fd.append("email",      form.email.trim());
      fd.append("phone",      form.phone.trim());
      fd.append("experience", form.experience);
      fd.append("message",    form.message);
      if (resume) fd.append("resume", resume);

      const res  = await fetch("http://localhost:4000/api/careers", { method: "POST", body: fd });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setServerErr(data.error || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setServerErr("Could not reach the server. Please email us at rochanideas@gmail.com.");
    }
  }

  // Helper for field wrapper
  function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
    return (
      <div className="flex flex-col gap-1.5">
        <label style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#252525] text-sm font-semibold">{label}</label>
        {children}
        {error && <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-red-500 text-xs mt-0.5">{error}</p>}
      </div>
    );
  }

  const inputCls = (err?: string) =>
    `border rounded-xl px-4 py-3 text-sm outline-none transition-colors ${err ? "border-red-400 focus:border-red-500" : "border-[#e0e0e0] focus:border-[#1565c0]"}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-[540px] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-start justify-between p-7 pb-4 border-b border-[#f0f0f0]">
          <div>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-xl">Apply Now</p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#1565c0] text-sm font-semibold mt-0.5">{jobTitle}</p>
          </div>
          <button onClick={onClose} className="text-[#aaa] hover:text-[#252525] transition-colors text-xl font-bold leading-none p-1">✕</button>
        </div>

        {status === "success" ? (
          <div className="p-10 flex flex-col items-center gap-4 text-center">
            <div className="size-16 rounded-full bg-[#edf7ef] flex items-center justify-center text-3xl">✅</div>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-xl">Application Sent!</p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7]">
              Thank you for applying for <strong>{jobTitle}</strong>. We will review your application and get back to you within 3–5 working days.
            </p>
            <button onClick={onClose} className="mt-2 bg-[#1565c0] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#0d4fa0] transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={submit} className="p-7 flex flex-col gap-4 overflow-y-auto max-h-[82vh]" noValidate>

            {/* Full Name */}
            <Field label="Full Name *" error={fieldErr("name")}>
              <input
                type="text"
                placeholder="Letters only — e.g. Arjun Reddy"
                value={form.name}
                onChange={handleChange("name")}
                onBlur={handleBlur("name")}
                className={inputCls(fieldErr("name"))}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </Field>

            {/* Email */}
            <Field label="Email Address *" error={fieldErr("email")}>
              <input
                type="email"
                placeholder="yourname@gmail.com"
                value={form.email}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                className={inputCls(fieldErr("email"))}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </Field>

            {/* Phone */}
            <Field label="Phone Number * (10 digits)" error={fieldErr("phone")}>
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={form.phone}
                onChange={handleChange("phone")}
                onBlur={handleBlur("phone")}
                onKeyDown={(e) => {
                  const allowed = ["Backspace","Delete","ArrowLeft","ArrowRight","Tab","Home","End"];
                  if (!allowed.includes(e.key) && !/^\d$/.test(e.key)) e.preventDefault();
                  if (form.phone.length >= 10 && /^\d$/.test(e.key)) e.preventDefault();
                }}
                maxLength={10}
                inputMode="numeric"
                autoComplete="tel"
                className={inputCls(fieldErr("phone"))}
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-xs">
                {form.phone.length}/10 digits
              </p>
            </Field>

            {/* Experience */}
            <Field label="Years of Experience">
              <select
                value={form.experience}
                onChange={handleChange("experience")}
                className="border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1565c0] transition-colors bg-white"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                <option value="">Select experience</option>
                <option>Fresher (0–1 yr)</option>
                <option>1–3 years</option>
                <option>3–5 years</option>
                <option>5+ years</option>
              </select>
            </Field>

            {/* Resume Upload */}
            <Field label="Upload Resume (PDF / DOC / DOCX — max 5 MB)" error={resumeErr}>
              <label
                className="flex items-center gap-3 border-2 border-dashed rounded-xl px-4 py-4 cursor-pointer transition-colors hover:border-[#1565c0] hover:bg-[#f0f5ff]"
                style={{ borderColor: resumeErr ? "#ef4444" : "#e0e0e0" }}
              >
                <div className="flex items-center justify-center size-10 rounded-xl bg-[#eef4ff] shrink-0">
                  <svg className="size-5 text-[#1565c0]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-sm font-semibold text-[#252525]">
                    {resume ? resume.name : "Click to upload your resume"}
                  </span>
                  <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-xs text-[#aaa]">
                    {resume ? `${(resume.size / 1024).toFixed(0)} KB` : "PDF, DOC, DOCX — up to 5 MB"}
                  </span>
                </div>
                <input type="file" accept=".pdf,.doc,.docx" onChange={handleResume} className="hidden" />
              </label>
            </Field>

            {/* Cover Note */}
            <Field label="Cover Note (optional)">
              <textarea
                placeholder="Tell us why you are a great fit for this role..."
                value={form.message}
                onChange={handleChange("message")}
                rows={3}
                className="border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#1565c0] transition-colors resize-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
            </Field>

            {serverErr && (
              <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-red-500 text-xs bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                {serverErr}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 rounded-full text-white font-bold text-sm mt-1 transition-all disabled:opacity-60 hover:opacity-90"
              style={{ background: "linear-gradient(135deg,#1565c0,#0d4fa0)", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 14px rgba(21,101,192,0.35)" }}
            >
              {status === "sending" ? "Submitting…" : "Submit Application →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

// ── CareersPage ───────────────────────────────────────────────────────────────
export default function CareersPage() {
  const [activeJob, setActiveJob] = useState<string | null>(null);
  const [showGeneral, setShowGeneral] = useState(false);

  return (
    <>
      {/* ── Hero ── */}
      <div className="relative h-[320px] flex items-end overflow-hidden">
        <img alt="" className="absolute inset-0 size-full max-w-none object-cover" src={imgAbout2} />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,14,16,0.88)] to-[rgba(14,14,16,0.4)]" />
        <div className="relative z-10 px-10 lg:px-20 pb-12 flex flex-col gap-3">
          <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#f7a92c] text-xs font-bold tracking-[3px] uppercase">CAREERS</span>
          <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }} className="font-extrabold text-white text-[46px] leading-tight">
            Join Our Team
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#d0d0d0] text-base max-w-[520px]">
            Build the future of construction, design, and innovation with Rochan Ideas.
          </p>
        </div>
      </div>

      {/* ── Intro ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <SectionLabel>WHY ROCHAN IDEAS</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[38px] leading-tight">
              Build the Future,<br /><span className="text-[#f7a92c]">With Us.</span>
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base leading-[1.8]">
              At Rochan Ideas Pvt. Ltd., we are on a mission to transform how people build, design, and experience spaces across India.
              Whether you are a fresh graduate or an experienced professional, Rochan Ideas is a place where your work matters,
              your ideas are heard, and your career grows.
            </p>
            <button
              onClick={() => setShowGeneral(true)}
              className="flex items-center gap-2 w-fit text-white font-semibold text-base px-7 py-3.5 rounded-full hover:opacity-90 transition-all"
              style={{ background: "linear-gradient(135deg,#f7a92c,#f2761e)", fontFamily: "'Inter', sans-serif", boxShadow: "0 4px 14px rgba(247,169,44,0.35)" }}
            >
              Send Your CV →
            </button>
          </div>
          <div className="w-full lg:w-[320px] shrink-0 grid grid-cols-2 gap-4">
            {[{ value: "3+", label: "Years of Growth" }, { value: "6+", label: "Cities Served" }, { value: "150+", label: "Projects Delivered" }, { value: "100%", label: "Client Satisfaction" }].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl p-6 flex flex-col gap-1 shadow-sm border border-[#f0f0f0]">
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#f7a92c] text-3xl">{s.value}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Perks ── */}
      <div className="bg-[#0e0e10] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 text-center items-center">
            <SectionLabel light>PERKS & BENEFITS</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-white text-[34px] leading-tight">What You Get</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PERKS.map((p) => (
              <div key={p.title} className="bg-[rgba(255,255,255,0.04)] border border-[#2e2e32] rounded-2xl p-7 flex flex-col gap-3 hover:border-[#f7a92c] transition-colors">
                <span className="text-3xl">{p.icon}</span>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-white text-base">{p.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#aaa] text-sm leading-[1.7]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Open Positions ── */}
      <div className="bg-white px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <SectionLabel>OPEN POSITIONS</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#0e0e10] text-[34px] leading-tight">Current Openings</p>
            <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-base">
              Don't see your role?{" "}
              <button onClick={() => setShowGeneral(true)} className="text-[#f7a92c] font-semibold hover:underline">Send a general application →</button>
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {OPENINGS.map((job) => (
              <div key={job.title} className="bg-[#fafafa] rounded-2xl p-7 border border-[#f0f0f0] hover:border-[#1565c0] hover:shadow-md transition-all flex flex-col lg:flex-row lg:items-center gap-5">
                <div className="flex-1 flex flex-col gap-2">
                  <div className="flex flex-wrap items-center gap-3">
                    <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-lg">{job.title}</p>
                    <span className="text-white text-xs font-semibold px-3 py-1 rounded-full" style={{ background: typeColor[job.type] ?? "#888", fontFamily: "'Inter', sans-serif" }}>{job.type}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#888] text-sm">🏢 {job.dept}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#888] text-sm">📍 {job.location}</span>
                  </div>
                  <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7] mt-1">{job.desc}</p>
                </div>
                <button
                  onClick={() => setActiveJob(job.title)}
                  className="shrink-0 flex items-center gap-2 text-white font-semibold text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all whitespace-nowrap"
                  style={{ background: "linear-gradient(135deg,#1565c0,#0d4fa0)", fontFamily: "'Inter', sans-serif", boxShadow: "0 3px 10px rgba(21,101,192,0.3)" }}
                >
                  Apply Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── How to Apply ── */}
      <div className="bg-[#fafafa] px-10 lg:px-20 py-16">
        <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
          <div className="flex flex-col gap-4 items-center text-center">
            <SectionLabel>HOW TO APPLY</SectionLabel>
            <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#252525] text-[34px] leading-tight">Simple 3-Step Process</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Apply Online",       desc: "Click 'Apply Now' on any role, fill in the quick form, and submit your application directly from this page.", icon: "📝" },
              { step: "02", title: "Initial Interview",  desc: "Our team will review your application and schedule a call or in-person interview within 3–5 working days.", icon: "🎙️" },
              { step: "03", title: "Join the Team",      desc: "Successful candidates receive an offer letter and onboarding details. We keep things quick and transparent.", icon: "🤝" },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-8 flex flex-col gap-4 shadow-sm border border-[#f0f0f0] text-center items-center">
                <span className="text-4xl">{s.icon}</span>
                <span style={{ fontFamily: "'Sora', sans-serif" }} className="font-extrabold text-[#f7a92c] text-4xl opacity-30">{s.step}</span>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="font-bold text-[#252525] text-lg">{s.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif" }} className="text-[#454545] text-sm leading-[1.7]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBanner />

      {/* ── Modal ── */}
      {activeJob && <ApplicationModal jobTitle={activeJob} onClose={() => setActiveJob(null)} />}
      {showGeneral && <ApplicationModal jobTitle="General Application" onClose={() => setShowGeneral(false)} />}
    </>
  );
}
