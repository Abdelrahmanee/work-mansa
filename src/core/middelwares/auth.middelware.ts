// import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { AccountService } from 'src/modules/auth/account/account.service';

// @Injectable()
// export class AuthenticationMiddleware implements NestMiddleware {
//     constructor(private readonly _accountService: AccountService) {}

//     async use(req: Request, res: Response, next: NextFunction) {
//         const token = req.headers['authorization']?.split(' ')[1]; // Get token from "Authorization: Bearer <token>"

//         if (!token) {
//             throw new HttpException('No token provided', HttpStatus.UNAUTHORIZED);
//         }

//         try {
//             const decoded = await this._accountService.verifyToken(token); // Use verifyToken method
//             req.user = decoded; 
//             next(); 
//         } catch (error) {
//             throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
//         }
//     }
// }
