import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Races } from '@entities/entities';

@Injectable()
export class RacesService {
  constructor(
    @InjectRepository(Races)
    private racesRepository: Repository<Races>,
  ) {}

  findAll(): Promise<Races[]> {
    return this.racesRepository.find({
      relations: [
        'results',
        'results.driverResults',
        'results.driverResults.driver',
        'results.teamResults',
        'results.teamResults.team',
      ],
    });
  }

  findOne(id: string): Promise<Races> {
    return this.racesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.racesRepository.delete(id);
  }
}
