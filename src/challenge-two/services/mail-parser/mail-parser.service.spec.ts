import { Test, TestingModule } from '@nestjs/testing';
import { MailParserService } from './mail-parser.service';

describe('MailParserService', () => {
  let service: MailParserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MailParserService],
    }).compile();

    service = module.get<MailParserService>(MailParserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
