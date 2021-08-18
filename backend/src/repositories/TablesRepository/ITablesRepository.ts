import { Table } from "../../entities/Table";
import { Team } from "../../entities/Team";

export interface ITablesRepository {
  save(table: Table): Promise<void>;
  insertTeam(team: Team, tableIndex: number): Promise<void>;
  getTableByIndex(indexTable: number): Promise<Table | undefined>;
  updateTable(table: Table, indexTable: number): Promise<void>;
}
