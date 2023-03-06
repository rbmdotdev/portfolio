import { EntityCols } from 'src/db/entity-utils';
import { Entity, Column } from 'typeorm';

@Entity()
export class UserProfile {
  @Column(() => EntityCols)
  entity: EntityCols;

  @Column()
  description: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  location: string;

  @Column()
  resumeLink: string;

  @Column()
  avatarSrc: string;
}
