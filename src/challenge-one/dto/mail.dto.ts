import { IsString, IsArray, ValidateNested, IsBoolean } from 'class-validator';
import { Type } from 'class-transformer';
import { HeaderDto } from './header.dto';
import { CommonHeadersDto } from './common-headers.dto';
import { AutoMap } from '@automapper/classes';

export class MailDto {
  @IsString()
  timestamp: string;

  @IsString()
  @AutoMap()
  source: string;

  @IsString()
  messageId: string;

  @IsArray()
  @IsString({ each: true })
  @AutoMap()
  destination: string[];

  @IsBoolean()
  headersTruncated: boolean;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => HeaderDto)
  headers: HeaderDto[];

  @ValidateNested()
  @Type(() => CommonHeadersDto)
  commonHeaders: CommonHeadersDto;
}
