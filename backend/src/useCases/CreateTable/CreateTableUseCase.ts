import { ICreateTableDTO, Table } from "../../entities/Table";
import { ITablesRepository } from "../../repositories/TablesRepository/ITablesRepository";

export class CreateTableUseCase {
  constructor(private tablesRepository: ITablesRepository) {}

  async execute(data: ICreateTableDTO) {
    const table = new Table(data);
    await this.tablesRepository.save(table);
  }
}
