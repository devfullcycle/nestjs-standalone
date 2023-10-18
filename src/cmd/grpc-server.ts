import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from '../app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'fullcycle_package',
      protoPath: join(__dirname, '..', 'products', 'grpc.proto'),
      url: '0.0.0.0:50051',
    },
  });

  await app.listen();
}
bootstrap();

//nestjs redis, rabbitmq, kafka, nats,
