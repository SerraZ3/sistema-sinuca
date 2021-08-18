import { IShowTableDTO, Table } from "../../entities/Table";
import { ITablesRepository } from "../../repositories/TablesRepository/ITablesRepository";

export class ShowTableUseCase {
  constructor(private tablesRepository: ITablesRepository) {}

  async execute(data: IShowTableDTO): Promise<Table | undefined> {
    return await this.tablesRepository.getTableByIndex(data.indexTable);
  }
}
