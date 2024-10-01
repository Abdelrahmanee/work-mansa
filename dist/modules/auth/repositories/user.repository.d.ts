import { JwtService } from '@nestjs/jwt';
import { Model } from "mongoose";
import { UserDocument } from 'src/core/schemas/user.schema';
import { JwtPayload } from 'src/core/interfaces/jwtPayload.interface';
import { CreateUserDTO } from '../account/dto/create-user.dto';
export declare class UserRepository {
    private userModel;
    private jwtService;
    constructor(userModel: Model<UserDocument>, jwtService: JwtService);
    createUser(user: CreateUserDTO): Promise<import("mongoose").Document<unknown, {}, UserDocument> & import("src/core/schemas/user.schema").User & import("mongoose").Document<unknown, any, any> & Required<{
        _id: import("mongoose").Schema.Types.ObjectId;
    }>>;
    findUserByEmail(email: string): Promise<UserDocument | null>;
    findUserByMob(mob: string): Promise<UserDocument | null>;
    comparePassword(enteredPassword: string, storedPassword: string): Promise<boolean>;
    createPayload(user: UserDocument): JwtPayload;
    createToken(payload: object): Promise<{
        access_token: string;
    }>;
    checkUniqueIdentifiers(email: string, mob: string): Promise<UserDocument | null>;
}
