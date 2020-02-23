import { Controller, Get, Param } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/heroes/:id')
  getHero(@Param('id') id: number) {
    return this.appService.getHeroById(id);
  }
}
