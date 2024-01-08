import { Module } from '@nestjs/common';
import { ChallengeOneModule } from './challenge-one/challenge-one.module';
import { ChallengeTwoModule } from './challenge-two/challenge-two.module';

@Module({
  imports: [ChallengeOneModule, ChallengeTwoModule],
})
export class AppModule {}
