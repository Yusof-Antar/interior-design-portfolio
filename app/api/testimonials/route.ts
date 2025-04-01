import prisma from "@/lib/prisma";
import { writeFile } from "fs";
import multer from "multer";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import fs from "fs";
import { uploadFile } from "@/lib/fileUpload";

export const config = {
  api: {
    bodyParser: false, // Multer will handle the body parsing
  },
};

export async function GET() {
  try {
    const testimonials = await prisma.testimonial.findMany();
    return NextResponse.json(testimonials, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    // Parse the incoming FormData
    const formData = await request.formData();

    // Retrieve fields from the FormData object
    const file = formData.get("avatar") as unknown as File | null;
    const content = formData.get("content")?.toString();
    const name = formData.get("name")?.toString();
    const position = formData.get("position")?.toString();

    // Validation: Ensure all required fields are present
    if (!file) {
      return NextResponse.json(
        { error: "No file uploaded for avatar" },
        { status: 400 }
      );
    }

    if (!content || content.trim() === "") {
      return NextResponse.json(
        { error: "Content field is required" },
        { status: 400 }
      );
    }

    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Name field is required" },
        {
          status: 400,
        }
      );
    }

    if (!position || position.trim() === "") {
      return NextResponse.json(
        { error: "Position field is required" },
        { status: 400 }
      );
    }

    // Define the base upload directory
    const uploadBaseDir = join(process.cwd(), "public", "uploads");

    // Upload the file using the utility function
    const folderName = "testimonials"; // Default folder
    const filePath = await uploadFile(file, uploadBaseDir, folderName);

    // Create a new testimonial record in the database
    const testimonial = await prisma.testimonial.create({
      data: {
        text: content,
        clientName: name,
        clientPosition: position,
        avatar: filePath,
      },
    });

    // Return success response
    return NextResponse.json(
      testimonial,

      { status: 200 }
    );
  } catch (error) {
    console.error("Error creating testimonial:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
