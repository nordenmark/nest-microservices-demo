import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';

import { hero } from '../codegen/rpc';
import HeroService = hero.HeroService;

@Injectable()
export class AppService implements OnModuleInit {
  private heroService: HeroService;

  constructor(@Inject('HERO_PACKAGE') private readonly client: ClientGrpc) {}

  onModuleInit() {
    this.heroService = this.client.getService<HeroService>('HeroService');
  }

  getHeroById(id: number) {
    return this.heroService.findOne({ id });
  }
}
