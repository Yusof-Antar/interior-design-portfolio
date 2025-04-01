import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { join } from "path";
import { uploadFile } from "@/lib/fileUpload";

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
    const formData = await request.formData();

    // Retrieve fields from the FormData object
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const link = formData.get("link")?.toString();
    const categoryId = formData.get("categoryId")?.toString();
    const files = formData.getAll("images") as File[];

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

    if (files.length === 0) {
      return NextResponse.json(
        { error: "At least one image is required" },
        { status: 400 }
      );
    }

    // Define the base upload directory
    const uploadBaseDir = join(process.cwd(), "public", "uploads");

    // Upload each file and store their paths
    const imagePaths: string[] = [];
    for (const file of files) {
      const filePath = await uploadFile(file, uploadBaseDir, "portfolio");
      imagePaths.push(filePath);
    }

    // Create the project in the database
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        link,
        categoryId,
        ProjectImage: {
          create: imagePaths.map((path) => ({ path })),
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
