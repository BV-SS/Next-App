import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Note from "@/models/Note";

export async function GET(){
    await connectDB();
    const notes = await Note.find({}).sort({created_at: -1})
    return NextResponse.json(notes)
}