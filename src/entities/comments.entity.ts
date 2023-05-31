import { IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from './event.entity';
import { Producer } from './producer.entity';

@Entity()
export class Comments {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Event)
  @IsNotEmpty()
  event: Event;

  @ManyToOne(() => Producer)
  @IsNotEmpty()
  producer: Producer;

  @Column({ length: 255 })
  @IsNotEmpty()
  content: string;

  @Column({ type: 'date' })
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;
}
