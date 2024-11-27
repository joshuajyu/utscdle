"use client";

import { useMapSIContext } from "../hooks/mapSIProvider";
import { Button } from "./ui/button";


const SubmitImageButton: React.FC = () => {

	const { markerPosition } = useMapSIContext();

	const handleSubmitImage = () => {

	}

	let disable=false;
	if (!markerPosition){
		disable = true
	}

  return (
    <div>
      <Button
        onClick={handleSubmitImage}
				disabled={disable}
      >
        Submit image
      </Button>
    </div>
  );
};

export { SubmitImageButton };
