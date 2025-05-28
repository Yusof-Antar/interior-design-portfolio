import { join } from "path";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import fs from "fs";
import { uploadFile } from "@/lib/supabase";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb", // Adjust as needed
    },
  },
};

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = await params;

    // Validate that the ID is provided
    if (!id || id.trim() === "") {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

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

    // Fetch the existing project to check for old images
    const existingProject = await prisma.project.findUnique({
      where: { id },
      include: { ProjectImage: true },
    });

    if (!existingProject) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    // Update the project in the database
    const updatedProject = await prisma.project.update({
      where: { id },
      data: {
        title,
        description,
        link,
        categoryId,
        ProjectImage: {
          deleteMany: {}, // Delete all old image records
          create: images.map((path: string) => ({ path })), // Recreate all image records
        },
      },
      include: {
        ProjectImage: true, // Include related images
        category: true,
      },
    });

    // Return success response
    return NextResponse.json(updatedProject, { status: 200 });
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
// DELETE: Remove a project using params
export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;

    // Validate that the ID is provided
    if (!id || id.trim() === "") {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Delete the project and its associated images from the database
    const deletedProject = await prisma.project.delete({
      where: { id },
    });

    // Optionally, delete the associated images from the filesystem
    const uploadBaseDir = join(process.cwd(), "public", "portfolio");
    const projectImages = await prisma.projectImage.findMany({
      where: { projectId: id },
    });

    for (const image of projectImages) {
      const imagePath = join(
        uploadBaseDir,
        image.path.replace("/portfolio/", "")
      );
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    return NextResponse.json(
      { message: "Project deleted successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
