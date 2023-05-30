import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

@Entity()
export class Producer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  description: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  CNPJ: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  phoneNumber: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  rating: string;

  @Column({ type: 'date' })
  @IsDate()
  createdAt: Date;

  @Column({ type: 'date' })
  @IsDate()
  updatedAt: Date;
}
