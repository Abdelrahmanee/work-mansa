import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';
import { Document, HydratedDocument, Schema as MongooseSchema, Types } from 'mongoose';
import { ROLES } from '../utils/roles';
import { USERSTATUS } from '../utils/userStatus';
import { MODELS } from '../utils/models';

export type UserDocument = User & Document;

@Schema({ timestamps: true  , toJSON :{virtuals : true} , toObject :{virtuals: true}})
export class User {
    // ObjectId field for unique identification
    @Prop({ type: MongooseSchema.Types.ObjectId, auto: true })
    _id: MongooseSchema.Types.ObjectId;

    @Prop({ required: true, type: String })
    firstName: string;

    // Virtual property to concatenate first name and last name

    get userName(): string {

        return `${this.firstName} ${this.lastName}`;
    }




    @Prop({ required: true, type: String })
    lastName: string;

    // Virtual property for username
    @Prop({ required: true, lowercase: true, unique: true, type: String })
    email: string;

    @Prop({ required: true, unique: true, type: String })
    mob: string;

    @Prop({ required: true, type: String })
    password: string;

    @Prop({ required: true, type: String, enum: Object.values(ROLES), default: ROLES.USER })
    role: string;

    @Prop({ required: true, type: String, enum: Object.values(USERSTATUS), default: USERSTATUS.OFFLINE })
    status: string;

    @Prop({ type: Boolean, default: false })
    isConfirmed: boolean;

    @Prop({ type: Types.ObjectId, ref: MODELS.PROFILE })
    profile?: Types.ObjectId;

    @Prop({ type: [{ type: Types.ObjectId, ref: MODELS.PROGRAM }] })
    programs: Types.ObjectId[];

    @Prop({ type: [{ type: Types.ObjectId, ref: MODELS.COMMENT }] })
    comments: Types.ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.pre<UserDocument>('save', async function (next) {
    // Check if password is being modified (or is new)
    if (!this.isModified('password')) {
        return next();
    }

    const saltOrRounds = 8;
    this.password = await bcrypt.hash(this.password, saltOrRounds);

    next();
});
UserSchema.set('toJSON', {
    virtuals: true,
});
UserSchema.virtual('userName').get(function () {
    return `${this.firstName} ${this.lastName}`;
});

