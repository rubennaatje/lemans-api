import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('results_in', { schema: 'lemans24' })
export class ResultsIn {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('int', { name: 'race_yr', comment: 'Race year' })
  public raceYr: number;

  @Column('varchar', {
    name: 'pos',
    comment:
      'Position - either number or NC (not classified), DNF (do not finish) or DSQ (disqualified)',
    length: 3,
  })
  public pos: string;

  @Column('varchar', {
    name: 'car_class',
    comment: 'Car class (litres or named)',
    length: 12,
  })
  public carClass: string;

  @Column('int', { name: 'car_nbr', comment: 'Car number' })
  public carNbr: number;

  @Column('varchar', {
    name: 'team_cntry',
    comment: 'Team country (ISO 3166 3 characters code)',
    length: 16,
  })
  public teamCntry: string;

  @Column('varchar', { name: 'team_name', comment: 'Team name', length: 128 })
  public teamName: string;

  @Column('varchar', {
    name: 'drivers_cntry',
    comment: 'Driver countries (ISO 3166 3 characters code) separated',
    length: 32,
  })
  public driversCntry: string;

  @Column('varchar', {
    name: 'drivers_name',
    comment: 'Drivers names',
    length: 256,
  })
  public driversName: string;

  @Column('varchar', {
    name: 'car_chassis',
    comment: 'Chassis name',
    length: 64,
  })
  public carChassis: string;

  @Column('varchar', { name: 'car_engine', comment: 'Engine name', length: 64 })
  public carEngine: string;

  @Column('varchar', {
    name: 'car_tyres',
    nullable: true,
    comment: 'Tyres manufacturer',
    length: 16,
  })
  public carTyres: string | null;

  @Column('int', { name: 'laps', nullable: true, comment: 'Laps completed' })
  public laps: number | null;

  @Column('decimal', {
    name: 'distance',
    nullable: true,
    comment: 'Distance covered',
    precision: 8,
    scale: 3,
  })
  public distance: string | null;

  @Column('time', {
    name: 'racing_time',
    nullable: true,
    comment: 'Racing time',
  })
  public racingTime: string | null;

  @Column('varchar', {
    name: 'reason',
    nullable: true,
    comment: 'Reason for NC, DNF, DSQ',
    length: 128,
  })
  public reason: string | null;

  @Column('tinyint', {
    name: 'processed',
    comment: 'Record processed or not',
    default: () => "'0'",
  })
  public processed: number;
}
