"use client";

import React from "react";
import { ServerRackGraphic } from "./Logo";

export default function StickyBackgroundServers() {
  return (
    <div className="pointer-events-none select-none">
      {/* FIXED STICKY LEFT SERVER RACK GRAPHIC */}
      <div className="fixed -left-10 sm:-left-8 lg:left-4 top-1/2 -translate-y-1/2 w-[140px] h-[230px] sm:w-[220px] sm:h-[360px] lg:w-[380px] lg:h-[580px] text-[#1E5285] opacity-[0.09] z-0">
        <ServerRackGraphic className="w-full h-full" />
      </div>

      {/* FIXED STICKY RIGHT SERVER RACK GRAPHIC */}
      <div className="fixed -right-10 sm:-right-8 lg:right-4 top-1/2 -translate-y-1/2 w-[150px] h-[250px] sm:w-[240px] sm:h-[390px] lg:w-[440px] lg:h-[640px] text-[#1E5285] opacity-[0.10] z-0">
        <ServerRackGraphic className="w-full h-full" />
      </div>
    </div>
  );
}
