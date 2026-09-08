import { imgLogoFull } from "@/assets";

interface LogoBrandProps {
  /** Pass true when rendering on a dark background (footer) */
  dark?: boolean;
  /** lg = footer size, md = navbar size */
  size?: "md" | "lg";
}

/**
 * Full branded logo — uses the actual Rochan Ideas brand image:
 *   ROCHAN IDEAS PVT. LTD.  ·  IDEAS TO EXECUTION
 *
 * The logo JPG already contains all brand text, so no JSX text is needed.
 * We render it at the right size with object-contain and appropriate shadow.
 */
export default function LogoBrand({ dark = false, size = "md" }: LogoBrandProps) {
  const height = size === "lg" ? "h-[80px]" : "h-[68px]";

  const shadowStyle = dark
    ? "drop-shadow(0 0 12px rgba(247,169,44,0.35)) brightness(1.05)"
    : "none";

  return (
    <img
      alt="Rochan Ideas Pvt. Ltd. — Ideas to Execution"
      src={imgLogoFull}
      className={`${height} w-auto object-contain select-none`}
      style={{ filter: shadowStyle }}
      draggable={false}
    />
  );
}
