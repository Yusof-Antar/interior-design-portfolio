import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { join } from "path";
import { uploadFile } from "@/lib/supabase";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb", // Adjust as needed
    },
  },
};
// GET: Fetch all projects with their associated images
export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        ProjectImage: true, // Include related images
        category: true,
      },
      orderBy: { createdAt: "desc" }, // Order by creation date (newest first)
    });

    return NextResponse.json(projects, { status: 200 });
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects!" },
      { status: 500 }
    );
  }
}

// POST: Create a new project and save images
export async function POST(request: Request): Promise<Response> {
  try {
    // Parse the incoming FormData
    const body = await request.json();
    const { title, description, link, categoryId, images } = body;

    // Validation: Ensure all required fields are present
    if (!title || title.trim() === "") {
      return NextResponse.json(
        { error: "Title field is required" },
        { status: 400 }
      );
    }

    if (!description || description.trim() === "") {
      return NextResponse.json(
        { error: "Description field is required" },
        { status: 400 }
      );
    }

    if (!categoryId || categoryId.trim() === "") {
      return NextResponse.json(
        { error: "Category ID field is required" },
        { status: 400 }
      );
    }

    if (images.length === 0) {
      return NextResponse.json(
        { error: "At least one image is required" },
        { status: 400 }
      );
    }

    // Define the base upload directory

    // Create the project in the database
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        link,
        categoryId,
        ProjectImage: {
          create: images.map((path: string) => ({ path })),
        },
      },
      include: {
        ProjectImage: true, // Include related images
        category: true,
      },
    });

    // Return success response
    return NextResponse.json(newProject, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
