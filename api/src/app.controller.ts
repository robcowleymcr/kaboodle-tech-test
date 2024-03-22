import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Event } from './interfaces/event.interface';
import { DeleteResult } from 'typeorm';

@Controller('event')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Post()
  async create(@Body() dto: Event): Promise<Event> {
    return await this.appService.create(dto);
  }

  @Get()
  async findAll(): Promise<Event[]> {
    return await this.appService.findAll();
  }

  @Get(':id')
  async findOne(@Param() params: any): Promise<Event> {
    return await this.appService.findOne(parseInt(params.id));
  }

  @Delete(':id')
  async delete(@Param() params: any): Promise<DeleteResult> {
    return await this.appService.delete(parseInt(params.id));
  }

  @Patch(':id')
  async update(@Body() dto: Event, @Param('id') id: string): Promise<Event> {
    return await this.appService.update(+id, dto);
  }
}
