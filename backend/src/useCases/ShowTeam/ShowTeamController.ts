import { Request, Response } from "express";
import { ShowTeamUseCase } from "./ShowTeamUseCase";

export class ShowTeamController {
  constructor(private showTeamUseCase: ShowTeamUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { idTable, idIndex } = request.params;
    const indexTable = parseInt(idTable);
    const indexTeam = parseInt(idIndex);
    try {
      const team = await this.showTeamUseCase.execute({
        indexTable,
        indexTeam,
      });

      return response.status(201).json({ data: team });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
