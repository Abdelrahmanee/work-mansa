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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const common_1 = require("@nestjs/common");
const user_repository_1 = require("../repositories/user.repository");
let AccountService = class AccountService {
    constructor(_userRepository) {
        this._userRepository = _userRepository;
        this.login = async (user) => {
            const { email, password } = user;
            let foundUser = await this._userRepository.findUserByEmail(user.email);
            if (!foundUser)
                throw new common_1.HttpException('email is Invalid', common_1.HttpStatus.BAD_REQUEST);
            const isPasswordValid = await this._userRepository.comparePassword(password, foundUser.password);
            if (!isPasswordValid) {
                throw new common_1.HttpException('Invalid email or password', 409);
            }
            const payload = this._userRepository.createPayload(foundUser);
            const { access_token } = await this._userRepository.createToken(payload);
            return { access_token, payload };
        };
        this.register = async (user) => {
            const isIdentifiersInUse = await this._userRepository.checkUniqueIdentifiers(user.email, user.mob);
            if (isIdentifiersInUse) {
                throw new common_1.HttpException('Email and Mobile Number are already in use', common_1.HttpStatus.CONFLICT);
            }
            const isEmailExist = await this._userRepository.findUserByEmail(user.email);
            if (isEmailExist) {
                throw new common_1.HttpException('Email is already in use', common_1.HttpStatus.CONFLICT);
            }
            const isMobExist = await this._userRepository.findUserByMob(user.mob);
            if (isMobExist) {
                throw new common_1.HttpException('Mobile number is already in use', common_1.HttpStatus.CONFLICT);
            }
            const createdUser = await this._userRepository.createUser(user);
            return { status: 'success', data: createdUser };
        };
    }
};
exports.AccountService = AccountService;
exports.AccountService = AccountService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], AccountService);
//# sourceMappingURL=account.service.js.map