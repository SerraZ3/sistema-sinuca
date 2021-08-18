import { Table } from "../../../entities/Table";
import { Team } from "../../../entities/Team";
import { ITablesRepository } from "../ITablesRepository";

export class LocalTablesRepository implements ITablesRepository {
  private table: Table[] = [];

  async save(table: Table): Promise<void> {
    this.table.push(table);
    console.log(this);
  }
  async insertTeam(team: Team, indexTable: number): Promise<void> {
    this.table[indexTable].insertTeam(team);
  }
  async getTableByIndex(indexTable: number): Promise<Table | undefined> {
    const a = this.table[indexTable];
    console.log(this);
    return a;
  }
  async updateTable(table: Table, indexTable: number): Promise<void> {
    this.table[indexTable] = table;
  }
}
