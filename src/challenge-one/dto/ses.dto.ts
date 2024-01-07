import { ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

import { ReceiptDto } from './receipt.dto';
import { MailDto } from './mail.dto';
import { AutoMap } from '@automapper/classes';

export class SESDto {
  @ValidateNested()
  @Type(() => ReceiptDto)
  @AutoMap(() => ReceiptDto)
  receipt: ReceiptDto;

  @ValidateNested()
  @Type(() => MailDto)
  @AutoMap(() => MailDto)
  mail: MailDto;
}
