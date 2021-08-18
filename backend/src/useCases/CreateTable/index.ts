import { LocalTablesRepository } from "../../repositories/TablesRepository/implementations/LocalTablesRepository";
import { CreateTableController } from "./CreateTableController";
import { CreateTableUseCase } from "./CreateTableUseCase";

const localTablesRepository = new LocalTablesRepository();

const createTableUseCase = new CreateTableUseCase(localTablesRepository);

const createTableController = new CreateTableController(createTableUseCase);

export { createTableUseCase, createTableController };
