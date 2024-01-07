import { IsArray, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { RecordDto } from './record.dto';
import { AutoMap } from '@automapper/classes';
import { SesSnsResponseDto } from './ses-sns-response.dto';

export class SesSnsEventDto {
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => RecordDto)
  @AutoMap(() => [SesSnsResponseDto])
  Records: RecordDto[];
}
