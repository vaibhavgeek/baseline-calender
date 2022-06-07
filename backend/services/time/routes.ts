import express from "express";

import * as controller from "./controller";

export const timeRouter = express.Router();

/** POST /api/time */
timeRouter.route("/").post(controller.create);

/** PUT /api/time */
timeRouter.route("/").put(controller.update);

/** GET /api/time */
timeRouter.route("/:userId").get(controller.get);
