import { Request, Response } from "express";
import { InsertTeamInTableUseCase } from "./InsertTeamInTableUseCase";

export class InsertTeamInTableController {
  constructor(private createTeamUseCase: InsertTeamInTableUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { indexTeam, indexTable } = request.body;
    try {
      await this.createTeamUseCase.execute({
        indexTeam,
        indexTable,
      });

      return response
        .status(201)
        .json({ message: "Time inserido com sucesso" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
