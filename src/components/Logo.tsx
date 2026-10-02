import React from "react";

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  iconClassName?: string;
  textClassName?: string;
  lightText?: boolean;
  variant?: "full" | "icon";
}

/**
 * Mathematically centered & 100% vertically symmetrical SVG Gear & Server Rack Icon
 * ViewBox: 0 0 100 100 | Center: (50, 50)
 */
export function LogoIcon({ className = "w-10 h-10 text-[#1E5285]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 100% Symmetrical 8-tooth Gear Path centered at (50, 50) */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 43,6 H 57 L 60,15 C 63.5,16.2 66.7,17.9 69.5,20.1 L 78.5,16.1 L 83.9,21.5 L 79.9,30.5 C 82.1,33.3 83.8,36.5 85,40 L 94,43 V 57 L 85,60 C 83.8,63.5 82.1,66.7 79.9,69.5 L 83.9,78.5 L 78.5,83.9 L 69.5,79.9 C 66.7,82.1 63.5,83.8 60,85 L 57,94 H 43 L 40,85 C 36.5,83.8 33.3,82.1 30.5,79.9 L 21.5,83.9 L 16.1,78.5 L 20.1,69.5 C 17.9,66.7 16.2,63.5 15,60 L 6,57 V 43 L 15,40 C 16.2,36.5 17.9,33.3 20.1,30.5 L 16.1,21.5 L 21.5,16.1 L 30.5,20.1 C 33.3,17.9 36.5,16.2 40,15 Z M 50,21 A 29,29 0 1,0 50,79 A 29,29 0 1,0 50,21 Z"
        fill="currentColor"
      />

      {/* Top Server Rack Unit (y: 34.5 -> 47.0) */}
      <rect
        x="34"
        y="34.5"
        width="32"
        height="12.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="40" cy="40.75" r="2" fill="currentColor" />
      <line
        x1="46"
        y1="40.75"
        x2="60"
        y2="40.75"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />

      {/* Vertical Interconnect Cable Connectors */}
      <line x1="41" y1="47" x2="41" y2="53" stroke="currentColor" strokeWidth="2.5" />
      <line x1="59" y1="47" x2="59" y2="53" stroke="currentColor" strokeWidth="2.5" />

      {/* Bottom Server Rack Unit (y: 53.0 -> 65.5) */}
      <rect
        x="34"
        y="53"
        width="32"
        height="12.5"
        rx="3"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="40" cy="59.25" r="2" fill="currentColor" />
      <line
        x1="46"
        y1="59.25"
        x2="60"
        y2="59.25"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="3 3"
      />
    </svg>
  );
}

/**
 * Fading Rack Mount Server Chassis Background Graphic
 */
export function ServerRackGraphic({ className = "w-64 h-96 text-[#1E5285]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer Server Rack Enclosure */}
      <rect x="10" y="10" width="180" height="300" rx="8" stroke="currentColor" strokeWidth="4" fill="none" />
      
      {/* Rack Mount Rails */}
      <line x1="20" y1="15" x2="20" y2="305" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />
      <line x1="180" y1="15" x2="180" y2="305" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" />

      {/* Rack Server Blade Unit 1 */}
      <rect x="25" y="25" width="150" height="42" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="42" cy="46" r="4" fill="currentColor" />
      <circle cx="56" cy="46" r="3" fill="currentColor" />
      <line x1="75" y1="46" x2="155" y2="46" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />

      {/* Rack Server Blade Unit 2 */}
      <rect x="25" y="80" width="150" height="42" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="42" cy="101" r="4" fill="currentColor" />
      <circle cx="56" cy="101" r="3" fill="currentColor" />
      <line x1="75" y1="101" x2="155" y2="101" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />

      {/* Enterprise NVMe Storage Array Unit 3 */}
      <rect x="25" y="135" width="150" height="65" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="35" y="148" width="22" height="38" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="46" cy="158" r="2" fill="currentColor" />
      <rect x="65" y="148" width="22" height="38" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="76" cy="158" r="2" fill="currentColor" />
      <rect x="95" y="148" width="22" height="38" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="106" cy="158" r="2" fill="currentColor" />
      <rect x="125" y="148" width="22" height="38" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
      <circle cx="136" cy="158" r="2" fill="currentColor" />

      {/* Rack Server Blade Unit 4 */}
      <rect x="25" y="213" width="150" height="42" rx="5" stroke="currentColor" strokeWidth="3" fill="none" />
      <circle cx="42" cy="234" r="4" fill="currentColor" />
      <circle cx="56" cy="234" r="3" fill="currentColor" />
      <line x1="75" y1="234" x2="155" y2="234" stroke="currentColor" strokeWidth="3" strokeDasharray="6 4" strokeLinecap="round" />

      {/* Power Supply Unit 5 */}
      <rect x="25" y="268" width="150" height="30" rx="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="42" cy="283" r="3" fill="currentColor" />
      <line x1="60" y1="283" x2="155" y2="283" stroke="currentColor" strokeWidth="2" strokeDasharray="4 3" />
    </svg>
  );
}

/**
 * Full Brand Logo Component with Perfectly Centered Icon & Stacked TECH / MEDINI Typography
 * Supports lightText prop for dark backgrounds (footers, dark headers)
 */
export default function Logo({
  className = "h-11 w-11 text-[#1E5285]",
  iconOnly = false,
  variant = "full",
  iconClassName,
  textClassName = "",
  lightText = false,
}: LogoProps) {
  if (iconOnly || variant === "icon") {
    return <LogoIcon className={className} />;
  }

  const isDarkBg = lightText || textClassName.includes("text-white");
  const techColor = isDarkBg ? "text-white" : "text-slate-900";
  const mediniColor = isDarkBg ? "text-slate-200" : "text-slate-800";

  return (
    <div className="inline-flex items-center gap-3.5 group select-none">
      <LogoIcon className={iconClassName || className} />
      <div className={`flex flex-col justify-center leading-none ${textClassName}`}>
        <span className={`text-[21px] font-black tracking-[0.08em] uppercase font-sans leading-[0.92] ${techColor}`}>
          TECH
        </span>
        <span className={`text-[13.5px] font-normal tracking-[0.24em] uppercase font-sans leading-[0.92] mt-[3px] ${mediniColor}`}>
          MEDINI
        </span>
      </div>
    </div>
  );
}
