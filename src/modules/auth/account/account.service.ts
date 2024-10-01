import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { LoginDtos } from './dto/login.dto';
import { UserDocument } from 'src/core/schemas/user.schema';
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class AccountService {
    constructor(private _userRepository: UserRepository) { }


    login = async (user: LoginDtos) => {
        const { email, password } = user
        let foundUser: UserDocument | null = await this._userRepository.findUserByEmail(user.email)
        if (!foundUser) throw new HttpException('email is Invalid', HttpStatus.BAD_REQUEST)


        // Use the repository to compare passwords
        const isPasswordValid = await this._userRepository.comparePassword(password, foundUser.password);
        if (!isPasswordValid) {
            throw new HttpException('Invalid email or password', 409);
        }
        // Create JWT payload
        const payload = this._userRepository.createPayload(foundUser)
        // create token
        const { access_token } = await this._userRepository.createToken(payload)
        return { access_token, payload }

    }


    register = async (user: CreateUserDTO) => {
        
        const isIdentifiersInUse = await this._userRepository.checkUniqueIdentifiers(user.email, user.mob);
        if (isIdentifiersInUse) {
            throw new HttpException('Email and Mobile Number are already in use', HttpStatus.CONFLICT);
        }

        const isEmailExist = await this._userRepository.findUserByEmail(user.email);
        if (isEmailExist) {
            throw new HttpException('Email is already in use', HttpStatus.CONFLICT);
        }

        const isMobExist = await this._userRepository.findUserByMob(user.mob);
        if (isMobExist) {
            throw new HttpException('Mobile number is already in use', HttpStatus.CONFLICT);
        }

        const createdUser = await this._userRepository.createUser(user);

        return { status: 'success', data: createdUser };
    };
    
}
