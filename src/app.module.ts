import { Module } from '@nestjs/common';
import { ChallengeOneModule } from './challenge-one/challenge-one.module';

@Module({
  imports: [ChallengeOneModule],
})
export class AppModule {}
