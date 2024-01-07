import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ChallengeOneService } from '../service/challenge-one.service';
import { SesSnsEventDto } from '../dto/ses-sns-event.dto';
import { SesSnsResponseDto } from '../dto/ses-sns-response.dto';

@Controller('challenge-one')
export class ChallengeOneController {
  constructor(private callengeOneService: ChallengeOneService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async mapSesStructure(
    @Body() sesSnsEventDto: SesSnsEventDto,
  ): Promise<SesSnsResponseDto> {
    return this.callengeOneService.mapSesStructure(sesSnsEventDto);
  }
}
