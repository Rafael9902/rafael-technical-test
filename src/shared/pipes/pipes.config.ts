import { BadRequestException, ValidationPipe } from '@nestjs/common';

export const pipesConfig = (app) => {
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      exceptionFactory: (errors) => new BadRequestException(errors),
    }),
  );
};
