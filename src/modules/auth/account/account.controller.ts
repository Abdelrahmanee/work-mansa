import { Body, Controller, HttpCode, HttpException, HttpStatus, Post, Res } from '@nestjs/common';
import { AccountService } from './account.service';
import { LoginDtos } from './dto/login.dto';
import { Response as ExpressResponse } from 'express';
import { CreateUserDTO } from './dto/create-user.dto';
import { UserDocument } from 'src/core/schemas/user.schema';

@Controller('account')
export class AccountController {
    constructor(private readonly _accountService: AccountService) { }

    @Post('login')

    async login(@Body() loginDto: LoginDtos, @Res({ passthrough: true }) res: ExpressResponse,) {
        try {
            const data = await this._accountService.login(loginDto);

            // Set the token in the cookie
            res.cookie('token', data.access_token, { httpOnly: true });

            // Return the status, message, and payload
            return {
                status: 'success',
                message: 'Login success',
                access_token: data.access_token,
                data: data.payload
            }
        } catch (error ) {
            throw new HttpException('Error in login', HttpStatus.UNAUTHORIZED)
        }
    }
    @Post('register')
    register(@Body() body: CreateUserDTO) {
        return this._accountService.register(body);
    }
}