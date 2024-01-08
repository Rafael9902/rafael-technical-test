import { Controller, Get, Query } from '@nestjs/common';
import { ChallengeTwoService } from '../services/challenge-two/challenge-two.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { Tags } from '../../shared/open-api/tags';
import { OpenApiExampleObject } from '../utils/open-api-examples';

@ApiTags(Tags.VHALLENGE_TWO)
@Controller('challenge-two')
export class ChallengeTwoController {
  constructor(private challengeTwoService: ChallengeTwoService) {}

  @ApiQuery({
    name: 'path',
    required: true,
    type: String,
    examples: OpenApiExampleObject,
    description: 'Path to the email file (.eml)',
  })
  @Get()
  parseEmail(@Query('path') path: string) {
    return this.challengeTwoService.parseEmail(path);
  }
}
