import { Table } from "../../entities/Table";
import { Team } from "../../entities/Team";

export interface ITablesRepository {
  save(table: Table): Promise<void>;
  insertTeam(team: Team, tableIndex: number): Promise<boolean>;
  getTableByIndex(indexTable: number): Promise<Table | undefined>;
  getTeamInTableByIndex(
    indexTable: number,
    indexTeam: number
  ): Promise<Team | undefined>;
  updateTable(table: Table, indexTable: number): Promise<void>;
  getTables(): Promise<Table[]>;
}
