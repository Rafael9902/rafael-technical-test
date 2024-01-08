import { Injectable } from '@nestjs/common';
import { simpleParser } from 'mailparser';

@Injectable()
export class MailParserService {
  async parseEmail(rawEmailContent: Buffer): Promise<any> {
    try {
      const parsed = await simpleParser(rawEmailContent);

      // Check for and process the JSON attachment
      const jsonAttachment = parsed.attachments?.find(
        (attachment) => attachment.contentType === 'application/json',
      );

      if (jsonAttachment) {
        const jsonContent = jsonAttachment.content.toString('utf8');
        return JSON.parse(jsonContent);
      }

      return null; // or handle as needed
    } catch (error) {
      throw new Error('Failed to parse email');
    }
  }
}
