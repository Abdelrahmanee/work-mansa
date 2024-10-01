import { UserRepository } from '../repositories/user.repository';
import { LoginDtos } from './dto/login.dto';
import { UserDocument } from 'src/core/schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';
export declare class AccountService {
    private _userRepository;
    constructor(_userRepository: UserRepository);
    login: (user: LoginDtos) => Promise<{
        access_token: string;
        payload: import("../../../core/interfaces/jwtPayload.interface").JwtPayload;
    }>;
    register: (user: CreateUserDTO) => Promise<{
        status: string;
        data: import("mongoose").Document<unknown, {}, UserDocument> & import("src/core/schemas/user.schema").User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId;
        }>;
    }>;
}
