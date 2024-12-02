// src/app/api/email/route.ts

import { NextResponse } from "next/server";
import sgMail from '@sendgrid/mail';

const sendGridApiKey = process.env.SENDGRID_API_KEY;
if (!sendGridApiKey) {
    throw new Error('SENDGRID_API_KEY is not defined in .env.local');
  }
sgMail.setApiKey(sendGridApiKey);

export async function POST(request: Request) {
  try {
    // Parse the incoming form data (multipart form with file upload)
    const formData = await request.formData();
    const imageFile = formData.get('image') as File; // The image file from the form
    const markerPosition = JSON.parse(formData.get('markerPosition') as string); // Lat, Lng info

    const toEmail = 'utscdle@gmail.com';  // The recipient's email
    const userEmail = 'utscdle@gmail.com';  // The sender's email

    if (!imageFile || !markerPosition) {
      return NextResponse.json(
        { success: false, message: "Image and marker position are required." },
        { status: 400 }
      );
    }

    // Convert the image to base64 (since we need to attach it to an email)
    const base64Image = await imageFile.arrayBuffer();
    const buffer = Buffer.from(base64Image).toString('base64');

    // Prepare email data
    const emailData = {
      to: toEmail,
      from: userEmail,
      subject: 'New Image Submission',
      text: `This is a test message: Marker Position: Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`,
      attachments: [
        {
          content: buffer,
          filename: imageFile.name,
          type: imageFile.type,
          disposition: 'attachment',
        }
      ]
    };

    // Send the email using SendGrid
    await sgMail.send(emailData);

    // Return success response
    return NextResponse.json({ success: true, message: "Image submitted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error submitting image:", error);
    return NextResponse.json(
      { success: false, message: "An error occurred while submitting the image." },
      { status: 500 }
    );
  }
}
