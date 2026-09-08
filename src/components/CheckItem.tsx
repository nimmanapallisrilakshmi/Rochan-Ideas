export default function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start w-full">
      <div className="mt-0.5 bg-[#2e8b3d] rounded-full size-3 shrink-0" />
      <p
        style={{ fontFamily: "'Inter', sans-serif" }}
        className="flex-1 font-medium text-[#f6f6f6] text-sm leading-normal"
      >
        {text}
      </p>
    </div>
  );
}
