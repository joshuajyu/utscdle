import { MapPin } from "lucide-react";
import PixelatedImage from "@/components/pixelatedImage";
import { MapProvider } from "../hooks/mapProvider";
import { MapComponent } from ".././components/ui/map";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="py-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <MapPin className="h-10 w-10 text-white sm:mr-4 mr-0" />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">UTSCdle</h1>
        </div>
        <p className="mt-3 text-lg text-gray-300">
          Inspired by Geoguessr™ and Wordle™
        </p>
      </div>

      {/* Image and Map Section */}
      <div className="flex flex-col sm:flex-row sm:space-x-6 items-start justify-center w-full px-4 mb-4">
        {/* Pixelated Image */}
        <div className="w-full sm:w-1/2">
          <PixelatedImage
            src="/mountain2.jpg"
            desiredBlocks={30}
            alt="UTSC Image"
            guessNumber={3}
            className="w-full h-auto"
          />
        </div>

        {/* Placeholder for Second Component */}
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <MapProvider>
            <MapComponent />
          </MapProvider>
        </div>
      </div>

      <footer className="mt-auto"></footer>
    </div>
  );
}
