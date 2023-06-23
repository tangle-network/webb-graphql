import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BadRequestException, ValidationPipe } from '@nestjs/common';
import { UserInputError } from '@nestjs/apollo';

const validationPipe = new ValidationPipe({
  transform: true,
  whitelist: true,
  exceptionFactory: (errors) => {
    const error = new BadRequestException();
    const message = errors.map((e) => ({
      property: e.property,
      errors: Object.values(e.constraints),
    }));
    const res = error.getResponse() as any;
    delete res.error;
    res.message = message;
    throw error;
  },
  validationError: { target: false, value: false },
});
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['error', 'warn'],
  });
  app.enableCors();
  app.useGlobalPipes(validationPipe);
  await app.listen(3000);
}
bootstrap();
