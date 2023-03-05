import { Module } from '@nestjs/common';
import { OrgProfilesService } from './org-profiles.service';

@Module({
  providers: [OrgProfilesService]
})
export class OrgProfilesModule {}
