import { IsDate } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../auth/entities/user.entity';
import { Event } from '../events/entities/event.entity';

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
