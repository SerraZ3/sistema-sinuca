import { Request, Response } from "express";
import { CreateTableUseCase } from "./CreateTableUseCase";

export class CreateTableController {
  constructor(private createTableUseCase: CreateTableUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, award, maxPoint, descriptionPoint } = request.body;

    try {
      await this.createTableUseCase.execute({
        name,
        award,
        maxPoint,
        descriptionPoint,
      });

      return response
        .status(201)
        .json({ message: "Tabela criada com sucesso" });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
