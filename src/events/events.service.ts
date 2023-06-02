import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private readonly eventService: Repository<Event>,
  ) {}

  findAll(): Promise<Event[]> {
    return this.eventService.find();
  }

  findOne(id: number): Promise<Event> {
    return this.eventService.findOneBy({
      id,
    });
  }
}
