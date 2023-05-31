import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  localName: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  CEP: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  street: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  city: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  state: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  number: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  neighborhood: string;

  @Column({ type: 'date' })
  createdAt: Date;

  @Column({ type: 'date' })
  updatedAt: Date;
}
