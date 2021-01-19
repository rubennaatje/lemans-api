import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Teams } from './Teams';
import { Results } from './Results';

@Index('fk_tm_res_res_idx', ['resultId'], {})
@Entity('team_results', { schema: 'lemans24' })
export class TeamResults {
  @Column('int', { primary: true, name: 'team_id' })
  public teamId: number;

  @Column('int', { primary: true, name: 'result_id' })
  public resultId: number;

  @Column('int', { name: 'ord_num', comment: 'Order number' })
  public ordNum: number;

  @ManyToOne(() => Teams, (teams) => teams.teamResults, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'team_id', referencedColumnName: 'id' }])
  public team: Promise<Teams>;

  @ManyToOne(() => Results, (results) => results.teamResults, {
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE',
    lazy: true,
  })
  @JoinColumn([{ name: 'result_id', referencedColumnName: 'id' }])
  public result: Promise<Results>;
}
