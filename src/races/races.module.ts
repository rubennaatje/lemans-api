import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RacesService } from './races.service';
import { RacesController } from './races.controller';
import { Races } from '@entities/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Races])],
  providers: [RacesService],
  controllers: [RacesController],
})
export class RacesModule {}
