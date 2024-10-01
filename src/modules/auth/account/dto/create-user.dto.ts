import { IsEmail, IsLowercase, IsNotEmpty, IsNumber, IsStrongPassword, Matches, MaxLength, MinLength, Validate, ValidateIf } from "class-validator"



export class CreateUserDTO {
    @MaxLength(50)
    @MinLength(2)
    @IsNotEmpty()
    firstName: string
    
    @MaxLength(50)
    @MinLength(2)
    @IsNotEmpty()
    lastName: string
    
    @IsNotEmpty()
    @IsEmail()
    @IsLowercase()
    email: string

    // @IsStrongPassword()
    @IsNotEmpty()
    password: string

    @IsNotEmpty()
    @Matches(/^01[0-2,5]{1}[0-9]{8}$/, {
      message: 'Mobile number must be a valid Egyptian number starting with 01 followed by 9 digits.',
    })
    mob: string; 
}