import { Injectable } from '@nestjs/common';
import { MailParserService } from '../mail-parser/mail-parser.service';
import { promises as fs } from 'fs';

@Injectable()
export class ChallengeTwoService {
  constructor(private mailParser: MailParserService) {}

  async parseEmail(path: string) {
    const emailBuffer = await fs.readFile(path);

    return this.mailParser.parseEmail(emailBuffer);
  }
}
