import { localTablesRepository } from "../../config/database";
import { AddPointController } from "./AddPointController";
import { AddPointUseCase } from "./AddPointUseCase";

const addPointUseCase = new AddPointUseCase(localTablesRepository);

const addPointController = new AddPointController(addPointUseCase);

export { addPointUseCase, addPointController };
