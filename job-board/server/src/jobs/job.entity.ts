import { EntityCols } from 'src/db/entity-utils';
import { JobType } from 'src/job-types/job-type.entity';
import { Role } from 'src/roles/role.entity';
import { User } from 'src/users/user.entity';
import { Entity, Column, ManyToOne } from 'typeorm';

@Entity()
export class Job {
  @Column(() => EntityCols)
  entity: EntityCols;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(type => User, (u) => u.entity.id, { nullable: false })
  author: User;

  @Column()
  isPublished: boolean;

  @Column()
  title: string;

  @Column()
  body: string;

  @Column()
  location: string;

  @Column()
  remote: boolean;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(type => Role, (r) => r.entity.id, { nullable: false })
  role: Role;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(type => JobType, (t) => t.entity.id, { nullable: false })
  type: JobType;
}
