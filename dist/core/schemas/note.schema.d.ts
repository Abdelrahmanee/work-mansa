import { Document } from 'mongoose';
import { Schema as MongooseSchema } from 'mongoose';
export type NoteDocument = Note & Document;
export declare class Note {
    _id: MongooseSchema.Types.ObjectId;
    title: string;
    content: string;
    author: MongooseSchema.Types.ObjectId;
    isArchived: boolean;
}
export declare const NoteSchema: MongooseSchema<Note, import("mongoose").Model<Note, any, any, any, Document<unknown, any, Note> & Note & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Note, Document<unknown, {}, import("mongoose").FlatRecord<Note>> & import("mongoose").FlatRecord<Note> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
