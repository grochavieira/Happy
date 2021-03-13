import { Router } from "express";
import upload from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/:id", OrphanagesController.show);

routes.post("/users", UserController.create);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users/login", UserController.login);

export default routes;
