import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectDB } from "@/utils/mongoosedb";
import Image from "@/lib/models/image"; // Define an Image model in your project
import { auth } from "@/lib/auth";

export async function GET(
  request: Request,
  { params }: { params: { tag: string } }
) {
  try {
    // Connect to the database
    await connectDB();

    const tag = params.tag;

    // Validate the tag parameter
    if (!tag) {
      return NextResponse.json(
        { success: false, message: "Tag parameter is required." },
        { status: 400 }
      );
    }

    // Authenticate the user
    const session = await auth();
    if (!session || !session.user) {
      return NextResponse.json(
        { success: false, message: "User not authenticated." },
        { status: 401 }
      );
    }

    // Query the database for images with the given tag and shuffle results
    const images = await Image.aggregate([
      { $match: { tags: tag } }, // Filter documents containing the specified tag
      { $sample: { size: 100 } }, // Shuffle the results
    ]);

    // Return the list of images
    return NextResponse.json(
      { success: true, data: images },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while fetching images.",
      },
      { status: 500 }
    );
  }
}
