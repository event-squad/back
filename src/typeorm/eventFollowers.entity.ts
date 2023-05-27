import { IsDate } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';
import { User } from './user.entity';

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
