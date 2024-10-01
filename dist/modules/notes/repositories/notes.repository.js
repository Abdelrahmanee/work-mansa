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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotesRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let NotesRepository = class NotesRepository {
    constructor(NoteModel) {
        this.NoteModel = NoteModel;
    }
    async createNote(note) {
        try {
            return await this.NoteModel.insertMany(note);
        }
        catch (error) {
            throw new Error(`Failed to create Note: ${error.message}`);
        }
    }
    async updateNote(id, note) {
        try {
            return await this.NoteModel.findByIdAndUpdate(id, note, { new: true });
        }
        catch (error) {
            throw new Error(`Failed to create Note: ${error.message}`);
        }
    }
    async getSpecficNote(id) {
        try {
            return await this.NoteModel.findById(id).exec();
        }
        catch (error) {
            throw new Error(`Failed to find Note by id: ${error.message}`);
        }
    }
    async deleteNote(id) {
        try {
            return await this.NoteModel.findByIdAndDelete(id).exec();
        }
        catch (error) {
            throw new Error(`Failed to delete note: ${error.message}`);
        }
    }
    async getAllNotes() {
        try {
            return await this.NoteModel.find().exec();
        }
        catch (error) {
            throw new Error(`Failed to delete note: ${error.message}`);
        }
    }
};
exports.NotesRepository = NotesRepository;
exports.NotesRepository = NotesRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)('Note')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotesRepository);
//# sourceMappingURL=notes.repository.js.map