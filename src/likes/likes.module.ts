import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Likes } from './entities/like.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from 'src/events/entities/event.entity';
import { User } from 'src/auth/entities/user.entity';

@Module({
  imports: [Likes, TypeOrmModule.forFeature([Likes, Event, User])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
