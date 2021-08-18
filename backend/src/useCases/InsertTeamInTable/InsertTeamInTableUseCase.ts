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
    console.log(table);

    if (!table) throw Error("Tabela não existe");
    const team = await this.teamsRepository.getTeamByIndex(indexTeam);
    if (!team) throw Error("Time não existe");
    table.addTeam(team);
    await this.tablesRepository.updateTable(table, indexTable);
  }
}
