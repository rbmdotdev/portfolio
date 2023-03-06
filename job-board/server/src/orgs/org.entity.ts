import { Entity, Column } from 'typeorm';
import { EntityCols } from 'src/db/entity-utils';

@Entity()
export class Org {
  @Column(() => EntityCols)
  entity: EntityCols;

  @Column()
  name: string;
}
