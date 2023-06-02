import { IsDateString, IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../events/entities/event.entity';
import { EventCategoryName } from './eventCategoryName.entity';

@Entity()
export class EventCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event)
  @IsNotEmpty()
  event: Event;

  @ManyToOne(() => EventCategoryName)
  @IsNotEmpty()
  eventCategoryName: EventCategoryName;

  @Column({ type: 'date' })
  @IsDateString()
  createdAt: Date;

  @Column({ type: 'date' })
  @IsDateString()
  updatedAt: Date;
}
