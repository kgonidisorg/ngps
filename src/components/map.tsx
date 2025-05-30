"use client";
import dynamic from "next/dynamic";

// Dynamically import the SubwayMap component to ensure it only renders on the client side
const DynamicSubwayMap = dynamic(() => import("@/components/SubwayMap"), { ssr: false });

export default function MapWrapper() {
    return <DynamicSubwayMap />;
}
