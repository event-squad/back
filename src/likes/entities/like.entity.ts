import { User } from 'src/auth/entities/user.entity';
import { Event } from 'src/events/entities/event.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Likes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @ManyToMany(() => User)
  userId: number;

  @Column()
  @ManyToMany(() => Event)
  eventId: number;
}
