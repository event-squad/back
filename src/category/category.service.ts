import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EventCategoryName } from './entities/EventCategoryName';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(EventCategoryName)
    private readonly eventCategoryNameService: Repository<EventCategoryName>,
  ) {}

  public async findAll() {
    return this.eventCategoryNameService.find();
  }

  public findOne(id: number) {
    const founded = this.findById(id);

    if (!founded) throw new NotFoundException('Not Founded');

    return founded;
  }

  private findById(id: number) {
    return this.eventCategoryNameService.findOneByOrFail({
      id,
    });
  }
}
