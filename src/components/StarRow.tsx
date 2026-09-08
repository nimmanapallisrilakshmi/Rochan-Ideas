import { imgStar } from "@/assets";

export default function StarRow() {
  return (
    <div className="flex gap-2 items-center">
      {[0, 1, 2, 3, 4].map((i) => (
        <div key={i} className="size-[14px] flex items-center justify-center">
          <img alt="★" className="size-[10px]" src={imgStar} />
        </div>
      ))}
    </div>
  );
}
