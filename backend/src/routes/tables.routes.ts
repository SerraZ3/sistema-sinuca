import { Router } from "express";
import { createTableController } from "../useCases/CreateTable";
import { celebrate, Joi, Segments } from "celebrate";
import { insertTeamInTableController } from "../useCases/InsertTeamInTable";
const router = Router();

router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      award: Joi.string().required(),
      maxPoint: Joi.number().integer().required(),
      descriptionPoint: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createTableController.handle(request, response);
  }
);

router.put(
  "/insert-team",
  celebrate({
    [Segments.BODY]: {
      indexTeam: Joi.number().integer().required(),
      indexTable: Joi.number().integer().required(),
    },
  }),
  (request, response) => {
    return insertTeamInTableController.handle(request, response);
  }
);

export default router;
