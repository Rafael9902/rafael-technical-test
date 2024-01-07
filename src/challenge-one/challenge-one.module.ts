import { Module } from '@nestjs/common';
import { ChallengeOneController } from './controller/challenge-one.controller';
import { ChallengeOneService } from './service/challenge-one.service';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { SESProfile } from './utils/auto-mapper';

@Module({
  imports: [
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
  ],
  controllers: [ChallengeOneController],
  providers: [ChallengeOneService, SESProfile],
})
export class ChallengeOneModule {}
