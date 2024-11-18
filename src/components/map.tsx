"use client";

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useRef } from "react";
import { useMapContext } from "@/hooks/mapProvider";

const MapComponent = () => {
  const { markerPosition, setMarkerPosition } = useMapContext();
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

  return (
    <div className="">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "50vh",
          minHeight: "200px",
          borderRadius: "12px",
        }}
        center={mapCenter.current}
        clickableIcons={false}
        extraMapTypes={[]}
        zoom={zoom}
        options={userOptions}
        onClick={placeMarker}
      >
        {markerPosition && (
          <Marker position={markerPosition} draggable={false} />
        )}
      </GoogleMap>
    </div>
  );
};

export { MapComponent };