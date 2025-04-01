import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const infos = await prisma.contactInfo.findMany();

    return NextResponse.json(infos[0], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch awards!" },
      { status: 500 }
    );
  }
}

export async function PUT(req: Request) {
  try {
    // The fixed ID to update
    const id = "1";

    // Parse the request body
    const body = await req.json();
    const { address, email, phone, officeHours, mapEmbedded } = body;

    // Validate required fields
    if (!address || !email || !phone || !officeHours || !mapEmbedded) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Update the contact information in the database
    const updatedContact = await prisma.contactInfo.update({
      where: { id },
      data: { address, email, phone, officeHours, mapEmbedded },
    });

    return NextResponse.json(updatedContact, { status: 200 });
  } catch (error) {

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
