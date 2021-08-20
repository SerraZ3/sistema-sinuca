import { Team } from "../../entities/Team";

export interface ITeamsRepository {
  save(table: Team): Promise<void>;
  getTeamByIndex(indexTable: number): Promise<Team>;
  getTeams(): Promise<Team[]>;
}
