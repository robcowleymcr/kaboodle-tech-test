import { Injectable } from '@nestjs/common';
import { Event as EventInterface } from './interfaces/event.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { DeleteResult, Repository } from 'typeorm';
import { UpdateEvent } from './entities/updateEvent.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Event)
    private event: Repository<Event>,
  ) {}

  async create(dto: EventInterface): Promise<Event> {
    return await this.event.save(dto);
  }

  async findAll(): Promise<Event[]> {
    return await this.event.find();
  }

  async findOne(id: number): Promise<Event> {
    return await this.event.findOne({ where: { id } });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.event.delete(id);
  }

  async update(id: number, updateObject: Event): Promise<Event> {
    const result = await this.findOne(id);
    const updated = Object.assign(result, updateObject);
    return this.event.save(updated);
  }
}
