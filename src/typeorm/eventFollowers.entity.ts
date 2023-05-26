import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { Event } from './event.entity';
import { IsDate } from 'class-validator';

@Entity()
export class EventFollowers {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Event)
  event: Event;

  @Column({ type: 'date' })
  @IsDate()
  createdAt: Date;

  @Column({ type: 'date' })
  @IsDate()
  updatedAt: Date;
}
