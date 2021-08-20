import { Table } from "../../../entities/Table";
import { Team } from "../../../entities/Team";
import { ITablesRepository } from "../ITablesRepository";

export class LocalTablesRepository implements ITablesRepository {
  private tables: Table[] = [];

  async save(table: Table): Promise<void> {
    this.tables.push(table);
  }
  async insertTeam(team: Team, indexTable: number): Promise<void> {
    this.tables[indexTable].insertTeam(team);
  }
  async getTableByIndex(indexTable: number): Promise<Table | undefined> {
    return this.tables[indexTable];
  }
  async updateTable(table: Table, indexTable: number): Promise<void> {
    this.tables[indexTable] = table;
  }
  async getTeamInTableByIndex(
    indexTable: number,
    indexTeam: number
  ): Promise<Team | undefined> {
    const numberOfTables = this.tables.length;
    if (indexTable > numberOfTables - 1) return undefined;
    return this.tables[indexTable].findTeamByIndex(indexTeam);
  }
  async getTables(): Promise<Table[]> {
    return this.tables;
  }
}
