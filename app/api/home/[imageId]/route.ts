// app/api/home/[imageId]/route.ts
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"; // Utility to delete files from Supabase Storage

export async function DELETE(
  request: Request,
  { params }: { params: { imageId: string } }
) {
  const { imageId } = await params;

  try {
    // Find the image in the database
    const image = await prisma.headerImage.findUnique({
      where: { id: imageId },
    });

    if (!image) {
      return NextResponse.json({ error: "Image not found" }, { status: 404 });
    }

    // Delete the image file from Supabase Storage (if applicable)
    // if (image.path) {
    //   await deleteFile(image.path, "uploads"); // Adjust the bucket name as needed
    // }

    // Delete the image reference from the database
    await prisma.headerImage.delete({
      where: { id: imageId },
    });

    return NextResponse.json(
      { message: "Image deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting image:", error);
    return NextResponse.json(
      { error: "Failed to delete image" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
