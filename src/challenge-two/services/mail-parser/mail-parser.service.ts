import { Injectable } from '@nestjs/common';
import { simpleParser } from 'mailparser';
import { urlJsonRegex, urlRegex } from '../../utils/regex';

@Injectable()
export class MailParserService {
  async parseEmail(rawEmailContent: Buffer): Promise<any> {
    try {
      const parsed = await simpleParser(rawEmailContent);

      // Case 1: JSON file attachment
      const jsonAttachment = parsed.attachments?.find(
        (attachment) => attachment.contentType === 'application/json',
      );

      if (jsonAttachment) {
        return this.getJsonAttachment(jsonAttachment);
      }

      // Case 2 and 3: Inside the body as a link
      const bodyLink = parsed.text?.match(urlRegex)[0];

      if (!jsonAttachment && bodyLink) {
        return this.getJsonFromLink2(bodyLink);
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async getJsonAttachment(jsonAttachment) {
    const jsonContent = jsonAttachment.content.toString('utf8');
    return JSON.parse(jsonContent);
  }

  async getJsonFromLink(bodyLink: string) {
    const response = await fetch(bodyLink);
    const data = await response.json();

    return data;
  }

  async getJsonFromLink2(bodyLink: string) {
    const response = await fetch(bodyLink);

    const contentType = response.headers.get('Content-Type');

    // Case 2
    if (contentType.includes('application/json')) {
      return await response.json();
    }

    // Case 3
    if (contentType.includes('text/html')) {
      const responseText = await response.text();

      const uri = responseText.match(urlJsonRegex)[1];

      const caseThreeResponse = await fetch(`${bodyLink}${uri}`);
      const caseThreedata = await caseThreeResponse.json();

      return caseThreedata;
    }
  }
}
