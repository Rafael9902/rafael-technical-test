import { Controller, Get, Query } from '@nestjs/common';
import { ChallengeTwoService } from '../services/challenge-two/challenge-two.service';

@Controller('challenge-two')
export class ChallengeTwoController {
  constructor(private challengeTwoService: ChallengeTwoService) {}

  @Get()
  parseEmail(@Query('path') path: string) {
    return this.challengeTwoService.parseEmail(path);
  }
}
