import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  @Column()
  @IsNotEmpty()
  userId: number;

  @Column()
  @IsNotEmpty()
  @IsString()
  token: string;

  @Column({ type: 'date', name: 'createdAt' })
  @IsNotEmpty()
  @IsDate()
  createdAt: Date;

  @Column({ type: 'date', name: 'updatedAt' })
  @IsNotEmpty()
  @IsDate()
  updatedAt: Date;
}
