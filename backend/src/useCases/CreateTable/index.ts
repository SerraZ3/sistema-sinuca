import { localTablesRepository } from "../../config/database";
import { CreateTableController } from "./CreateTableController";
import { CreateTableUseCase } from "./CreateTableUseCase";

const createTableUseCase = new CreateTableUseCase(localTablesRepository);

const createTableController = new CreateTableController(createTableUseCase);

export { createTableUseCase, createTableController };
