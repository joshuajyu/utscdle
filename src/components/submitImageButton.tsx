// components/SubmitImageButton.tsx
"use client";

import { useMapSIContext } from "../hooks/mapSIProvider";
import { Button } from "./ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

const SubmitImageButton: React.FC = () => {
  const { markerPosition } = useMapSIContext(); // Get marker position from context
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let file: File | null = null;

    // Check if files exist and select the first one
    if (e.target.files && e.target.files.length > 0) {
      file = e.target.files[0];
    }

    setImageFile(file);
  };

  const handleSubmitImage = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (markerPosition && imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile); // Append image file
      formData.append("markerPosition", JSON.stringify(markerPosition)); // Append marker position

      try {
        // Send the data to the backend API
        const response = await fetch("/api/email", {
          method: "POST",
          body: formData,
        });

        const result = await response.json();
        if (result.success) {
          console.log("Image submitted successfully.");
        } else {
          console.error("Error submitting image:", result.message);
        }
      } catch (error) {
        console.error("Error submitting image:", error);
      }
    }
  };

  const isButtonDisabled = !markerPosition || !imageFile;

  return (
    <div className="flex flex-col w-full items-center">
      <div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
        <Label htmlFor="picture">Select image from device</Label>
        <Input id="picture" type="file" onChange={handleImageChange} />
      </div>

      <Button
        onClick={handleSubmitImage}
        disabled={isButtonDisabled}  // Disable if no marker position or image file
      >
        Submit image
      </Button>
    </div>
  );
};

export { SubmitImageButton };
