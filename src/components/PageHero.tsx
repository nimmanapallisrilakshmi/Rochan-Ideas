import SectionLabel from "@/components/SectionLabel";

interface PageHeroProps {
  bg: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ bg, title, subtitle }: PageHeroProps) {
  return (
    <div className="relative h-[340px] flex items-center overflow-hidden">
      <img
        alt=""
        className="absolute inset-0 size-full max-w-none object-cover"
        src={bg}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(14,14,16,0.85)] to-[rgba(14,14,16,0.3)]" />
      {/* Bottom rounded edge so the section below always looks separate */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-white rounded-t-3xl z-10" />
      <div className="relative z-20 flex flex-col gap-3 px-10 lg:px-20 max-w-[800px]">
        <SectionLabel light>{subtitle}</SectionLabel>
        <h1
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          className="font-extrabold text-white text-[52px] leading-tight tracking-[-1px]"
        >
          {title}
        </h1>
      </div>
    </div>
  );
}
