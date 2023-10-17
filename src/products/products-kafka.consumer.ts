import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';

@Controller()
export class ProductsKafkaConsumer {
  @MessagePattern('my-topic')
  consumer(@Payload() message) {
    console.log(message);
  }
}
