import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesController } from './notes.controller';
import { NotesRepository } from './repositories/notes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Note } from 'src/core/schemas/note.schema';
import { NoteSchema } from 'src/core/schemas/note.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Note.name, schema: NoteSchema }]), // Register NoteModel
  ],
  controllers: [NotesController],
  providers: [NotesService, NotesRepository],
})
export class NotesModule { }
