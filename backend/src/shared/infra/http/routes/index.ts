import { Router } from "express";

const routes = Router();

routes.use("/", (req, res) => {
  return res.send("Hello my friend");
});

export default routes;
