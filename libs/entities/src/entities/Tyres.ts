import { Column, Entity, ManyToMany } from 'typeorm';
import { CarNumbers } from './CarNumbers';

@Entity('tyres', { schema: 'lemans24' })
export class Tyres {
  @Column('char', { primary: true, name: 'id', length: 2 })
  public id: string;

  @Column('varchar', { name: 'brand', length: 16 })
  public brand: string;

  @ManyToMany(() => CarNumbers, (carNumbers) => carNumbers.tyres, {
    lazy: true,
  })
  public carNumbers: Promise<CarNumbers[]>;
}
