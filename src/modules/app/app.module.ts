import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from '../app/app.service';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { NotesModule } from '../notes/notes.module';

import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [AuthModule, MongooseModule.forRoot(process.env.DB_CONNECTION),
    ConfigModule.forRoot({  isGlobal: true, }),
    NotesModule// Make config globally available
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
