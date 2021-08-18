import { Table } from "../../../entities/Table";
import { ITablesRepository } from "../ITablesRepository";

export class LocalTablesRepository implements ITablesRepository {
  private table: Table[] = [];

  async save(table: Table): Promise<void> {
    this.table.push(table);
  }
}
