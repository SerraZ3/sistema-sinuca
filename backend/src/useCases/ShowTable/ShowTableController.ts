import { Request, Response } from "express";
import { ShowTableUseCase } from "./ShowTableUseCase";

export class ShowTableController {
  constructor(private showTableUseCase: ShowTableUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const indexTable = parseInt(id);
    try {
      const table = await this.showTableUseCase.execute({
        indexTable,
      });

      return response.status(201).json({ data: table });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
