import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Races } from './Races';
import { Cars } from './Cars';
import { Results } from './Results';
import { Tyres } from './Tyres';

@Index('fk_car_nums_race_idx', ['raceId'], {})
@Index('fk_car_nums_car_idx', ['carId'], {})
@Entity('car_numbers', { schema: 'lemans24' })
export class CarNumbers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('int', { name: 'race_id' })
  public raceId: number;

  @Column('int', { name: 'car_id', nullable: true })
  public carId: number | null;

  @Column('int', { name: 'nbr' })
  public nbr: number;

  @ManyToOne(() => Races, (races) => races.carNumbers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'race_id', referencedColumnName: 'id' }])
  public race: Promise<Races>;

  @ManyToOne(() => Cars, (cars) => cars.carNumbers, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'car_id', referencedColumnName: 'id' }])
  public car: Promise<Cars>;

  @OneToMany(() => Results, (results) => results.car, { lazy: true })
  public results: Promise<Results[]>;

  @ManyToMany(() => Tyres, (tyres) => tyres.carNumbers, { lazy: true })
  @JoinTable({
    name: 'car_tyres',
    joinColumns: [{ name: 'car_id', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'tyre_id', referencedColumnName: 'id' }],
    schema: 'lemans24',
  })
  public tyres: Promise<Tyres[]>;
}
