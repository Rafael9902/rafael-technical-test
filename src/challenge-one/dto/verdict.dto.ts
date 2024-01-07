import { IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class VerdictDto {
  @IsString()
  @AutoMap()
  status: string;
}
