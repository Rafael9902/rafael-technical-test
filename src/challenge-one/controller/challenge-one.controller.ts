import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ChallengeOneService } from '../service/challenge-one.service';
import { SesSnsEventDto } from '../dto/ses-sns-event.dto';
import { SesSnsResponseDto } from '../dto/ses-sns-response.dto';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';
import { Tags } from '../../shared/open-api/tags';

@ApiTags(Tags.CHALLENGE_ONE)
@Controller('challenge-one')
export class ChallengeOneController {
  constructor(private callengeOneService: ChallengeOneService) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  @ApiBody({ type: SesSnsEventDto })
  @ApiResponse({
    status: 200,
    type: SesSnsResponseDto,
    description: 'Transformed data',
  })
  async mapSesStructure(
    @Body() sesSnsEventDto: SesSnsEventDto,
  ): Promise<SesSnsResponseDto> {
    return this.callengeOneService.mapSesStructure(sesSnsEventDto);
  }
}
