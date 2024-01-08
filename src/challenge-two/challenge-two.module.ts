import { Module } from '@nestjs/common';
import { MailParserService } from './services/mail-parser/mail-parser.service';
import { ChallengeTwoController } from './controller/challenge-two.controller';
import { ChallengeTwoService } from './services/challenge-two/challenge-two.service';

@Module({
  providers: [MailParserService, ChallengeTwoService],
  controllers: [ChallengeTwoController],
})
export class ChallengeTwoModule {}
