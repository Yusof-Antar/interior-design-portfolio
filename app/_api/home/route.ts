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
    const body = await request.json();

    const {
      logoText,
      heroTitle,
      heroSubtitle,
      primaryButtonText,
      secondaryButtonText,
      images,
    } = body;

    // Extract kept image URLs (existing images to keep)

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
            create: images.map((path: string) => ({ path })), // Recreate all image records
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
