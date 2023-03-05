import { Test, TestingModule } from '@nestjs/testing';
import { OrgProfilesService } from './org-profiles.service';

describe('OrgProfilesService', () => {
  let service: OrgProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrgProfilesService],
    }).compile();

    service = module.get<OrgProfilesService>(OrgProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
