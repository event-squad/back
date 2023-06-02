import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventsService {
  constructor(
    @InjectRepository(Event) private readonly eventService: Repository<Event>,
  ) {}

  public findAll(): Promise<Event[]> {
    return this.eventService.query(
      `SELECT event.*, address.city, address.state FROM event JOIN "address" ON "address".id = event."addressId"`,
    );
  }

  public findOne(id: number): Promise<Event> {
    return this.eventService.findOneBy({
      id,
    });
  }
}
