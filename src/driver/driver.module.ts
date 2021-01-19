import { Module } from '@nestjs/common';
import { DriverService } from './driver.service';
import { DriverController } from './driver.controller';
import { Drivers } from '@entities/entities';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Drivers])],
  controllers: [DriverController],
  providers: [DriverService],
})
export class DriverModule {}
