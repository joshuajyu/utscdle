"use client";

import { GoogleMap, Marker, Circle } from "@react-google-maps/api";
import { useRef } from "react";
import { useMapContext } from "@/hooks/mapProvider";

const MapComponent = () => {
  const { markerPosition, setMarkerPosition, attempts, maxAttempts, isSuccessful } = useMapContext();
  const mapCenter = useRef({ lat: 43.78427807639849, lng: -79.18671957505939 });
  const zoom = 18;
  const placeMarker = (event: google.maps.MapMouseEvent) => {
    if (event.latLng) {
      setMarkerPosition({ lat: event.latLng.lat(), lng: event.latLng.lng() });
    }
  };

  const userOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    disableDefaultUI: true,
    mapTypeControl: true,
    fullscreenControl: true,
    scaleControl: true,
    disableDoubleClickZoom: true,
    restriction: {
      // Restrict users to only look around UTSC campus
      latLngBounds: {
        north: 43.78999,
        south: 43.7815,
        east: -79.1825,
        west: -79.19578,
      },
      strictBounds: false,
    },
  };

  let currentPosition = markerPosition;
  const targetLocation = { lat: 43.7861633, lng: -79.1880963 };
  let displayCenter = mapCenter.current;

  if (attempts.length >= maxAttempts || isSuccessful) {
    displayCenter = targetLocation;
  }

  const correctMarker = {
    url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
    scaledSize: new window.google.maps.Size(40, 40),
  };


  return (
    <div className="">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "50vh",
          minHeight: "200px",
          borderRadius: "12px",
        }}
        center={displayCenter}
        clickableIcons={false}
        extraMapTypes={[]}
        zoom={zoom}
        options={userOptions}
        onClick={placeMarker}
      >
        {markerPosition && (
          <Marker position={currentPosition} draggable={false} />
        )}
        {((attempts.length >= maxAttempts) || isSuccessful) && (
          <div>
            <Marker position={targetLocation} draggable={false} icon={correctMarker} />
            <Circle
              center={displayCenter}
              radius={20} // 20 meters radius
              options={{
                fillColor: "#00FF00", // Fill color (green)
                fillOpacity: 0.35,     // Opacity of the circle fill
                strokeColor: "#00FF00", // Stroke color (green)
                strokeOpacity: 1,     // Opacity of the stroke
                strokeWeight: 2,      // Stroke width
              }}
            />
          </div>

        )}
      </GoogleMap>
    </div>
  );
};

export { MapComponent };