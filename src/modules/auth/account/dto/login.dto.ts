import { IsEmail, IsLowercase, IsNotEmpty, IsStrongPassword } from "class-validator"




export class LoginDtos{

    @IsEmail()
    @IsLowercase()
    @IsNotEmpty()
    email : string
    @IsNotEmpty()
    // @IsStrongPassword()
    password : string
}