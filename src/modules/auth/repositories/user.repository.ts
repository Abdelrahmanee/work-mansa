import { JwtService } from '@nestjs/jwt';
import { UserLogin } from './../../../core/interfaces/login.interface';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { UserDocument } from 'src/core/schemas/user.schema';
import { JwtPayload } from 'src/core/interfaces/jwtPayload.interface';
import * as bcrypt from 'bcrypt'
import { LoginDtos } from '../account/dto/login.dto';
import { HttpException, HttpStatus, UnauthorizedException } from '@nestjs/common';
import { MODELS } from 'src/core/utils/models';
import { CreateUserDTO } from '../account/dto/create-user.dto';
export class UserRepository {


    constructor(@InjectModel(MODELS.USER) private userModel: Model<UserDocument>, private jwtService: JwtService) { }


    async createUser(user: CreateUserDTO) {
        try {
            return await this.userModel.create(user)
        } catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }

    }

    async findUserByEmail(email: string): Promise<UserDocument | null> {
        try {
            return await this.userModel.findOne({ email }).exec();
        } catch (error) {
            throw new Error(`Failed to find user by email: ${error.message}`);
        }
    }
    async findUserByMob(mob: string): Promise<UserDocument | null> {
        try {
            return await this.userModel.findOne({ mob }).exec();
        } catch (error) {
            throw new Error(`Failed to find user by email: ${error.message}`);
        }
    }


    async comparePassword(enteredPassword: string, storedPassword: string): Promise<boolean> {
        try {
            return bcrypt.compare(enteredPassword, storedPassword);
        } catch (error) {
            throw new Error(`Failed to compare password: ${error.message}`);
        }
    }

    createPayload(user: UserDocument): JwtPayload {
        const payload = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id.toString(),
            mob: user.mob,
        }
        return payload
    }
    async createToken(payload: object): Promise<{ access_token: string }> {
        try {
            return { access_token: await this.jwtService.signAsync(payload) }
        } catch (error) {
            throw new Error(`Failed to create token: ${error.message}`);
        }
    }
   
    async checkUniqueIdentifiers(email: string, mob: string):Promise < UserDocument | null >{
        try {
            return await this.userModel.findOne({ mob, email }).exec();
        } catch (error) {
            throw new Error(`email and mob are in use: ${error.message}`);
        }
    }

}