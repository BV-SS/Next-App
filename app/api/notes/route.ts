import { NextResponse } from "next/server";
import connectDB from "@/lib/connectDB";
import Note from "@/models/Note";

export async function GET(){
    await connectDB();
    const notes = await Note.find({}).sort({created_at: -1})
    return NextResponse.json(notes)
}

export async function POST(req: Request){
    await connectDB();
    const payload = await req.json()
    const {title, content, tag} = payload;
    if(!title || !content || !tag){
        return NextResponse.json({message: "title, content and tag for the note is required"}, {status:400})
    }
    const note = await Note.create({title, content, tag});
    return NextResponse.json(note, {status:201})
}