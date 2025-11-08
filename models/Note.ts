import mongoose, {Document, mongo, Schema} from "mongoose";
import { Tag } from "@/types/DataTypes";


export interface Inote extends Document{
    title: string;
    content: string;
    created_at: string;
    tag: Tag
}

const NoteSchema = new Schema<Inote>({
    title: {type: String, required: true, trim: true},
    content: {type: String, required: true, trim: true},
    created_at: {type: String, default: () => new Date().toISOString()},
    tag: {type: String, enum: ["Home", "Business", "Personal"], required: true}
})

// prevent override in dev
const Note = mongoose.models.Note || mongoose.model<Inote>("Note", NoteSchema)

export default Note;