import { Injectable } from '@nestjs/common';
import { Drivers } from '@entities/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Drivers)
    private driversRepository: Repository<Drivers>,
  ) {}

  findAll(): Promise<Drivers[]> {
    return this.driversRepository.find();
  }

  findOne(id: string): Promise<Drivers> {
    return this.driversRepository.findOne(id, {
      relations: [
        'driverResults',
        'driverResults.result',
        'driverResults.result.race',
      ],
    });
  }
}
