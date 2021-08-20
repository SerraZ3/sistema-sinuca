import { localTeamsRepository } from "../../config/database";
import { GetTeamsController } from "./GetTeamsController";
import { GetTeamsUseCase } from "./GetTeamsUseCase";

const getTeamsUseCase = new GetTeamsUseCase(localTeamsRepository);

const getTeamsController = new GetTeamsController(getTeamsUseCase);

export { getTeamsUseCase, getTeamsController };
