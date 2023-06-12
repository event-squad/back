import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EventsService } from './events.service';

@Controller('api/events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Get()
  getEvents() {
    return this.eventsService.findAll();
  }

  @Post('/filter')
  @UsePipes(new ValidationPipe())
  filterByNameOrCategory(@Body() filter: any) {
    return this.eventsService.filterEventsNameCategory(filter);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.eventsService.findOne(id);
  }

  @Get('/filter/:id')
  filterEventsById(@Param('id') id: number) {
    return this.eventsService.filterEvents(id);
  }
}
