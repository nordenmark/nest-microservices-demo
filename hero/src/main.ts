import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

const logger = new Logger('HERO');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.GRPC,
    options: {
      package: 'hero',
      protoPath: join(__dirname, '../../protos/hero/hero.proto'),
    },
  });

  app.listen(() => {
    logger.log('hero listening...');
  });
}
bootstrap();
