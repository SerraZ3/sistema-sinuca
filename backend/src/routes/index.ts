import { Router } from "express";
import tablesRouter from "./tables.routes";
import teamsRouter from "./teams.routes";

const router = Router();

router.use("/tables", tablesRouter);
router.use("/teams", teamsRouter);

export default router;
