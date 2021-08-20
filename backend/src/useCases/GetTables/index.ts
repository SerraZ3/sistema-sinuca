import { localTablesRepository } from "../../config/database";
import { GetTablesController } from "./GetTablesController";
import { GetTablesUseCase } from "./GetTablesUseCase";

const getTablesUseCase = new GetTablesUseCase(localTablesRepository);

const getTablesController = new GetTablesController(getTablesUseCase);

export { getTablesUseCase, getTablesController };
