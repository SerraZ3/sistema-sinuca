import { Table } from "../../../entities/Table";
import { Team } from "../../../entities/Team";
import { ITablesRepository } from "../ITablesRepository";

export class LocalTablesRepository implements ITablesRepository {
  private table: Table[] = [];

  async save(table: Table): Promise<void> {
    this.table.push(table);
  }
  async insertTeam(team: Team, indexTable: number): Promise<void> {
    this.table[indexTable].insertTeam(team);
  }
  async getTableByIndex(indexTable: number): Promise<Table | undefined> {
    return this.table[indexTable];
  }
  async updateTable(table: Table, indexTable: number): Promise<void> {
    this.table[indexTable] = table;
  }
}
