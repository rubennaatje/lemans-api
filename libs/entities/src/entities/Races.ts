import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Circuits } from './Circuits';
import { CarNumbers } from './CarNumbers';
import { Results } from './Results';

@Index('fk_race_circuit_idx', ['circuitId'], {})
@Entity('races', { schema: 'lemans24' })
export class Races {
  @Column('int', { primary: true, name: 'id' })
  public id: number;

  @Column('int', { name: 'circuit_id' })
  public circuitId: number;

  @Column('date', { name: 'event_date' })
  public eventDate: string;

  @Column('time', { name: 'start_time' })
  public startTime: string;

  @Column('tinyint', { name: 'cancelled' })
  public cancelled: number;

  @Column('varchar', {
    name: 'cancellation_reason',
    nullable: true,
    length: 128,
  })
  public cancellationReason: string | null;

  @Column('decimal', {
    name: 'distance_km',
    nullable: true,
    precision: 10,
    scale: 3,
  })
  public distanceKm: string | null;

  @Column('decimal', {
    name: 'distance_mi',
    nullable: true,
    precision: 10,
    scale: 3,
  })
  public distanceMi: string | null;

  @Column('decimal', {
    name: 'laps',
    comment: 'Number of laps',
    precision: 7,
    scale: 3,
  })
  public laps: string;

  @Column('decimal', {
    name: 'avg_speed_kmh',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  public avgSpeedKmh: string | null;

  @Column('decimal', {
    name: 'avg_speed_mph',
    nullable: true,
    precision: 5,
    scale: 2,
  })
  public avgSpeedMph: string | null;

  @ManyToOne(() => Circuits, (circuits) => circuits.races, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'circuit_id', referencedColumnName: 'id' }])
  public circuit: Promise<Circuits>;

  @OneToMany(() => CarNumbers, (carNumbers) => carNumbers.race, { lazy: true })
  public carNumbers: Promise<CarNumbers[]>;

  @OneToMany(() => Results, (results) => results.race, { lazy: true })
  public results: Promise<Results[]>;
}
