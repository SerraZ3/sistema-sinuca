import { Router } from "express";
import { createTeamController } from "../useCases/CreateTeam";
import { celebrate, Joi, Segments } from "celebrate";
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

export default router;
