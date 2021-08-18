import { LocalTablesRepository } from "../repositories/TablesRepository/implementations/LocalTablesRepository";
import { LocalTeamsRepository } from "../repositories/TeamsRepository/implementations/LocalTeamsRepository";

export const localTeamsRepository = new LocalTeamsRepository();
export const localTablesRepository = new LocalTablesRepository();
