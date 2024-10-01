
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { CreateNoteDto } from '../dto/create-note.dto';
import { UpdateNoteDto } from '../dto/update-note.dto';
import { NoteDocument } from 'src/core/schemas/note.schema';
export class NotesRepository {


    constructor(@InjectModel('Note') private NoteModel: Model<NoteDocument>) { }


    async createNote(note: CreateNoteDto) {
        try {
            return await this.NoteModel.insertMany(note)
        } catch (error) {
            throw new Error(`Failed to create Note: ${error.message}`);
        }

    }
    async updateNote(id: ObjectId, note: UpdateNoteDto) {
        try {
            return await this.NoteModel.findByIdAndUpdate(id, note, { new: true })
        } catch (error) {
            throw new Error(`Failed to create Note: ${error.message}`);
        }

    }

    async getSpecficNote(id: ObjectId): Promise<NoteDocument | null> {
        try {
            return await this.NoteModel.findById(id).exec();
        } catch (error) {
            throw new Error(`Failed to find Note by id: ${error.message}`);
        }
    }
    async deleteNote(id: ObjectId): Promise<NoteDocument | null> {
        try {
            return await this.NoteModel.findByIdAndDelete(id).exec();
        } catch (error) {
            throw new Error(`Failed to delete note: ${error.message}`);
        }
    }
    
    async getAllNotes(): Promise<NoteDocument[] | null> {
        try {
            return await this.NoteModel.find().exec();
        } catch (error) {
            throw new Error(`Failed to delete note: ${error.message}`);
        }
    }

}