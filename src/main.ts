import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsGrpcServer } from './products/products-grpc-server';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(app.get(ProductsGrpcServer));
  await app.listen(3000);
}
bootstrap();

//nestjs redis, rabbitmq, kafka, nats,
