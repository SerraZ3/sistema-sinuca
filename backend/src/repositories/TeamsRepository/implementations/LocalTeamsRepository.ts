import { Team } from "../../../entities/Team";
import { ITeamsRepository } from "../ITeamsRepository";

export class LocalTeamsRepository implements ITeamsRepository {
  private teams: Team[] = [];

  async save(team: Team): Promise<void> {
    this.teams.push(team);
  }
  async getTeamByIndex(indexTable: number): Promise<Team> {
    return this.teams[indexTable];
  }
  async getTeams(): Promise<Team[]> {
    return this.teams;
  }
}
