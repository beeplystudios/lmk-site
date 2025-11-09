import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import WorldMap from "@/components/ui/world-map";
import { WorldMapDemo } from "@/components/map-demo";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <header className="min-h-screen flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
        <WorldMapDemo />

        <button className="bg-[#cef5e3] text-black px-4 py-2 rounded-full text-sm font-medium">
          Download Android Build
        </button>
      </header>
    </div>
  );
}
