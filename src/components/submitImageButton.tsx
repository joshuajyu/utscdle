"use client";

import { useMapSIContext } from "../hooks/mapSIProvider";
import { Button } from "./ui/button";
import emailjs from 'emailjs-com';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

const SubmitImageButton: React.FC = () => {

	const { markerPosition } = useMapSIContext();
	//const [imageFile, setImageFile] = useState<File | null>(null);
  //const [imageBase64, setImageBase64] = useState<string | null>(null);

	const handleSubmitImage = (e: React.MouseEvent) => {
		console.log("handling submit image");
    e.preventDefault(); 

    if (markerPosition) {
      const emailData = {
        to_email: 'kxtherinehuxng@gmail.com',  // The recipient's email 
        user_email: 'utscdle@gmail.com',   // The sender's email 
        message: `This is a test message: Marker Position: Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`,
      };

      emailjs.send(
        'service_ic2vip7',     // Service ID
        'template_iv6lmn7',    // Template ID
        emailData,             // The data to send in the email template
        'LrNa7Q_AJu5nPo59V'         // Public key under API keys
      )
      .then((result) => {
        console.log('Email sent successfully:', result.text);

      }, (error) => {
        console.error('Error sending email:', error.text);

      });
    }
  };

	/*
	const handleImagetoBase64 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      // Convert image to base64 string
			/*
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
			
			console.log(`image file: ${file}`);
    }
  };
	*/
	

  return (
    <div className="flex flex-col w-full items-center">
			<div className="grid w-full max-w-sm items-center gap-1.5 mb-5">
				<Label htmlFor="picture">Select image from device</Label>
				<Input id="picture" type="file" />
			</div>
      <Button
        onClick={handleSubmitImage}
				disabled={!markerPosition}
      >
        Submit image
      </Button>
    </div>
  );
};


export { SubmitImageButton };
