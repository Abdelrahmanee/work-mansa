import { AccountService } from './account.service';
import { LoginDtos } from './dto/login.dto';
import { Response as ExpressResponse } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserDocument } from 'src/core/schemas/user.schema';
export declare class AccountController {
    private readonly _accountService;
    constructor(_accountService: AccountService);
    login(loginDto: LoginDtos, res: ExpressResponse): Promise<{
        status: string;
        message: string;
        access_token: string;
        data: import("../../../core/interfaces/jwtPayload.interface").JwtPayload;
    }>;
    register(body: CreateUserDTO): Promise<{
        status: string;
        data: import("mongoose").Document<unknown, {}, UserDocument> & import("src/core/schemas/user.schema").User & import("mongoose").Document<unknown, any, any> & Required<{
            _id: import("mongoose").Schema.Types.ObjectId;
        }>;
    }>;
}
