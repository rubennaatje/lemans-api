import { Controller, Get } from '@nestjs/common';
import { RacesService } from './races.service';

@Controller('races')
export class RacesController {
  constructor(private racesService: RacesService) {}

  @Get('')
  getAll() {
    return this.racesService.findAll();
  }
}
