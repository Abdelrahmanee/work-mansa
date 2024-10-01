
import { IsBoolean, IsEmail, IsLowercase, IsMongoId, IsNotEmpty, IsNumber, IsStrongPassword, Matches, MaxLength, MinLength, Validate, ValidateIf } from "class-validator"



export class CreateNoteDto {
    @MaxLength(120)
    @MinLength(2)
    @IsNotEmpty()
    title: string
    
    @MaxLength(1000)
    @MinLength(2)
    @IsNotEmpty()
    content: string
    
    @IsNotEmpty()
    @IsMongoId()
    author: string
    
    isArchived :boolean
}