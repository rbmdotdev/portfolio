import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Org } from './org.entity';

@Injectable()
export class OrgsService {
  constructor(
    @InjectRepository(Org)
    private orgR: Repository<Org>,
  ) {}

  getAllOrgs(): Promise<Org[]> {
    return this.orgR.find();
  }
}
