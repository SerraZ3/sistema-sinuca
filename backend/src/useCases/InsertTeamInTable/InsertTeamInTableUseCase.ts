import { IInsertTeamInTableDTO } from "../../entities/Table";
import { ITablesRepository } from "../../repositories/TablesRepository/ITablesRepository";
import { ITeamsRepository } from "../../repositories/TeamsRepository/ITeamsRepository";

export class InsertTeamInTableUseCase {
  constructor(
    private tablesRepository: ITablesRepository,
    private teamsRepository: ITeamsRepository
  ) {}

  async execute(data: IInsertTeamInTableDTO) {
    const { indexTable, indexTeam } = data;
    const table = await this.tablesRepository.getTableByIndex(indexTable);

    if (!table) throw Error("Table not exist");
    const team = await this.teamsRepository.getTeamByIndex(indexTeam);
    if (!team) throw Error("Team not exist");
    const statusInsert = await this.tablesRepository.insertTeam(
      team,
      indexTable
    );
    if (!statusInsert) {
      throw Error("Limite de times alcançado na tabela");
    }
  }
}
