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
exports.UserRepository = void 0;
const jwt_1 = require("@nestjs/jwt");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const bcrypt = require("bcrypt");
const models_1 = require("../../../core/utils/models");
let UserRepository = class UserRepository {
    constructor(userModel, jwtService) {
        this.userModel = userModel;
        this.jwtService = jwtService;
    }
    async createUser(user) {
        try {
            return await this.userModel.create(user);
        }
        catch (error) {
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }
    async findUserByEmail(email) {
        try {
            return await this.userModel.findOne({ email }).exec();
        }
        catch (error) {
            throw new Error(`Failed to find user by email: ${error.message}`);
        }
    }
    async findUserByMob(mob) {
        try {
            return await this.userModel.findOne({ mob }).exec();
        }
        catch (error) {
            throw new Error(`Failed to find user by email: ${error.message}`);
        }
    }
    async comparePassword(enteredPassword, storedPassword) {
        try {
            return bcrypt.compare(enteredPassword, storedPassword);
        }
        catch (error) {
            throw new Error(`Failed to compare password: ${error.message}`);
        }
    }
    createPayload(user) {
        const payload = {
            email: user.email,
            firstName: user.firstName,
            lastName: user.lastName,
            userId: user._id.toString(),
            mob: user.mob,
        };
        return payload;
    }
    async createToken(payload) {
        try {
            return { access_token: await this.jwtService.signAsync(payload) };
        }
        catch (error) {
            throw new Error(`Failed to create token: ${error.message}`);
        }
    }
    async checkUniqueIdentifiers(email, mob) {
        try {
            return await this.userModel.findOne({ mob, email }).exec();
        }
        catch (error) {
            throw new Error(`email and mob are in use: ${error.message}`);
        }
    }
};
exports.UserRepository = UserRepository;
exports.UserRepository = UserRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(models_1.MODELS.USER)),
    __metadata("design:paramtypes", [mongoose_2.Model, jwt_1.JwtService])
], UserRepository);
//# sourceMappingURL=user.repository.js.map