import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Races } from './Races';

@Entity('circuits', { schema: 'lemans24' })
export class Circuits {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('varchar', { name: 'name', length: 45 })
  public name: string;

  @Column('date', { name: 'since' })
  public since: string;

  @Column('decimal', {
    name: 'length_km',
    nullable: true,
    precision: 5,
    scale: 3,
  })
  public lengthKm: string | null;

  @Column('decimal', {
    name: 'length_mi',
    nullable: true,
    precision: 5,
    scale: 3,
  })
  public lengthMi: string | null;

  @Column('longblob', { name: 'layout', nullable: true })
  public layout: Buffer | null;

  @Column('varchar', { name: 'changes', nullable: true, length: 128 })
  public changes: string | null;

  @OneToMany(() => Races, (races) => races.circuit, { lazy: true })
  public races: Promise<Races[]>;
}
