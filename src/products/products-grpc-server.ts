import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class ProductsGrpcServer {
  @GrpcMethod('GrpcService')
  find() {
    return { name: 'product test' };
  }
}
