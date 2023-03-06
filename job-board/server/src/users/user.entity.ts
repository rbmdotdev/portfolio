import { EntityCols } from 'src/db/entity-utils';
import { Job } from 'src/jobs/job.entity';
import { Entity, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @Column(() => EntityCols)
  entity: EntityCols;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  isAdmin: boolean;

  // eslint-disable-next-line prettier/prettier
  @OneToMany(type => Job, (j) => j.author, { nullable: true})
  jobs?: Job[];
}
