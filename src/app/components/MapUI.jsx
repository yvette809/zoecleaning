"use client";

import dynamic from "next/dynamic";

// Import Map Component with SSR Disabled
const DynamicMap = dynamic(() => import("./MapComponent"), {
  ssr: false,
});

const MapUI = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <DynamicMap />
    </div>
  );
};

export default MapUI;
