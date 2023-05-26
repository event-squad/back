import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, IsDateString } from 'class-validator';

@Entity()
export class EventCategoryName {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  categoryName: string;

  @Column({ type: 'date' })
  @IsDateString()
  createdAt: Date;

  @Column({ type: 'date' })
  @IsDateString()
  updatedAt: Date;
}
