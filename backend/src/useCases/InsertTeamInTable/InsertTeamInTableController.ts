import { Request, Response } from "express";
import { InsertTeamInTableUseCase } from "./InsertTeamInTableUseCase";

export class InsertTeamInTableController {
  constructor(private insertTeamUseCase: InsertTeamInTableUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { indexTeam, indexTable } = request.body;
    try {
      await this.insertTeamUseCase.execute({
        indexTeam,
        indexTable,
      });

      return response.status(201).json({ message: "Team successfully added" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
