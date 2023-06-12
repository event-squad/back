import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { LikesService } from './likes.service';
import { CreateLikeDTO } from './dto/create-like.dto';
import { DecodedJWT } from 'src/types/request.decoded';

@Controller('/api/likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  likeEvent(
    @Req() { decoded }: DecodedJWT,
    @Body() createLikeDto: CreateLikeDTO,
  ) {
    return this.likesService.create(decoded.userId, createLikeDto.eventId);
  }

  @Get()
  findLiked(@Req() { decoded }: DecodedJWT) {
    return this.likesService.findAll(decoded.userId);
  }

  @Get('/detailed')
  findDetailedLiked(@Req() { decoded }: DecodedJWT) {
    return this.likesService.findDetailedLiked(decoded.userId);
  }

  @Delete(':id')
  deleteLiked(@Param('id') eventId: number, @Req() { decoded }: DecodedJWT) {
    return this.likesService.remove(decoded.userId, eventId);
  }
}
