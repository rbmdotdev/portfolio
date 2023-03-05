import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Org {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
