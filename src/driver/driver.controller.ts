import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { DriverService } from './driver.service';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.driverService.findOne(id);
  }

  @Get('')
  getAll() {
    return this.driverService.findAll();
  }
}
