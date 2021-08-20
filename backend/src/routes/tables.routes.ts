import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { addPointController } from "../useCases/AddPoint";
import { createTableController } from "../useCases/CreateTable";
import { getTablesController } from "../useCases/GetTables";
import { insertTeamInTableController } from "../useCases/InsertTeamInTable";
import { showTableController } from "../useCases/ShowTable";
import { showTeamController } from "../useCases/ShowTeam";
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

router.get("/:id", (request, response) => {
  return showTableController.handle(request, response);
});
router.get("/:idTable/:idIndex", (request, response) => {
  return showTeamController.handle(request, response);
});
router.get("/", (request, response) => {
  return getTablesController.handle(request, response);
});

router.post("/insert-point", (request, response) => {
  return addPointController.handle(request, response);
});

export default router;
