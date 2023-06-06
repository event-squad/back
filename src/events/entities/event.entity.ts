import { IsDateString, IsNotEmpty } from 'class-validator';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Address } from '../../entities/address.entity';
import { Producer } from '../../entities/producer.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  name: string;

  @Column()
  @IsNotEmpty()
  addressId: number;

  @Column()
  @IsNotEmpty()
  producerId: number;

  @Column({ type: 'date' })
  @IsDateString()
  startDate: Date;

  @Column({ type: 'date' })
  @IsDateString()
  endDate: Date;

  @Column({ length: 255 })
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @Column()
  categoryNameId: number;

  @ManyToOne(() => Address)
  @IsNotEmpty()
  address: Address;

  @Column({ length: 255 })
  @IsNotEmpty()
  status: string;

  @ManyToOne(() => Producer)
  @IsNotEmpty()
  producer: Producer;

  @Column({ type: 'date' })
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;
}
