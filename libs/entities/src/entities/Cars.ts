import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CarNumbers } from './CarNumbers';

@Index('idx_car_unq', ['carClass', 'carChassis', 'carEngine'], { unique: true })
@Entity('cars', { schema: 'lemans24' })
export class Cars {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('varchar', { name: 'car_class', nullable: true, length: 12 })
  public carClass: string | null;

  @Column('varchar', { name: 'car_chassis', length: 64 })
  public carChassis: string;

  @Column('varchar', { name: 'car_engine', nullable: true, length: 64 })
  public carEngine: string | null;

  @OneToMany(() => CarNumbers, (carNumbers) => carNumbers.car, { lazy: true })
  public carNumbers: Promise<CarNumbers[]>;
}
