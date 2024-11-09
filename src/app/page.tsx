import { MapPinned } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <div className="justify-center py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:justify-center">
            <MapPinned className="h-10 w-10 text-white sm:mr-4 mr-0" />
            <h1 className="text-3xl font-bold text-white sm:text-4xl">
              UTSCdle
            </h1>
          </div>
          <p className="mt-3 text-lg text-gray-300">Inspired by Geoguessr™ and Wordle™</p>
        </div>
      </div>
      <footer className="mt-auto"></footer>
    </div>
  );
}
