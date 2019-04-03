import express from "express";
import routes from "../routes";
import { home, search, editVideo } from "../controller/videoController";
import { join, login, logout, changePassword, editProfile, userDetail } from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);

globalRouter.get(routes.changePassword, changePassword);
globalRouter.get(routes.editProfile, editProfile);
globalRouter.get(routes.editVideo, editVideo);
globalRouter.get(routes.userDetail, userDetail);

export default globalRouter;