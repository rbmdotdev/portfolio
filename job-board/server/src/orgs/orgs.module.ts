import { Module } from '@nestjs/common';
import { OrgsService } from './orgs.service';
import { OrgsController } from './orgs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Org } from './org.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Org])],
  providers: [OrgsService],
  exports: [OrgsService],
  controllers: [OrgsController],
})
export class OrgsModule {}
