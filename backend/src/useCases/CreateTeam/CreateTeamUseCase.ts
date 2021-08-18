import { ICreateTeamDTO, Team } from "../../entities/Team";
import { ITeamsRepository } from "../../repositories/TeamsRepository/ITeamsRepository";

export class CreateTeamUseCase {
  constructor(private teamsRepository: ITeamsRepository) {}

  async execute(data: ICreateTeamDTO) {
    const team = new Team(data);
    await this.teamsRepository.save(team);
  }
}
