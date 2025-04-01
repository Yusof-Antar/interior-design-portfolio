import { join } from "path";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadFile } from "@/lib/fileUpload";
import fs from "fs";

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
): Promise<Response> {
  try {
    const { id } = params;

    // Validate that the ID is provided
    if (!id || id.trim() === "") {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Parse the incoming FormData
    const formData = await request.formData();

    // Retrieve fields from the FormData object
    const title = formData.get("title")?.toString();
    const description = formData.get("description")?.toString();
    const link = formData.get("link")?.toString();
    const categoryId = formData.get("categoryId")?.toString();
    const files = formData.getAll("images") as File[];
    const keptImagePaths = formData.getAll("keptImages") as string[];

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

    // Delete images that are no longer kept
    const existingImagePaths = existingProject.ProjectImage.map(
      (image) => image.path
    );

    const imagesToDelete = existingImagePaths.filter(
      (path) => !keptImagePaths.includes(path)
    );

    if (imagesToDelete.length > 0) {
      // Delete images from the database
      await prisma.projectImage.deleteMany({
        where: { projectId: id, path: { in: imagesToDelete } },
      });

      // Optionally, delete images from the filesystem
      const fs = require("fs");
      const uploadBaseDir = join(process.cwd(), "public", "uploads");
      imagesToDelete.forEach((path) => {
        const filePath = join(uploadBaseDir, path);
        if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath); // Delete the file
        }
      });
    }

    // Define the base upload directory
    const uploadBaseDir = join(process.cwd(), "public", "uploads");

    // Upload each new file and store their paths
    const newImagePaths: string[] = [];
    for (const file of files) {
      const filePath = await uploadFile(file, uploadBaseDir, "portfolio");
      newImagePaths.push(filePath);
    }

    // Combine kept images with new ones
    const updatedImagePaths = [...keptImagePaths, ...newImagePaths];

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
          create: updatedImagePaths.map((path) => ({ path })), // Recreate all image records
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
