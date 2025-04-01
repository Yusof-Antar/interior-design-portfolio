import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Delete the category from the database
    await prisma.projectCategory.delete({
      where: { id }, // Ensure `id` matches the UUID type in the schema
    });

    return NextResponse.json(
      { message: "Category deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting category:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Parse the request body
    const body = await req.json();
    const { title, isActive } = body;

    console.log(title, isActive);

    // Validate required fields
    if (!title || typeof title !== "string") {
      return NextResponse.json(
        { error: "Title is required and must be a string" },
        { status: 400 }
      );
    }

    if (isActive !== undefined && typeof isActive !== "boolean") {
      return NextResponse.json(
        { error: "isActive must be a boolean value" },
        { status: 400 }
      );
    }

    // Update the category in the database
    const updatedCategory = await prisma.projectCategory.update({
      where: { id }, // Ensure `id` matches the UUID type in the schema
      data: {
        title,
        isActive: isActive ?? true, // Default to true if isActive is not provided
      },
    });

    return NextResponse.json(updatedCategory, { status: 200 });
  } catch (error) {
    console.error("Error updating category:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
