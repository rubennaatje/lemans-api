import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { RacesModule } from './races/races.module';
import { DriverModule } from './driver/driver.module';
import * as entities from '@entities/entities';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 19031,
      username: 'root',
      password: 'password',
      database: 'lemans24',
      entities: [
        entities.CarNumbers,
        entities.Cars,
        entities.Circuits,
        entities.DriverResults,
        entities.Drivers,
        entities.Races,
        entities.Results,
        entities.ResultsIn,
        entities.TeamResults,
        entities.Teams,
        entities.Tyres,
      ],
      synchronize: false,
    }),
    RacesModule,
    DriverModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
