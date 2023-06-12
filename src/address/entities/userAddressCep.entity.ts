import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('userAddressCep', { schema: 'public' })
export class UserAddressCep {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'id' })
  id: number;

  @Column('integer', { name: 'CEP' })
  cep: string;

  @Column('integer', { name: 'userId' })
  userId: number;
}
