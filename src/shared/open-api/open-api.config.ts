import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Tags } from './tags';

export const initOpenApi = (app) => {
  const config = new DocumentBuilder()
    .setTitle('Rafael Ortiz Technical Test')
    .setDescription('Technical Test')
    .setVersion('1.0')
    .addTag(Tags.CHALLENGE_ONE)
    .addTag(Tags.VHALLENGE_TWO)
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
