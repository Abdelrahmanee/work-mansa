import { Document, Schema as MongooseSchema, Types } from 'mongoose';
export type UserDocument = User & Document;
export declare class User {
    _id: MongooseSchema.Types.ObjectId;
    firstName: string;
    get userName(): string;
    lastName: string;
    email: string;
    mob: string;
    password: string;
    role: string;
    status: string;
    isConfirmed: boolean;
    profile?: Types.ObjectId;
    programs: Types.ObjectId[];
    comments: Types.ObjectId[];
}
export declare const UserSchema: MongooseSchema<User, import("mongoose").Model<User, any, any, any, Document<unknown, any, User> & User & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, User, Document<unknown, {}, import("mongoose").FlatRecord<User>> & import("mongoose").FlatRecord<User> & Required<{
    _id: MongooseSchema.Types.ObjectId;
}>>;
