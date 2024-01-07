import { IsString, IsArray, IsEmail } from 'class-validator';

export class CommonHeadersDto {
  @IsString()
  returnPath: string;

  @IsArray()
  @IsEmail({}, { each: true })
  from: string[];

  @IsString()
  date: string;

  @IsArray()
  @IsEmail({}, { each: true })
  to: string[];

  @IsString()
  messageId: string;

  @IsString()
  subject: string;
}
