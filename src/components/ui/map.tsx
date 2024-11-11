'use client'

import { GoogleMap, Marker } from "@react-google-maps/api";
import { useState } from "react";

const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371000; // Radius of the Earth in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180; // Difference in latitude (in radians)
  const dLng = ((lng2 - lng1) * Math.PI) / 180; // Difference in longitude (in radians)

  // Haversine formula
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
};

const MapComponent = () => {
	const [markerPosition, setMarkerPosition] = useState<google.maps.LatLng | null>(null);
	const [mapCenter, setMapCenter] = useState<google.maps.LatLngLiteral>({ lat: 43.7831200, lng: -79.1870963 });
	const [attemptCount, setAttemptCount] = useState(0);
	const [attempts, setAttempts] = useState<{ attempt: number; distance: number }[]>([]);
	const maxAttempts = 3;


	// THE COORDINATE OF IMAGE
	const targetLocation = { lat: 43.7861633, lng: -79.1880963 };

	// Handle map double-click event to update the marker position
	const handleMapDblClick = (event: google.maps.MapMouseEvent) => {
		let done = 0;
		if (attemptCount < maxAttempts) {
			const latLng = event.latLng;
			if (latLng) {
				setMarkerPosition(latLng);
				setMapCenter(latLng.toJSON());
				setAttemptCount(attemptCount + 1);
				const distance = calculateDistance(
          targetLocation.lat,
          targetLocation.lng,
          latLng.lat(),
          latLng.lng()
        );
				setAttempts(attempts.concat({ attempt: attemptCount + 1, distance: distance }));
				if (distance <= 20){
					setTimeout(() => {
						alert("You got it!");
					}, 300);
					done = 1;
				}
			}
		} 
		else {
			console.log("Already placed 3 markers (limit of 3 attempts)");
		}

		if (attemptCount == 2 && done == 0){
			setTimeout(() => {
				alert("Better luck next time :(");
			}, 1000);
		}
	};

/*
	const getMarkerCoordinates = () => {
		if (markerPosition) {
			const lat = markerPosition.lat(); // Get latitude
			const lng = markerPosition.lng(); // Get longitude
			alert(`Marker coordinates: Lat: ${lat}, Lng: ${lng}`);
		} else {
			console.log("No marker placed.");
		}
	};
*/

	const container = {
		width: '100%',
		height: '300px'
	};

	//Default frame 
	/*
	const center = {
		lat: 43.7831200,
		lng: -79.1870963
	}
	*/

	const zoom = 18

	const userOptions = {
		zoomControl: true,
		tilt: 0,
		gestureHandling: 'auto',
		mapTypeId: 'hybrid',
		disableDefaultUI: true,
		disableDoubleClickZoom: true,
		restriction: {	// Restrict users to only look around UTSC campus
			latLngBounds: {
				north: 43.78999,
				south: 43.781500,
				east: -79.18250,
				west: -79.19578,
			},
			strictBounds: false,
		},
	};
	return (
		<div>
			<GoogleMap
				mapContainerStyle={container}
				center={mapCenter}
				zoom={zoom}
				options={userOptions}
				onDblClick={handleMapDblClick}
			>
				{markerPosition && <Marker position={markerPosition} draggable={true} />}
			</GoogleMap>
			<div className="mt-4 p-4 bg-gray-700 rounded shadow-md w-full">
        <h2 className="text-xl font-bold text-center">User's Attempts</h2>
        <table className="min-w-full mt-4">
          <thead>
            <tr className="bg-gray-600 border-b align-middle">
              <th className="py-2 px-4 text-left">Attempt</th>
              <th className="py-2 px-4 text-left">Distance (m)</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((attempt, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{attempt.attempt}</td>
                <td className="py-2 px-4">{attempt.distance.toFixed(2)} m</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
		</div>
	)
};

export { MapComponent };