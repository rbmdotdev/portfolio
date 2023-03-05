import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class OrgProfile {
  @PrimaryGeneratedColumn()
  id: number;
}
