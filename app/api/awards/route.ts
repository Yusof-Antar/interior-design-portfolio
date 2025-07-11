import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const awards = await prisma.award.findMany();
    return NextResponse.json(awards);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch awards!" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, organization, year } = body;

    if (!title || !organization || !year) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Create new award in the database
    const award = await prisma.award.create({
      data: { title, organization, year },
    });

    return NextResponse.json(award, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
