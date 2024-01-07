import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeOneController } from './challenge-one.controller';

describe('ChallengeOneController', () => {
  let controller: ChallengeOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChallengeOneController],
    }).compile();

    controller = module.get<ChallengeOneController>(ChallengeOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
