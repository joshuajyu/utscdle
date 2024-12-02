"use client";

import { useMapSIContext } from "../hooks/mapSIProvider";
import { Button } from "./ui/button";
import emailjs from 'emailjs-com';
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { useState } from "react";

const SubmitImageButton: React.FC = () => {
	const { markerPosition } = useMapSIContext();

	const [imageFile, setImageFile] = useState<File | null>(null);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let file: File | null = null;

		// File exists and the length is greater than 0
		if (e.target.files && e.target.files.length > 0) {
			file = e.target.files[0];
		}

		setImageFile(file);
	};

	const handleSubmitImage = (e: React.MouseEvent) => {
		e.preventDefault();

		if (markerPosition && imageFile) {
			const emailData = {
				to_email: 'kxtherinehuxng@gmail.com',  // The recipient's email 
				user_email: 'utscdle@gmail.com',       // The sender's email 
				message: `This is a test message: Marker Position: Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`,
			};

			emailjs.send(
				'service_ic2vip7',     // Service ID
				'template_iv6lmn7',    // Template ID
				emailData,             // The data to send in the email template
				'LrNa7Q_AJu5nPo59V',         // Public key under API keys
			)
				.then((result) => {
					console.log('Email sent successfully:', result.text);
				}, (error) => {
					console.error('Error sending email:', error.text);
				});
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
				disabled={isButtonDisabled}  // Disable the button if no marker position or image file
			>
				Submit image
			</Button>
		</div>
	);
};

export { SubmitImageButton };
