"use client";

import { Button } from "./ui/button";


const SubmitImageButton: React.FC = () => {

	const handleSubmitImage = () => {

	}

  return (
    <div>
      <Button
        onClick={handleSubmitImage}
      >
        Submit image
      </Button>
    </div>
  );
};

export { SubmitImageButton };
