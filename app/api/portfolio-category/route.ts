import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await prisma.projectCategory.findMany({
      orderBy: { createdAt: "desc" }, // Order by creation date (newest first)
    });

    return NextResponse.json(categories, { status: 200 });
  } catch (error) {
    console.error("Error fetching project categories:", error);
    return NextResponse.json(
      { error: "Failed to fetch project categories!" },
      { status: 500 }
    );
  }
}

// POST: Create a new project category
export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    const body = await req.json();
    const { title, isActive } = body;

    // Validate required fields
    if (!title || typeof title !== "string") {
      return NextResponse.json(
        { error: "Title is required and must be a string." },
        { status: 400 }
      );
    }

    if (isActive !== undefined && typeof isActive !== "boolean") {
      return NextResponse.json(
        { error: "isActive must be a boolean value." },
        { status: 400 }
      );
    }

    // Create the project category in the database
    const newCategory = await prisma.projectCategory.create({
      data: {
        title,
        isActive: isActive ?? true, // Default to true if not provided
      },
    });

    // Return success response with the created category
    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    console.error("Error creating project category:", error);
    return NextResponse.json(
      { error: "Failed to create project category!" },
      { status: 500 }
    );
  }
}
