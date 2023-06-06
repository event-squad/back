import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { EventCategoryName } from './entities/EventCategoryName';

@Module({
  imports: [TypeOrmModule.forFeature([EventCategoryName])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
