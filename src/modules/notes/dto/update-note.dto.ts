import { PartialType } from '@nestjs/mapped-types';
import { CreateNoteDto } from './create-note.dto';

export class UpdateNoteDto extends PartialType(CreateNoteDto) {}

// import { IsString, IsOptional, IsNotEmpty } from 'class-validator';

// export class UpdateNoteDto {
//   @IsOptional()
//   @IsString()
//   @IsNotEmpty()
//   title?: string;

//   @IsOptional()
//   @IsString()
//   @IsNotEmpty()
//   content?: string;

//   @IsOptional()
//   @IsString()
//   @IsNotEmpty()
//   author?: string;
// }
