import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initOpenApi } from './shared/open-api/open-api.config';
import { pipesConfig } from './shared/pipes/pipes.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  pipesConfig(app);
  initOpenApi(app);

  await app.listen(3000);
}
bootstrap();
