import "dotenv/config";

import express from "express";
import cors from "cors";

import routes from "./routes";
import server from "./config/server";

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(server.port, server.ip, () => {
  console.log("🚀 Server started on port " + server.port);
});
