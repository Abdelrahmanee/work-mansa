"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var NotesService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const notes_repository_1 = require("./repositories/notes.repository");
let NotesService = NotesService_1 = class NotesService {
    constructor(_notesRepository) {
        this._notesRepository = _notesRepository;
        this.logger = new common_1.Logger(NotesService_1.name);
    }
    async create(createNoteDto) {
        try {
            const createdNote = await this._notesRepository.createNote(createNoteDto);
            return { status: "success", message: "Note added successfully", data: createdNote };
        }
        catch (error) {
            this.logger.log(`NoteService:create: ${JSON.stringify(error.message)}`);
            throw new common_1.InternalServerErrorException('Failed to create note');
        }
    }
    async findAll() {
        try {
            const notes = await this._notesRepository.getAllNotes();
            return { status: "success", message: "All Notes", data: notes };
        }
        catch (error) {
            this.logger.log(`NoteService:findAll: ${JSON.stringify(error.message)}`);
            throw new common_1.InternalServerErrorException('Failed to retrieve notes');
        }
    }
    async findOne(id) {
        try {
            const note = await this._notesRepository.getSpecficNote(id);
            if (!note) {
                throw new common_1.NotFoundException(`Note not found`);
            }
            return { status: "success", message: "Note retrieved successfully", data: note };
        }
        catch (error) {
            this.logger.log(`NoteService:findOne: ${JSON.stringify(error.message)}`);
            throw new common_1.NotFoundException(error.message || `Note with id ${id} not found`);
        }
    }
    async update(id, updateNoteDto) {
        try {
            const updatedNote = await this._notesRepository.updateNote(id, updateNoteDto);
            if (!updatedNote) {
                throw new common_1.NotFoundException(`Note not found`);
            }
            return { status: "success", message: "Note updated successfully", data: updatedNote };
        }
        catch (error) {
            this.logger.log(`NoteService:update: ${JSON.stringify(error.message)}`);
            throw new common_1.NotFoundException(error.message);
        }
    }
    async remove(id) {
        try {
            const result = await this._notesRepository.deleteNote(id);
            if (!result) {
                throw new common_1.NotFoundException(`Note not found`);
            }
            return { status: "success", message: "Note is deleted", data: result };
        }
        catch (error) {
            this.logger.log(`NoteService:remove: ${JSON.stringify(error.message)}`);
            throw new common_1.NotFoundException(error.message);
        }
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = NotesService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [notes_repository_1.NotesRepository])
], NotesService);
//# sourceMappingURL=notes.service.js.map