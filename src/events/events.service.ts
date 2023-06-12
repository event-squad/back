import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';
import { Repository } from 'typeorm';
import { FilterNC } from 'src/types/filter';
import { ILike } from 'typeorm';

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

  public filterEvents(id: number): Promise<Event[]> {
    return this.eventService
      .createQueryBuilder('event')
      .andWhere(`event.categoryNameId = ${id}`)
      .getMany();
  }

  public filterEventsNameCategory(filter: FilterNC) {
    if (!filter.category) {
      return this.eventService.find({
        where: {
          name: ILike(`%${filter.name}%`),
        },
      });
    }
    if (!filter.name) {
      return this.eventService.find({
        where: {
          id: filter.category,
        },
      });
    } else {
      return this.eventService.find({
        where: {
          name: ILike(`%${filter.name}%`),
          id: filter.category,
        },
      });
    }
  }
}
