import { EntityCols } from 'src/db/entity-utils';
import { Entity, Column } from 'typeorm';

@Entity()
export class JobType {
  @Column(() => EntityCols)
  entity: EntityCols;

  @Column()
  name: string;
}
