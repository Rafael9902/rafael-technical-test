import { IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { SESDto } from './ses.dto';

export class RecordDto {
  @IsString()
  eventVersion: string;

  @ValidateNested()
  @Type(() => SESDto)
  ses: SESDto;

  @IsString()
  eventSource: string;
}
