import {
  CreateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class EntityCols {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt?: Date; // Creation date

  @UpdateDateColumn()
  updatedAt?: Date; // Last updated date

  @DeleteDateColumn()
  deletedAt?: Date; // Deletion date
}
