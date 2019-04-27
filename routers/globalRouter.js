import express from "express";
import routes from "../routes";
import { home, search, upload } from "../controller/videoController";
import { join } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, join);
globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);

export default globalRouter;