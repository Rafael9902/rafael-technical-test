import { IsArray, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { RecordDto } from './record.dto';
import { AutoMap } from '@automapper/classes';
import { SesSnsResponseDto } from './ses-sns-response.dto';
import { ApiProperty } from '@nestjs/swagger';
import { mockRequest } from '../utils/mock-request';

export class SesSnsEventDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecordDto)
  @AutoMap(() => [SesSnsResponseDto])
  @IsNotEmpty()
  @ApiProperty({ type: [RecordDto], example: mockRequest.Records })
  Records: RecordDto[];
}
