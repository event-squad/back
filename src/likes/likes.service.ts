import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLikeDTO } from './dto/create-like.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Likes } from './entities/like.entity';
import { Repository } from 'typeorm';
import { Event } from 'src/events/entities/event.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Likes)
    private readonly likesRepository: Repository<Likes>,
    @InjectRepository(Event)
    private readonly eventRepository: Repository<Event>,
  ) {}

  async create(userId: number, eventId: number) {
    const event = await this.eventRepository.exist({
      where: {
        id: eventId,
      },
    });

    const likedFounded = await this.findLikeByUserEventId(userId, eventId);

    if (!event || likedFounded)
      throw new NotFoundException('Credentials Not Found');

    const postLiked = {
      userId,
      eventId,
    };

    this.likesRepository.save(postLiked);
  }

  findAll(userId: number) {
    return this.likesRepository.find({
      where: {
        userId,
      },
    });
  }

  async remove(userId: number, eventId: number) {
    const likedFounded = await this.findLikeByUserEventId(userId, eventId);

    if (!likedFounded) throw new NotFoundException('Request Error');

    return this.likesRepository.delete(likedFounded);
  }

  private findEvent(id): Promise<Event> {
    return this.eventRepository.findOneBy({
      id,
    });
  }

  private findLikeByUserEventId(
    userId: number,
    eventId: number,
  ): Promise<Likes> {
    return this.likesRepository.findOneBy({
      userId,
      eventId,
    });
  }
}
