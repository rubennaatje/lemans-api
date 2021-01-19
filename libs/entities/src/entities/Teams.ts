import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TeamResults } from './TeamResults';

@Index('idx_team_unq', ['title', 'country'], { unique: true })
@Entity('teams', { schema: 'lemans24' })
export class Teams {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  public id: number;

  @Column('varchar', { name: 'title', length: 64 })
  public title: string;

  @Column('char', { name: 'country', nullable: true, length: 4 })
  public country: string | null;

  @Column('tinyint', { name: 'private_entrant', nullable: true })
  public privateEntrant: number | null;

  @OneToMany(() => TeamResults, (teamResults) => teamResults.team, {
    lazy: true,
  })
  public teamResults: Promise<TeamResults[]>;
}
