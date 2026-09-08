import { useState } from "react";

interface FormVals {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const SERVICE_OPTIONS = [
  "Construction & Engineering",
  "Interiors & UV Wall Printing",
  "Home Quality Inspections",
  "Trading, Import & Export",
  "E-Commerce Services",
  "Project Management",
  "Other",
];

function validate(field: string, value: string): string {
  switch (field) {
    case "firstName":
    case "lastName":
      if (!value.trim()) return "This field is required.";
      if (!/^[A-Za-z]+( [A-Za-z]+)?$/.test(value.trim()))
        return "Only letters allowed.";
      return "";
    case "email":
      if (!value.trim()) return "Email is required.";
      if (!/^[^\s@]+@[^\s@]+\.com$/.test(value.trim()))
        return "Must be a valid .com address.";
      return "";
    case "phone":
      if (!value) return "Phone number is required.";
      if (!/^\d{10}$/.test(value)) return "Must be exactly 10 digits.";
      return "";
    default:
      return "";
  }
}

export default function ContactForm() {
  const [vals, setVals] = useState<FormVals>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const errors: Record<string, string> = {};
  (["firstName", "lastName", "email", "phone"] as const).forEach((f) => {
    errors[f] = validate(f, vals[f]);
  });
  const hasErrors = Object.values(errors).some(Boolean);

  const handleChange = (field: string, value: string) => {
    if (field === "phone") value = value.replace(/\D/g, "").slice(0, 10);
    if (field === "firstName" || field === "lastName")
      value = value.replace(/[^A-Za-z ]/g, "").replace(/  +/g, " ");
    setVals((v) => ({ ...v, [field]: value }));
    setApiError("");
  };

  const handleBlur = (field: string) =>
    setTouched((t) => ({ ...t, [field]: true }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ firstName: true, lastName: true, email: true, phone: true });
    if (hasErrors) return;

    setIsLoading(true);
    setApiError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${vals.firstName} ${vals.lastName}`,
          email: vals.email,
          phone: vals.phone,
          service: vals.service || "Not specified",
          message: vals.message,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setApiError(
          (data as { error?: string }).error ||
            "Failed to send. Please try again or call us directly."
        );
      }
    } catch {
      setApiError(
        "Could not reach the server. Please try again or call +91-6303074930."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const inputCls = (field: string) => {
    const err = touched[field] && errors[field];
    const ok = touched[field] && !errors[field] && vals[field as keyof FormVals];
    return `border rounded-xl px-4 py-3 text-sm outline-none transition-colors w-full ${
      err
        ? "border-red-400 focus:border-red-500"
        : ok
        ? "border-green-400 focus:border-green-500"
        : "border-[#e0e0e0] focus:border-[#f7a92c]"
    }`;
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 py-12">
        <div className="size-16 rounded-full bg-[#f7a92c] flex items-center justify-center">
          <svg
            className="size-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <p
          style={{ fontFamily: "'Sora', sans-serif" }}
          className="font-extrabold text-[#252525] text-2xl"
        >
          Message Sent!
        </p>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#888] text-sm text-center max-w-[320px]"
        >
          Thank you for reaching out. Our team will get back to you within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setVals({
              firstName: "",
              lastName: "",
              email: "",
              phone: "",
              service: "",
              message: "",
            });
            setTouched({});
          }}
          className="mt-2 text-[#f7a92c] text-sm font-semibold hover:underline"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
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
          <label
            htmlFor="cf-firstName"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#252525] text-sm font-semibold"
          >
            First Name
          </label>
          <input
            id="cf-firstName"
            type="text"
            placeholder="John"
            value={vals.firstName}
            onChange={(e) => handleChange("firstName", e.target.value)}
            onBlur={() => handleBlur("firstName")}
            className={inputCls("firstName")}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          {touched.firstName && errors.firstName && (
            <p
              className="text-red-500 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {errors.firstName}
            </p>
          )}
        </div>
        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-lastName"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#252525] text-sm font-semibold"
          >
            Last Name
          </label>
          <input
            id="cf-lastName"
            type="text"
            placeholder="Doe"
            value={vals.lastName}
            onChange={(e) => handleChange("lastName", e.target.value)}
            onBlur={() => handleBlur("lastName")}
            className={inputCls("lastName")}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          {touched.lastName && errors.lastName && (
            <p
              className="text-red-500 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {errors.lastName}
            </p>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-email"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#252525] text-sm font-semibold"
          >
            Email Address
          </label>
          <input
            id="cf-email"
            type="email"
            placeholder="john@example.com"
            value={vals.email}
            onChange={(e) => handleChange("email", e.target.value)}
            onBlur={() => handleBlur("email")}
            className={inputCls("email")}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          {touched.email && errors.email && (
            <p
              className="text-red-500 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {errors.email}
            </p>
          )}
        </div>
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="cf-phone"
            style={{ fontFamily: "'Inter', sans-serif" }}
            className="text-[#252525] text-sm font-semibold"
          >
            Phone Number
          </label>
          <input
            id="cf-phone"
            type="tel"
            placeholder="10-digit number"
            value={vals.phone}
            maxLength={10}
            onChange={(e) => handleChange("phone", e.target.value)}
            onBlur={() => handleBlur("phone")}
            className={inputCls("phone")}
            style={{ fontFamily: "'Inter', sans-serif" }}
          />
          {touched.phone && errors.phone ? (
            <p
              className="text-red-500 text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {errors.phone}
            </p>
          ) : (
            <p
              className="text-[#aaa] text-xs"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {vals.phone.length}/10 digits
            </p>
          )}
        </div>
      </div>

      {/* Service */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cf-service"
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#252525] text-sm font-semibold"
        >
          Service Interested In
        </label>
        <select
          id="cf-service"
          value={vals.service}
          onChange={(e) => setVals((v) => ({ ...v, service: e.target.value }))}
          className="border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#f7a92c] transition-colors text-[#454545] w-full"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <option value="">Select a service…</option>
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="cf-message"
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#252525] text-sm font-semibold"
        >
          Your Message
        </label>
        <textarea
          id="cf-message"
          rows={5}
          placeholder="Tell us about your project or query…"
          value={vals.message}
          onChange={(e) =>
            setVals((v) => ({ ...v, message: e.target.value }))
          }
          className="border border-[#e0e0e0] rounded-xl px-4 py-3 text-sm outline-none focus:border-[#f7a92c] transition-colors resize-none w-full"
          style={{ fontFamily: "'Inter', sans-serif" }}
        />
      </div>

      {/* API error */}
      {apiError && (
        <p
          className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-xl px-4 py-3"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {apiError}
        </p>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="bg-[#f7a92c] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#e09920] transition-colors w-full disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
        style={{ fontFamily: "'Sora', sans-serif" }}
      >
        {isLoading ? (
          <>
            <svg className="animate-spin size-5" fill="none" viewBox="0 0 24 24">
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
