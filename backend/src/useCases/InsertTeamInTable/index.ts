import {
  localTablesRepository,
  localTeamsRepository,
} from "../../config/database";
import { InsertTeamInTableController } from "./InsertTeamInTableController";
import { InsertTeamInTableUseCase } from "./InsertTeamInTableUseCase";

const insertTeamInTableUseCase = new InsertTeamInTableUseCase(
  localTablesRepository,
  localTeamsRepository
);

const insertTeamInTableController = new InsertTeamInTableController(
  insertTeamInTableUseCase
);

export { insertTeamInTableUseCase, insertTeamInTableController };
