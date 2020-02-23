import { Module } from '@nestjs/common';
import { Transport, ClientsModule } from '@nestjs/microservices';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';

// @TODO why does this string not work?
// export const HeroPackageToken = 'HERO_PACKAGE';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'HERO_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'hero',
          protoPath: join(__dirname, '../../protos/hero/hero.proto'),
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
