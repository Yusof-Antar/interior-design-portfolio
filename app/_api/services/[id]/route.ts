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

    // Delete the service from the database
    const deletedService = await prisma.service.delete({
      where: { id: id }, // Ensure `id` is parsed as an integer
    });

    return NextResponse.json(deletedService, { status: 200 });
  } catch (error) {
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
    const { title, description, icon } = body;

    // Validate required fields
    if (!title || !description || !icon) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Update the service in the database
    const updatedService = await prisma.service.update({
      where: { id: id }, // Ensure `id` is parsed as an integer
      data: { title, description, icon },
    });

    return NextResponse.json(updatedService, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
