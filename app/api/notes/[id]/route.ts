import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Note from "@/models/Note";

export async function GET(
  _req: Request,
  { params }: { params: { id: string } }
) {
  await connectDB();

  const note = await Note.findById(params.id);

  if (!note) {
    return NextResponse.json(
      { message: "Note not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(note);
}
