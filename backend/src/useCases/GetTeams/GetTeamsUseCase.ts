import { Team } from "../../entities/Team";
import { ITeamsRepository } from "../../repositories/TeamsRepository/ITeamsRepository";

export class GetTeamsUseCase {
  constructor(private teamsRepository: ITeamsRepository) {}

  async execute(): Promise<Team[] | undefined> {
    return await this.teamsRepository.getTeams();
  }
}
