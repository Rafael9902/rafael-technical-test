import { Test, TestingModule } from '@nestjs/testing';
import { ChallengeTwoService } from './challenge-two.service';
import { MailParserService } from '../mail-parser/mail-parser.service';

describe('ChallengeTwoService', () => {
  let service: ChallengeTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChallengeTwoService, MailParserService],
    }).compile();

    service = module.get<ChallengeTwoService>(ChallengeTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be return the json file', async () => {
    const path = 'src/challenge-two/utils/email-test.eml';

    const output = await service.parseEmail(path);

    console.log(output);

    expect(output).toBeDefined();
  });
});
