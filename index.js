import express from "express";
import bodyParser from "body-parser";

import { APP_HOSTNAME, APP_PORT } from "./env.js";
import { LiveVideoRoute } from "./src/routes/_index.route.js";
import { seeder } from "./src/database/seeder.database.js";

const app = express();
app.use(bodyParser.json());

app.use("/api/v1", LiveVideoRoute);

app.get("/seed", async (req, res) => {
  await seeder();

  return res.status(200).json({
    code: 200,
    status: "success",
    message: "Seed data success",
  });
});

app.use((req, res) => {
  res.status(404).json({
    code: 404,
    status: "failed",
    message: "API not found",
  });
});

app.listen(APP_PORT, () => {
  console.log(`Server listening on ${APP_HOSTNAME}:${APP_PORT}`);
});
