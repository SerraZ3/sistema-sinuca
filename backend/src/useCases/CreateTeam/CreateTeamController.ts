import { Request, Response } from "express";
import { Player } from "../../entities/Player";
import { Point } from "../../entities/Point";
import { CreateTeamUseCase } from "./CreateTeamUseCase";

export class CreateTeamController {
  constructor(private createTeamUseCase: CreateTeamUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, namePlayer1, namePlayer2 } = request.body;
    try {
      const player1 = new Player(namePlayer1);
      const player2 = new Player(namePlayer2);
      const point = new Point();
      await this.createTeamUseCase.execute({
        name,
        player1,
        player2,
        point,
      });

      return response.status(201).json({ message: "Time criado com sucesso" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
