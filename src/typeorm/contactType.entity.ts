import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ContactType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  @IsNotEmpty()
  typeName: string;

  @Column({ length: 255 })
  @IsNotEmpty()
  content: string;
}
