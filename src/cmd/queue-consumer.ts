import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { QueueWorkerModule } from '../queue-worker.module';

async function bootstrap() {
  //standalone
  const app = await NestFactory.createApplicationContext(QueueWorkerModule);

  await app.init();
}
bootstrap();

//nestjs redis, rabbitmq, kafka, nats,
