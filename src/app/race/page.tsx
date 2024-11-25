import { MapPin } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select"
import { Button } from "../../components/ui/button";


export default function DailyChallenge() {

  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      <div className="pt-4 pb-4 text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <MapPin className="h-10 w-10 text-white sm:mr-4 mr-0" />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">UTSCdle</h1>
        </div>
        <p className="mt-3 text-lg text-gray-300">
          Race
        </p>
      </div>
      <div className="bg-gray-500 w-96 h-auto rounded-lg flex flex-wrap items-center justify-between">
        <div className="flex justify-between items-center space-x-3 mt-4 mb-4 ml-7 mr-7">
          <div>
            Number of rounds:
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between items-center space-x-3 mt-4 mb-4 ml-7 mr-7">
          <div>
            Time limit:
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1 minute" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 minute">1 minute</SelectItem>
              <SelectItem value="5 minutes">5 minutes</SelectItem>
              <SelectItem value="Custom">Custom</SelectItem>
              <SelectItem value="None">None</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="flex justify-between items-center space-x-3 mt-4 mb-4 ml-7 mr-7">
          <div>
            Photos per round:
          </div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="3">3</SelectItem>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button>Create room!</Button>

      </div>


    </div>
  );
}
