import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Fetch all social media records
    const infos = await prisma.socialMedia.findMany();

    // Transform the data into a key-value object
    const socialMedia: Record<string, string> = infos.reduce((acc, info) => {
      acc[info.title.toLowerCase()] = info.text; // Convert title to lowercase for consistency
      return acc;
    }, {} as Record<string, string>);

    return NextResponse.json(socialMedia, { status: 200 });
  } catch (error) {
    console.error("Error fetching social media:", error);
    return NextResponse.json(
      { error: "Failed to fetch social media links!" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json(); // Parse request body

    // Validate that at least one social media link exists in the body
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: "At least one social media link is required!" },
        { status: 400 }
      );
    }

    // Convert the object into an array of updates
    const updates = Object.entries(body).map(async ([title, text]) => {
      return prisma.socialMedia.updateMany({
        where: { title: title.toLowerCase() },
        data: { text },
      });
    });

    // Execute all updates in parallel
    const results = await Promise.all(updates);

    // Check if any records were updated
    const updatedCount = results.reduce((acc, res) => acc + res.count, 0);
    if (updatedCount === 0) {
      return NextResponse.json(
        { error: "No matching social media entries found!" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Social media links updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating social media:", error);
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}
