import { localTeamsRepository } from "../../config/database";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const createTeamUseCase = new CreateTeamUseCase(localTeamsRepository);

const createTeamController = new CreateTeamController(createTeamUseCase);

export { createTeamUseCase, createTeamController };
