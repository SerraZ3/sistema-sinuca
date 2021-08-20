import { celebrate, Joi, Segments } from "celebrate";
import { Router } from "express";
import { createTeamController } from "../useCases/CreateTeam";
import { getTeamsController } from "../useCases/GetTeams";
const router = Router();

router.post(
  "/",
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      namePlayer1: Joi.string().required(),
      namePlayer2: Joi.string().required(),
    },
  }),
  (request, response) => {
    return createTeamController.handle(request, response);
  }
);
router.get("/", (request, response) => {
  return getTeamsController.handle(request, response);
});

export default router;
