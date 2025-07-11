import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  _req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // Delete the award from the database
    const deletedAward = await prisma.award.delete({
      where: { id: id },
    });

    return NextResponse.json(deletedAward, { status: 200 });
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
    const { title, organization, year } = body;

    if (!title || !organization || !year) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Update the award in the database
    const updatedAward = await prisma.award.update({
      where: { id },
      data: { title, organization, year },
    });

    return NextResponse.json(updatedAward, { status: 200 });
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

