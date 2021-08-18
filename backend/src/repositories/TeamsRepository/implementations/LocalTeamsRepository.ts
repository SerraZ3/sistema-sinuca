import { Team } from "../../../entities/Team";
import { ITeamsRepository } from "../ITeamsRepository";

export class LocalTeamsRepository implements ITeamsRepository {
  private team: Team[] = [];

  async save(team: Team): Promise<void> {
    this.team.push(team);
  }
  async getTeamByIndex(indexTable: number): Promise<Team> {
    return this.team[indexTable];
  }
}
