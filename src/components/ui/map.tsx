'use client'

import { GoogleMap } from "@react-google-maps/api";

const container = {
	width: '100%',
	height: '300px'
};

//Default frame 
const center = {
	lat: 43.7831200,
	lng: -79.1870963
}

const zoom = 18

const userOptions = {
	zoomControl: true,
	tilt: 0,
	gestureHandling: 'auto',
	mapTypeId: 'hybrid',
	disableDefaultUI: true,
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

const MapComponent = () => {
	return (
		<div>
			<GoogleMap
				mapContainerStyle={container}
				center={center}
				zoom={zoom}
				options={userOptions}
			>
			</GoogleMap>
		</div>
	)
};

export { MapComponent };