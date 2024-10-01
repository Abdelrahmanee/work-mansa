import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/core/schemas/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { AccountController } from './account/account.controller';
import { AccountService } from './account/account.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret', // Ensure you have a secret
      // signOptions: { expiresIn: '60m' }, // Adjust as needed
    }),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserRepository , AccountService],
  controllers: [AccountController]
})
export class AuthModule { }
