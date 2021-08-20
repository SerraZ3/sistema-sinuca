import { Request, Response } from "express";
import { GetTablesUseCase } from "./GetTablesUseCase";

export class GetTablesController {
  constructor(private showTeamUseCase: GetTablesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const teams = await this.showTeamUseCase.execute();

      return response.status(201).json({ data: teams });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
