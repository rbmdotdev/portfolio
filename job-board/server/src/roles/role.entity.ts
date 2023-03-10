import { EntityCols } from 'src/db/entity-utils';
import { Entity, Column } from 'typeorm';

@Entity()
export class Role {
  @Column(() => EntityCols)
  entity: EntityCols;

  @Column()
  title: string;
}
