import React from "react";

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "w-10 h-10 text-blue-600" }: LogoProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 44,5 H 56 L 58.5,14.5 C 62,15.7 65.2,17.4 68.1,19.6 L 77.2,15.6 L 85.7,24.1 L 81.7,33.2 C 83.9,36.1 85.6,39.3 86.8,42.8 L 96.3,45.3 V 57.3 L 86.8,59.8 C 85.6,63.3 83.9,66.5 81.7,69.4 L 85.7,78.5 L 77.2,87 L 68.1,83 C 65.2,85.2 62,86.9 58.5,88.1 L 56,97.6 H 44 L 41.5,88.1 C 38,86.9 34.8,85.2 31.9,83 L 22.8,87 L 14.3,78.5 L 18.3,69.4 C 16.1,66.5 14.4,63.3 13.2,59.8 L 3.7,57.3 V 45.3 L 13.2,42.8 C 14.4,39.3 16.1,36.1 18.3,33.2 L 14.3,24.1 L 22.8,15.6 L 31.9,19.6 C 34.8,17.4 38,15.7 41.5,14.5 L 44,5 Z M 50,21 A 29,29 0 1,0 50,79 A 29,29 0 1,0 50,21 Z"
        fill="currentColor"
      />
      <rect
        x="34"
        y="35"
        width="32"
        height="13"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="40" cy="41.5" r="2" fill="currentColor" />
      <line
        x1="46"
        y1="41.5"
        x2="60"
        y2="41.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="3 3.5"
      />
      <line x1="41" y1="48" x2="41" y2="52" stroke="currentColor" strokeWidth="2.5" />
      <line x1="59" y1="48" x2="59" y2="52" stroke="currentColor" strokeWidth="2.5" />
      <rect
        x="34"
        y="52"
        width="32"
        height="13"
        rx="3.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      <circle cx="40" cy="58.5" r="2" fill="currentColor" />
      <line
        x1="46"
        y1="58.5"
        x2="60"
        y2="58.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="3 3.5"
      />
    </svg>
  );
}
