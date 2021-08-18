import { Request, Response } from "express";
import { AddPointUseCase } from "./AddPointUseCase";

export class AddPointController {
  constructor(private createTableUseCase: AddPointUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { indexTable, indexTeam, pointValue } = request.body;

    try {
      await this.createTableUseCase.execute({
        indexTable,
        indexTeam,
        pointValue,
      });

      return response.status(201).json({ message: "Point successfully added" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
