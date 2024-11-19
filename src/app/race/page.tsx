import { MapPin } from "lucide-react";

export default function DailyChallenge() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      <div className="pt-4 pb-4 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <MapPin className="h-10 w-10 text-white sm:mr-4 mr-0" />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">UTSCdle</h1>
        </div>
        <p className="mt-3 text-lg text-gray-300">
          Inspired by Geoguessr™ and Wordle™
        </p>
      </div>
    </div>
  );
}
