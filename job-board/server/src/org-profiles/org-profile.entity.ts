import {
  Entity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

class EntityCols {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at?: Date; // Creation date

  @UpdateDateColumn()
  updated_at?: Date; // Last updated date

  @DeleteDateColumn()
  deleted_at?: Date; // Deletion date
}

@Entity()
export class OrgProfile {
  @Column(() => EntityCols)
  entity: EntityCols;

  @Column()
  website: string;
}
