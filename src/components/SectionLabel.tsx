export default function SectionLabel({ light, children }: { light?: boolean; children: string }) {
  return (
    <div className="flex flex-col gap-1.5">
      <p
        style={{ fontFamily: "'Inter', sans-serif" }}
        className={`font-bold text-base tracking-[1.5px] uppercase ${light ? "text-[#e7e7e7]" : "text-[#454545]"}`}
      >
        {children}
      </p>
      <div className="bg-[#f7a92c] h-[3px] rounded-[2px] w-10" />
    </div>
  );
}
