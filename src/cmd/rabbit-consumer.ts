import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';

async function bootstrap() {
  //standalone
  const app = await NestFactory.createApplicationContext(AppModule);

  await app.init();
}
bootstrap();

//nestjs redis, rabbitmq, kafka, nats,
