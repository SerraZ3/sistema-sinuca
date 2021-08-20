import { IShowTeamDTO, Team } from "../../entities/Team";
import { ITablesRepository } from "../../repositories/TablesRepository/ITablesRepository";

export class ShowTeamUseCase {
  constructor(private tablesRepository: ITablesRepository) {}

  async execute(data: IShowTeamDTO): Promise<Team | undefined> {
    return await this.tablesRepository.getTeamInTableByIndex(
      data.indexTable,
      data.indexTeam
    );
  }
}
