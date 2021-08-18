import { Team } from "../../../entities/Team";
import { ITeamsRepository } from "../ITeamsRepository";

export class LocalTeamsRepository implements ITeamsRepository {
  private team: Team[] = [];

  async save(team: Team): Promise<void> {
    this.team.push(team);
  }
}
