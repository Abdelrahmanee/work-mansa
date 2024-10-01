import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { ObjectId } from 'mongoose';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: CreateNoteDto): Promise<{
        status: string;
        message: string;
        data: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../../core/schemas/note.schema").NoteDocument> & import("../../core/schemas/note.schema").Note & import("mongoose").Document<unknown, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId;
        }>, Omit<CreateNoteDto, "_id">>[];
    }>;
    findAll(): Promise<{
        status: string;
        message: string;
        data: import("../../core/schemas/note.schema").NoteDocument[];
    }>;
    findOne(id: ObjectId): Promise<{
        status: string;
        message: string;
        data: import("../../core/schemas/note.schema").NoteDocument;
    }>;
    update(id: ObjectId, updateNoteDto: UpdateNoteDto): Promise<{
        status: string;
        message: string;
        data: import("mongoose").Document<unknown, {}, import("../../core/schemas/note.schema").NoteDocument> & import("../../core/schemas/note.schema").Note & import("mongoose").Document<unknown, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId;
        }>;
    }>;
    remove(id: ObjectId): Promise<{
        status: string;
        message: string;
        data: import("../../core/schemas/note.schema").NoteDocument;
    }>;
}
