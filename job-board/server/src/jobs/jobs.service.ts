import { Injectable } from '@nestjs/common';

// This should be a real class/interface representing a user entity
export class Job {
  id: number;
  isPublished: boolean;
  authorId: number;
}

@Injectable()
export class JobsService {}
