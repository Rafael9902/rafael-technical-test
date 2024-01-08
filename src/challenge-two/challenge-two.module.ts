import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { MailParserService } from './services/mail-parser/mail-parser.service';
import { ChallengeTwoController } from './controller/challenge-two.controller';
import { ChallengeTwoService } from './services/challenge-two/challenge-two.service';

@Module({
  imports: [HttpModule],
  providers: [MailParserService, ChallengeTwoService],
  controllers: [ChallengeTwoController],
})
export class ChallengeTwoModule {}
