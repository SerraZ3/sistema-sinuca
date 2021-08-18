import { localTablesRepository } from "../../config/database";
import { ShowTableController } from "./ShowTableController";
import { ShowTableUseCase } from "./ShowTableUseCase";

const showTableUseCase = new ShowTableUseCase(localTablesRepository);

const showTableController = new ShowTableController(showTableUseCase);

export { showTableUseCase, showTableController };
