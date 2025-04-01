import { uploadFile } from "@/lib/fileUpload";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { join } from "path";

export async function GET() {
  try {
    const about = await prisma.about.findFirst({
      include: { Expertise: true },
    }); // Fetch the first record
    console.log(about);

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
    const formData = await req.formData();

    // Retrieve fields from FormData
    const studio = formData.get("studio")?.toString();
    const year = formData.get("year")?.toString();
    const description = formData.get("description")?.toString();
    const mission = formData.get("mission")?.toString();
    const vision = formData.get("vision")?.toString();
    const quote = formData.get("quote")?.toString();
    const quoteAuthor = formData.get("quoteAuthor")?.toString();
    const file = formData.get("image") as unknown as File | null;

    // Parse expertise data (sent as a JSON string)
    const expertiseRaw = formData.get("expertise")?.toString();
    const expertise = expertiseRaw ? JSON.parse(expertiseRaw) : [];

    // Find the first record
    const about = await prisma.about.findFirst();
    if (!about) {
      return NextResponse.json(
        { error: "No about section found" },
        { status: 404 }
      );
    }

    // Define the base upload directory
    const uploadBaseDir = join(process.cwd(), "public", "uploads");
    let filePath = about.image; // Default to the existing image path

    // Upload the new file if provided
    if (file instanceof File) {
      const folderName = "about"; // Default folder
      filePath = await uploadFile(file, uploadBaseDir, folderName);
    } else if (typeof file === "string") {
      // Retain the existing image URL if no new file is uploaded
      filePath = file;
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
        image: filePath,
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
