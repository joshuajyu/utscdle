"use client";

import { useJsApiLoader } from "@react-google-maps/api";
import React, { ReactNode, createContext, useContext, useState } from "react";

type MarkerPosition = { lat: number; lng: number } | null;
type Attempt = { position: MarkerPosition; distance: number; attempt: number };

type MapContextType = {
  markerPosition: MarkerPosition;
  setMarkerPosition: React.Dispatch<React.SetStateAction<MarkerPosition>>;
  attempts: Attempt[];
  addAttempt: (distance: number) => void;
  maxAttempts: number;
  isSuccessful?: boolean;
};

const MapContext = createContext<MapContextType | undefined>(undefined);

export function MapProvider({ children }: { children: ReactNode }) {
  // Load the Google Maps JavaScript API asynchronously
  const { isLoaded: scriptLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  });

  const [markerPosition, setMarkerPosition] = useState<MarkerPosition>(null);
  const [attempts, setAttempts] = useState<Attempt[]>([]);

  const addAttempt = (distance: number) => {
    if (markerPosition) {
      setAttempts((prev) => [
        ...prev,
        { position: markerPosition, distance, attempt: prev.length + 1 },
      ]);
    }
  };

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!scriptLoaded) return <p>Map Script is loading ...</p>;

  return (
    <MapContext.Provider
      value={{
        markerPosition,
        setMarkerPosition,
        attempts,
        addAttempt,
        maxAttempts: 3,
        isSuccessful: attempts.length > 0 && attempts[attempts.length - 1].distance <= 20,
      }}
    >
      {children}
    </MapContext.Provider>
  );
}

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (!context) {
    throw new Error("useMapContext must be used within a MapProvider");
  }
  return context;
};