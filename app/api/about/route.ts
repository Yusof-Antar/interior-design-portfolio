import prisma from "@/lib/prisma";
import { uploadFile } from "@/lib/supabase";
import { NextResponse } from "next/server";
import { join } from "path";

export async function GET() {
  try {
    const about = await prisma.about.findFirst({
      orderBy: {
        id: "desc", // or 'createdAt': 'desc' if you prefer
      },
      include: { Expertise: true },
    }); // Fetch the first record

    if (!about) {
      return NextResponse.json(
        { error: "No about section found" },
        { status: 404 }
      );
    }

    return NextResponse.json(about, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch about section" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const {
      studio,
      year,
      description,
      mission,
      vision,
      quote,
      quoteAuthor,
      image,
      expertise,
    } = body;

    // Find the first record
    const about = await prisma.about.findFirst();
    if (!about) {
      return NextResponse.json(
        { error: "No about section found" },
        { status: 404 }
      );
    }

    // Update the "About" record
    const updatedAbout = await prisma.about.update({
      where: { id: about.id },
      data: {
        studio,
        year,
        description,
        mission,
        vision,
        quote,
        quoteAuthor,
        image: image,
        Expertise: {
          deleteMany: {}, // Clear all existing expertise entries
          create: expertise.map((item: { id: string; path: string }) => ({
            path: item.path,
          })),
        },
      },
    });

    return NextResponse.json(updatedAbout, { status: 200 });
  } catch (error) {
    console.error("Error updating About section:", error);
    return NextResponse.json(
      { error: "Failed to update About section" },
      { status: 500 }
    );
  }
}

export async function DELETE(req: Request) {
  try {
    const url = new URL(req.url);
    const expertiseId = url.searchParams.get("expertiseId"); // Get the expertise ID from query parameters

    // Find the first About record
    const about = await prisma.about.findFirst();
    if (!about) {
      return NextResponse.json(
        { error: "No about section found" },
        { status: 404 }
      );
    }

    if (expertiseId) {
      // Delete a specific expertise entry by ID
      const deletedExpertise = await prisma.expertise.delete({
        where: { id: expertiseId },
      });

      if (!deletedExpertise) {
        return NextResponse.json(
          { error: "Expertise entry not found" },
          { status: 404 }
        );
      }

      return NextResponse.json(
        { message: "Expertise entry deleted successfully" },
        { status: 200 }
      );
    } else {
      // Optionally, delete the entire About record if no expertiseId is provided
      await prisma.about.delete({
        where: { id: about.id },
      });

      return NextResponse.json(
        { message: "About section deleted successfully" },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error("Error deleting About section or expertise:", error);
    return NextResponse.json(
      { error: "Failed to delete About section or expertise" },
      { status: 500 }
    );
  }
}
