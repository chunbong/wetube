import express from "express";
import routes from "../routes";
import { video_home_Controller, video_search_Controller } from "../Controllers/videoController";
import { user_join_Controller, user_login_Controller, user_logout_Controller } from "../Controllers/userController";

const globalRouter = express.Router();

globalRouter.get(routes.home, video_home_Controller);
globalRouter.get(routes.search, video_search_Controller);
globalRouter.get(routes.join, user_join_Controller);
globalRouter.get(routes.login, user_login_Controller);
globalRouter.get(routes.logout, user_logout_Controller);

export default globalRouter;