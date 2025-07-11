import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const services = await prisma.service.findMany();
    return NextResponse.json(services, { status: 200 });
  } catch (error) {

    return NextResponse.json(
      { error: "Failed to fetch services!" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    // Parse the incoming JSON body
    const body = await req.json();
    const { title, description, icon } = body;

    // Validate required fields
    if (!title || typeof title !== "string") {
      return NextResponse.json(
        { error: "Title is required and must be a string." },
        { status: 400 }
      );
    }

    if (!description || typeof description !== "string") {
      return NextResponse.json(
        { error: "Description is required and must be a string." },
        { status: 400 }
      );
    }

    if (!icon || typeof icon !== "string") {
      return NextResponse.json(
        { error: "Icon URL is required and must be a string." },
        { status: 400 }
      );
    }

    // Create the service in the database
    const newService = await prisma.service.create({
      data: {
        title,
        description,
        icon,
      },
    });

    // Return success response with the created service
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create service!" },
      { status: 500 }
    );
  }
}
