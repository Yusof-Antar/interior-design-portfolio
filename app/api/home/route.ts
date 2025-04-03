// app/api/home/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { uploadFile } from "@/lib/supabase";
import { join } from "path";

const prisma = new PrismaClient();

// GET: Fetch the Header with ID 1 and its related images
export async function GET() {
  try {
    const header = await prisma.header.findUnique({
      where: { id: "1" }, // Fetch only the Header with ID 1
      include: {
        HeaderImage: true, // Include related images
      },
    });

    if (!header) {
      return NextResponse.json({ error: "Header not found" }, { status: 404 });
    }

    return NextResponse.json(header, { status: 200 });
  } catch (error) {
    console.error("Error fetching header:", error);
    return NextResponse.json(
      { error: "Failed to fetch header!" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// PUT: Update the Header with ID 1
export async function PUT(request: Request): Promise<Response> {
  try {
    // Parse the incoming FormData
    const formData = await request.formData();

    // Extract fields from FormData
    const logoText = formData.get("logoText")?.toString();
    const heroTitle = formData.get("heroTitle")?.toString();
    const heroSubtitle = formData.get("heroSubtitle")?.toString();
    const primaryButtonText = formData.get("primaryButtonText")?.toString();
    const secondaryButtonText = formData.get("secondaryButtonText")?.toString();

    // Extract kept image URLs (existing images to keep)
    const keptImages = formData
      .getAll("keptImages")
      .map((path) => path.toString())
      .filter((path) => typeof path === "string" && path.trim() !== "");

    // Extract new image files
    const imageFiles = formData.getAll("images") as File[];

    // Validate required fields
    if (
      !logoText ||
      !heroTitle ||
      !heroSubtitle ||
      !primaryButtonText ||
      !secondaryButtonText
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Start a transaction to ensure atomic updates
    const updatedHeader = await prisma.$transaction(async (tx) => {
      // Fetch the existing header to check for old images
      const existingHeader = await tx.header.findUnique({
        where: { id: "1" },
        include: { HeaderImage: true },
      });

      if (!existingHeader) {
        throw new Error("Header not found");
      }

      // Identify images to delete (those not in keptImages)
      const existingImagePaths = existingHeader.HeaderImage.map(
        (img) => img.path
      );
      const imagesToDelete = existingImagePaths.filter(
        (path) => !keptImages.includes(path)
      );

      // Delete old images from the database
      if (imagesToDelete.length > 0) {
        await tx.headerImage.deleteMany({
          where: { headerId: "1", path: { in: imagesToDelete } },
        });

        // Optionally, delete files from the filesystem
      }

      // Upload new image files to Supabase Storage and get their URLs
      const uploadedImageUrls = await Promise.all(
        imageFiles.map(async (file) => {
          try {
            return await uploadFile(file, "uploads", "header");
          } catch (uploadError) {
            console.error(`Failed to upload file ${file.name}:`, uploadError);
            throw new Error("Failed to upload one or more images.");
          }
        })
      );

      // Combine kept images and newly uploaded images
      const allImagePaths = Array.from(
        new Set([...keptImages, ...uploadedImageUrls])
      );

      // Update the Header with ID 1
      const header = await tx.header.update({
        where: { id: "1" },
        data: {
          logoText,
          heroTitle,
          heroSubtitle,
          primaryButtonText,
          secondaryButtonText,
          HeaderImage: {
            deleteMany: {}, // Delete all old image records
            create: allImagePaths.map((path) => ({ path })), // Recreate all image records
          },
        },
        include: {
          HeaderImage: true, // Include related images in the response
        },
      });

      return header;
    });

    return NextResponse.json(updatedHeader, { status: 200 });
  } catch (error) {
    console.error("Error updating header:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
