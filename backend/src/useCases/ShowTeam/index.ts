import { localTablesRepository } from "../../config/database";
import { ShowTeamController } from "./ShowTeamController";
import { ShowTeamUseCase } from "./ShowTeamUseCase";

const showTeamUseCase = new ShowTeamUseCase(localTablesRepository);

const showTeamController = new ShowTeamController(showTeamUseCase);

export { showTeamUseCase, showTeamController };
