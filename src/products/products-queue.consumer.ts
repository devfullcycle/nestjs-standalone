import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('xpto-queue')
export class ProductsQueueConsumer {
  
  @Process()
  async handler(job: Job<unknown>) {
    console.log(job.data);
    return {};
  }
}
