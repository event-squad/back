import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { ContactType } from './contactType.entity';
import { Producer } from './producer.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Producer)
  @IsNotEmpty()
  producer: Producer;

  @ManyToOne(() => ContactType)
  @IsNotEmpty()
  type: ContactType;
}
