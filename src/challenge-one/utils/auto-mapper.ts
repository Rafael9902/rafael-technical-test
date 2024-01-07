import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { SesSnsEventDto } from '../dto/ses-sns-event.dto';
import { SesSnsResponseDto } from '../dto/ses-sns-response.dto';

@Injectable()
export class SESProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper) => {
      createMap(
        mapper,
        SesSnsEventDto,
        SesSnsResponseDto,
        // spam
        forMember(
          (dest) => dest.spam,
          mapFrom(
            (src) => src.Records[0].ses.receipt.spamVerdict.status == 'PASS',
          ),
        ),
        // virus
        forMember(
          (dest) => dest.virus,
          mapFrom(
            (src) => src.Records[0].ses.receipt.virusVerdict.status == 'PASS',
          ),
        ),
        // dns
        forMember(
          (dest) => dest.dns,
          mapFrom(
            (src) =>
              src.Records[0].ses.receipt.spfVerdict.status == 'PASS' &&
              src.Records[0].ses.receipt.dkimVerdict.status == 'PASS' &&
              src.Records[0].ses.receipt.dmarcVerdict.status == 'PASS',
          ),
        ),
        // mes
        forMember(
          (dest) => dest.mes,
          mapFrom((src) => {
            const date = new Date(src.Records[0].ses.mail.timestamp);
            return date.toLocaleString('default', { month: 'long' });
          }),
        ),
        // restrasado
        forMember(
          (dest) => dest.retrasado,
          mapFrom(
            (src) => src.Records[0].ses.receipt.processingTimeMillis > 1000,
          ),
        ),
        // emisor
        forMember(
          (dest) => dest.emisor,
          mapFrom((src) => src.Records[0].ses.mail.source.split('@')[0]),
        ),
        // receptor
        forMember(
          (dest) => dest.receptor,
          mapFrom((src) =>
            src.Records[0].ses.mail.destination.map(
              (mail) => mail.split('@')[0],
            ),
          ),
        ),
      );
    };
  }
}
