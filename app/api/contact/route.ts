import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET: Fetch all submitted forms
export async function GET() {
  try {
    const forms = await prisma.form.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(forms, { status: 200 });
  } catch (error) {
    console.error("Error fetching forms:", error);
    return NextResponse.json(
      { error: "Failed to fetch contact forms" },
      { status: 500 }
    );
  }
}

// POST: Create a new form entry
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { subject, message, email, type, budget } = body;

    console.log(body);
    // Validate required fields
    console.log(!message || !email || !type || !budget);
    if (!subject || !message || !email || !type || !budget) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Create a new form entry
    const newForm = await prisma.form.create({
      data: {
        subject,
        body: message,
        email,
        type,
        budget,
      },
    });

    return NextResponse.json(newForm, { status: 201 });
  } catch (error) {
    console.error("Error submitting form:", error);
    return NextResponse.json(
      { error: "Failed to submit the form" },
      { status: 500 }
    );
  }
}
