import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255, unique: true })
  @IsNotEmpty()
  @IsEmail()
  @MaxLength(255)
  email: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  name: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  password: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  number: string;

  @Column({ type: 'date' })
  @IsDate()
  createdAt: Date;

  @Column({ type: 'date' })
  @IsDate()
  updatedAt: Date;
}
