import { MapPin } from "lucide-react";
import { cards } from "@/components/collections/cardData";

interface CollectionsProps {
  params: {
    tagFilter: string;
  };
}

export default function Collections({ params }: CollectionsProps) {
  const { tagFilter } = params;

  const card = cards.find((card) => card.tagFilter === tagFilter);

  return (
    <div className="min-h-screen flex flex-col items-center w-full">
      <div className="pt-4 pb-4 text-center items-center justify-start">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <MapPin className="h-10 w-10 text-white sm:mr-4 mr-0" />
          <h1 className="text-3xl font-bold text-white sm:text-4xl">UTSCdle</h1>
        </div>
        <p className="mt-3 text-xl font-bold text-gray-300">{card?.title}</p>
      </div>
    </div>
  );
}
