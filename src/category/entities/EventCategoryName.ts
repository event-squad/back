import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('eventCategoryName', { schema: 'public' })
export class EventCategoryName {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('character varying', { name: 'categoryName', length: 255 })
  categoryName: string;

  @Column('date', { name: 'createdAt' })
  createdAt: string;

  @Column('date', { name: 'updatedAt' })
  updatedAt: string;

  @Column('integer', { name: 'eventId', nullable: true })
  eventId: number | null;
}
