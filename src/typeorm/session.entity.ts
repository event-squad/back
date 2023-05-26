import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { IsDate, IsNotEmpty, IsString, MaxLength } from 'class-validator';

@Entity()
export class Session {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  user: User;

  @Column({ length: 255 })
  @IsNotEmpty()
  @IsString()
  @MaxLength(255)
  token: string;

  @Column({ type: 'date' })
  @IsDate()
  createdAt: Date;

  @Column({ type: 'date' })
  @IsDate()
  updatedAt: Date;
}
