import { MapPin } from "lucide-react";
import PixelatedImage from "@/components/pixelatedImage";
import { MapProvider } from "@/hooks/mapProvider";
import { MapComponent } from "@/components/map";
import AttemptTable from "@/components/attemptTable";
import CheckDistanceButton from "@/components/confirmButton";

export default function Home() {
  const currentDate = () => new Date().toDateString();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center w-full">
      <div className="py-10 px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <MapPin className="h-10 w-10 text-white sm:mr-4 mr-0" />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">UTSCdle</h1>
        </div>
        <p className="mt-3 text-lg text-gray-300">
          Inspired by Geoguessr™ and Wordle™
        </p>
        <p className="mt-3 text-lg text-gray-300">
          {currentDate()}
        </p>
      </div>

      {/* Image and Map Section */}
      <MapProvider>
        <div className="flex flex-col sm:flex-row sm:space-x-6 w-full items-center p-4 bg-[#424242] rounded-xl shadow-2xl mb-4 mr-6">
          {/* Pixelated Image */}
          <div className="w-full sm:w-1/2">
            <PixelatedImage
              src="/walkway.jpg"
              desiredBlocks={30}
              alt="UTSC Image"
              // guessNumber={2}
            />
          </div>

          {/* Map Component */}
          <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
            <MapComponent />
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-1/2 items-center bg-[#424242] rounded-xl shadow-2xl"></div>
        <CheckDistanceButton />
        <div className="w-60 h-60">
          <AttemptTable />
        </div>
      </MapProvider>

      <footer className="mt-auto"></footer>
    </div>
  );
}
