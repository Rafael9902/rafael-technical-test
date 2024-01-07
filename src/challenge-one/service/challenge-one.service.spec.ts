import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeOneService } from './challenge-one.service';
import { mockRequest } from '../utils/mock-request';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { SESProfile } from '../utils/auto-mapper';
import { mockResponse } from '../utils/mock-response';

describe('ChallengeOneService', () => {
  let service: ChallengeOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          strategyInitializer: classes(),
        }),
      ],
      providers: [ChallengeOneService, SESProfile],
    }).compile();

    service = module.get<ChallengeOneService>(ChallengeOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return correct structure', async () => {
    const output = await service.mapSesStructure(mockRequest);

    expect(output).toBeDefined();
    expect(output).toEqual(mockResponse);
  });
});
