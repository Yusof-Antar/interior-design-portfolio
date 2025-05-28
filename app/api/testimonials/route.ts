import prisma from "@/lib/prisma";
import { writeFile } from "fs";
import multer from "multer";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import fs from "fs";
import { uploadFile } from "@/lib/supabase";

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
    const body = await request.json();
    const { content, name, position, avatar } = body;

    // Validation: Ensure all required fields are present
    if (!avatar) {
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

    // Create a new testimonial record in the database
    const testimonial = await prisma.testimonial.create({
      data: {
        text: content,
        clientName: name,
        clientPosition: position,
        avatar: avatar,
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
