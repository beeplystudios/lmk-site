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
      <header className="flex flex-col items-center justify-center text-white text-[calc(10px+2vmin)]">
        <WorldMapDemo />
      </header>
    </div>
  );
}
