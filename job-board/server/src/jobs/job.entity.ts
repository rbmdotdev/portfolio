import { User } from 'src/users/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  // eslint-disable-next-line prettier/prettier
  @ManyToOne(type => User, (u) => u.id, { nullable: false })
  author: User;

  @Column()
  isPublished: boolean;
}
