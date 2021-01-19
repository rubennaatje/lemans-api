import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Races } from './Races';
import { CarNumbers } from './CarNumbers';
import { DriverResults } from './DriverResults';
import { TeamResults } from './TeamResults';

@Index('fk_result_race_idx', ['raceId'], {})
@Index('fk_results_car_idx', ['carId'], {})
@Index('idx_results_pos', ['pos'], {})
@Entity('results', { schema: 'lemans24' })
export class Results {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('int', { name: 'race_id' })
  public raceId: number;

  @Column('int', { name: 'car_id' })
  public carId: number;

  @Column('varchar', { name: 'pos', length: 3 })
  public pos: string;

  @Column('int', { name: 'laps', nullable: true })
  public laps: number | null;

  @Column('decimal', {
    name: 'distance',
    nullable: true,
    precision: 8,
    scale: 3,
  })
  public distance: string | null;

  @Column('time', { name: 'racing_time', nullable: true })
  public racingTime: string | null;

  @Column('varchar', { name: 'reason', nullable: true, length: 128 })
  public reason: string | null;

  @ManyToOne(() => Races, (races) => races.results, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'race_id', referencedColumnName: 'id' }])
  public race: Promise<Races>;

  @ManyToOne(() => CarNumbers, (carNumbers) => carNumbers.results, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'car_id', referencedColumnName: 'id' }])
  public car: Promise<CarNumbers>;

  @OneToMany(() => DriverResults, (driverResults) => driverResults.result, {
    lazy: true,
  })
  public driverResults: Promise<DriverResults[]>;

  @OneToMany(() => TeamResults, (teamResults) => teamResults.result, {
    lazy: true,
  })
  public teamResults: Promise<TeamResults[]>;
}
