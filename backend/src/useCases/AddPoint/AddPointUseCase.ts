import { IAddPointDTO } from "../../entities/Player";
import { Table } from "../../entities/Table";
import { ITablesRepository } from "../../repositories/TablesRepository/ITablesRepository";

export class AddPointUseCase {
  constructor(private tablesRepository: ITablesRepository) {}

  async execute(data: IAddPointDTO) {
    const { indexTable, indexTeam, pointValue } = data;

    const table = await this.tablesRepository.getTableByIndex(indexTable);
    table.insertPointByTeamIndex(indexTeam, pointValue);
    await this.tablesRepository.updateTable(table, indexTable);
  }
}
