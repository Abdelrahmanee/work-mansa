import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { NotesRepository } from './repositories/notes.repository';
import { ObjectId } from 'mongoose';

@Injectable()
export class NotesService {
  private logger = new Logger(NotesService.name);
  constructor(private _notesRepository: NotesRepository) { }
  // Create Note
  async create(createNoteDto: CreateNoteDto) {
    try {
      const createdNote = await this._notesRepository.createNote(createNoteDto);
      return { status: "success", message: "Note added successfully", data: createdNote };
    } catch (error) {
      this.logger.log(`NoteService:create: ${JSON.stringify(error.message)}`);
      throw new InternalServerErrorException('Failed to create note');
    }
  }

  // Find all notes
  async findAll() {
    try {
      const notes = await this._notesRepository.getAllNotes();

      // If no notes are found, return an empty array with a success message
      return { status: "success", message: "All Notes", data: notes };
    } catch (error) {
      this.logger.log(`NoteService:findAll: ${JSON.stringify(error.message)}`);
      throw new InternalServerErrorException('Failed to retrieve notes');
    }
  }

  // Find a specific note by ID
  async findOne(id: ObjectId) {
    try {
      const note = await this._notesRepository.getSpecficNote(id);

      // Check if the note was found
      if (!note) {
        throw new NotFoundException(`Note not found`);
      }

      return { status: "success", message: "Note retrieved successfully", data: note };
    } catch (error) {
      this.logger.log(`NoteService:findOne: ${JSON.stringify(error.message)}`);
      throw new NotFoundException(error.message || `Note with id ${id} not found`);
    }
  }

  async update(id: ObjectId, updateNoteDto: UpdateNoteDto) {
    try {
      const updatedNote = await this._notesRepository.updateNote(id, updateNoteDto);

      // Check if the note was found and updated
      if (!updatedNote) {
        throw new NotFoundException(`Note not found`);
      }

      return { status: "success", message: "Note updated successfully", data: updatedNote };
    } catch (error) {
      this.logger.log(`NoteService:update: ${JSON.stringify(error.message)}`);
      throw new NotFoundException(error.message);
    }
  }

  async remove(id: ObjectId) {
    try {
      const result = await this._notesRepository.deleteNote(id);

      // Check if note was found and deleted
      if (!result) {
        throw new NotFoundException(`Note not found`);
      }

      return { status: "success", message: "Note is deleted", data: result };
    } catch (error) {
      this.logger.log(`NoteService:remove: ${JSON.stringify(error.message)}`);
      throw new NotFoundException(error.message);
    }
  }
}
