import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Drivers } from './Drivers';
import { Results } from './Results';

@Index('fk_driver_results_result_idx', ['resultId'], {})
@Entity('driver_results', { schema: 'lemans24' })
export class DriverResults {
  @Column('int', { primary: true, name: 'driver_id' })
  public driverId: number;

  @Column('int', { primary: true, name: 'result_id' })
  public resultId: number;

  @Column('int', { name: 'ord_num', comment: 'Order number' })
  public ordNum: number;

  @ManyToOne(() => Drivers, (drivers) => drivers.driverResults, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'driver_id', referencedColumnName: 'id' }])
  public driver: Promise<Drivers>;

  @ManyToOne(() => Results, (results) => results.driverResults, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'result_id', referencedColumnName: 'id' }])
  public result: Promise<Results>;
}
