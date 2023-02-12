import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import * as admin from 'firebase-admin';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('add')
  async addData(@Body() body) {
    const db = admin.firestore();
    await db.collection('data').add(body);
    return { success: true };
  }
}
