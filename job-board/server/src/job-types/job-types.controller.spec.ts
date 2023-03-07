import { Test, TestingModule } from '@nestjs/testing';
import { JobTypesController } from './job-types.controller';

describe('JobTypesController', () => {
  let controller: JobTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobTypesController],
    }).compile();

    controller = module.get<JobTypesController>(JobTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
