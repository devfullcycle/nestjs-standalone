import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'fullcycle_package',
      protoPath: join(__dirname, 'products/grpc.proto'),
      url: '0.0.0.0:50051',
    },
  });

  app.connectMicroservice({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'fullcycle',
        brokers: ['kafka:29092'],
      },
      consumer: {
        groupId: 'fullcycle-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
