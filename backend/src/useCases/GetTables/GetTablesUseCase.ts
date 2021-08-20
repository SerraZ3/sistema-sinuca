import { Table } from "../../entities/Table";
import { ITablesRepository } from "../../repositories/TablesRepository/ITablesRepository";

export class GetTablesUseCase {
  constructor(private teamsRepository: ITablesRepository) {}

  async execute(): Promise<Table[] | undefined> {
    return await this.teamsRepository.getTables();
  }
}
