import { Team } from "../../entities/Team";

export interface ITeamsRepository {
  save(table: Team): Promise<void>;
}
