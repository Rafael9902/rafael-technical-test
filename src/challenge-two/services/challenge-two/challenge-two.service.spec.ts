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

  it('should be return the json for case 1: file attachment', async () => {
    const path = 'src/challenge-two/utils/email-test-case-1.eml';

    const output = await service.parseEmail(path);

    expect(output).toBeDefined();
    expect(typeof output).toBe('object');
  });

  it('should be return the json for case 2: link to json', async () => {
    const path = 'src/challenge-two/utils/email-test-case-2.eml';

    const output = await service.parseEmail(path);

    expect(output).toBeDefined();
    expect(typeof output).toBe('object');
  });

  it('should be return the json for case 3: link to web with json', async () => {
    const path = 'src/challenge-two/utils/email-test-case-3.eml';

    const output = await service.parseEmail(path);

    expect(output).toBeDefined();
    expect(typeof output).toBe('object');
  });
});
