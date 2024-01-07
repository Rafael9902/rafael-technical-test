import { Injectable } from '@nestjs/common';

import { SesSnsEventDto } from '../dto/ses-sns-event.dto';
import { SesSnsResponseDto } from '../dto/ses-sns-response.dto';
import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/core';

@Injectable()
export class ChallengeOneService {
  constructor(@InjectMapper() private mapper: Mapper) {}

  async mapSesStructure(
    sesSnsEventDto: SesSnsEventDto,
  ): Promise<SesSnsResponseDto> {
    return await this.mapper.map(
      sesSnsEventDto,
      SesSnsEventDto,
      SesSnsResponseDto,
    );
  }
}
