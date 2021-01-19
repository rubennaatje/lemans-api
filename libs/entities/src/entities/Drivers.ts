import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DriverResults } from './DriverResults';

@Index(
  'idx_driver_unq',
  ['lname', 'sex', 'country', 'fname', 'nickname', 'title', 'nmSuffix'],
  { unique: true },
)
@Index('idx_driver_sex', ['sex'], {})
@Index('idx_driver_full', ['title', 'fname', 'lname', 'nickname', 'nmSuffix'], {
  fulltext: true,
})
@Entity('drivers', { schema: 'lemans24' })
export class Drivers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('varchar', {
    name: 'title',
    nullable: true,
    comment: 'Royal, military or academic title',
    length: 16,
  })
  public title: string | null;

  @Column('varchar', { name: 'fname', nullable: true, length: 32 })
  public fname: string | null;

  @Column('varchar', { name: 'lname', length: 32 })
  public lname: string;

  @Column('varchar', { name: 'nickname', nullable: true, length: 32 })
  public nickname: string | null;

  @Column('varchar', {
    name: 'nm_suffix',
    nullable: true,
    comment: 'Name suffix (e.g. Jr., Sr., III)',
    length: 4,
  })
  public nmSuffix: string | null;

  @Column('varchar', {
    name: 'full_name',
    nullable: true,
    comment: 'Driver full name including title, names, nickname and suffix',
    length: 64,
  })
  public fullName: string | null;

  @Column('enum', { name: 'sex', nullable: true, enum: ['M', 'F'] })
  public sex: 'M' | 'F' | null;

  @Column('date', { name: 'born', nullable: true })
  public born: string | null;

  @Column('char', { name: 'country', length: 4 })
  public country: string;

  @OneToMany(() => DriverResults, (driverResults) => driverResults.driver, {
    lazy: true,
  })
  public driverResults: Promise<DriverResults[]>;
}
