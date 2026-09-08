import { imgCtaBanner, imgPhoneCall } from "@/assets";
import SectionLabel from "@/components/SectionLabel";

export default function CtaBanner() {
  return (
    <div className="relative flex items-center justify-center px-10 lg:px-20 py-[100px] overflow-hidden">
      <div className="absolute inset-0">
        <img
          alt=""
          className="absolute size-full max-w-none object-cover"
          src={imgCtaBanner}
        />
        <div className="absolute inset-0 bg-[rgba(14,14,16,0.75)]" />
      </div>
      <div className="relative flex flex-col gap-6 items-center max-w-[800px] w-full">
        <SectionLabel light>GET IN TOUCH</SectionLabel>
        <p
          style={{ fontFamily: "'Sora', sans-serif" }}
          className="font-extrabold text-white text-[42px] text-center leading-[1.2]"
        >
          Need Reliable Construction &amp; Property Services?
        </p>
        <p
          style={{ fontFamily: "'Inter', sans-serif" }}
          className="text-[#d1d1d1] text-base leading-[1.6] text-center"
        >
          From initial planning and blueprint analysis to final high-end handover,
          our team is ready to bring your project to life.
        </p>
        <div className="flex items-center gap-4 pt-2">
          <a
            href="/contact"
            className="bg-[#f7a92c] text-white px-7 py-3.5 rounded-[99px] font-semibold text-lg whitespace-nowrap hover:bg-[#e09920] transition-colors"
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Book a Consultation
          </a>
          <a
            href="tel:+916303074930"
            className="bg-[#1565c0] flex items-center justify-center rounded-[25px] size-[50px] hover:bg-[#1255a8] transition-colors"
          >
            <img alt="" className="size-4 object-contain" src={imgPhoneCall} />
          </a>
        </div>
      </div>
    </div>
  );
}
