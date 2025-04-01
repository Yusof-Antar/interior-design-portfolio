import { uploadFile } from "@/lib/fileUpload";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { join } from "path";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }
    const deletedTestimonial = await prisma.testimonial.delete({
      where: { id: id },
    });

    return NextResponse.json(deletedTestimonial, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong!" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    // Parse the incoming FormData
    const formData = await request.formData();
    const { id } = await params;

    // Retrieve fields from the FormData object
    const file = formData.get("avatar") as unknown as File | null;
    const content = formData.get("content")?.toString();
    const name = formData.get("name")?.toString();
    const position = formData.get("position")?.toString();

    // Parse the testimonial ID from the URL parameters

    if (!id) {
      return NextResponse.json(
        { error: "Invalid testimonial ID" },
        {
          status: 400,
        }
      );
    }

    // Validation: Ensure required fields are present
    if (!content || content.trim() === "") {
      return NextResponse.json(
        { error: "Content field is required" },
        { status: 400 }
      );
    }

    if (!name || name.trim() === "") {
      return NextResponse.json(
        { error: "Name field is required" },
        {
          status: 400,
        }
      );
    }

    if (!position || position.trim() === "") {
      return NextResponse.json(
        { error: "Position field is required" },
        { status: 400 }
      );
    }

    // Fetch the existing testimonial to ensure it exists
    const existingTestimonial = await prisma.testimonial.findUnique({
      where: { id: id },
    });

    if (!existingTestimonial) {
      return NextResponse.json(
        { error: "Testimonial not found" },
        {
          status: 404,
        }
      );
    }

    // Define the base upload directory
    const uploadBaseDir = join(process.cwd(), "public", "uploads");
    let filePath = existingTestimonial.avatar; // Default to the existing avatar path

    // Upload the new file if provided
    if (file) {
      const folderName = "testimonials"; // Default folder
      filePath = await uploadFile(file, uploadBaseDir, folderName);
    }

    // Update the testimonial record in the database
    const updatedTestimonial = await prisma.testimonial.update({
      where: { id: id },
      data: {
        text: content,
        clientName: name,
        clientPosition: position,
        avatar: filePath, // Use the new file path or keep the existing one
      },
    });

    // Return success response
    return NextResponse.json(updatedTestimonial, {
      status: 200,
    });
  } catch (error) {
    console.error("Error updating testimonial:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
