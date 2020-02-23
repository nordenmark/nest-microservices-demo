import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

import { hero } from '../codegen/rpc';

import Hero = hero.IHero;
import HeroById = hero.IHeroById;

@Controller('hero')
export class HeroController {
  @GrpcMethod('HeroService', 'FindOne')
  findOne(data: HeroById, metadata: any): Hero {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.id);
  }
}
