import express from "express";

import * as controller from "./controller";

export const timeRouter = express.Router();

/** POST /api/time */
timeRouter.route("/").post(controller.set);

/** GET /api/time */
timeRouter.route("/:userId").get(controller.all);
