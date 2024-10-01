import { Model, ObjectId } from "mongoose";
import { CreateNoteDto } from '../dto/create-note.dto';
import { UpdateNoteDto } from '../dto/update-note.dto';
import { NoteDocument } from 'src/core/schemas/note.schema';
export declare class NotesRepository {
    private NoteModel;
    constructor(NoteModel: Model<NoteDocument>);
    createNote(note: CreateNoteDto): Promise<import("mongoose").MergeType<import("mongoose").Document<unknown, {}, NoteDocument> & import("src/core/schemas/note.schema").Note & import("mongoose").Document<unknown, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>, Omit<CreateNoteDto, "_id">>[]>;
    updateNote(id: ObjectId, note: UpdateNoteDto): Promise<import("mongoose").Document<unknown, {}, NoteDocument> & import("src/core/schemas/note.schema").Note & import("mongoose").Document<unknown, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>;
    getSpecficNote(id: ObjectId): Promise<NoteDocument | null>;
    deleteNote(id: ObjectId): Promise<NoteDocument | null>;
    getAllNotes(): Promise<NoteDocument[] | null>;
}
