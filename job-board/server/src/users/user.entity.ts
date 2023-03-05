import { Job } from 'src/jobs/job.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

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
