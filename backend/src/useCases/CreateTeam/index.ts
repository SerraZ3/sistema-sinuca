import { LocalTeamsRepository } from "../../repositories/TeamsRepository/implementations/LocalTeamsRepository";
import { CreateTeamController } from "./CreateTeamController";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

const localTeamsRepository = new LocalTeamsRepository();

const createTeamUseCase = new CreateTeamUseCase(localTeamsRepository);

const createTeamController = new CreateTeamController(createTeamUseCase);

export { createTeamUseCase, createTeamController };
