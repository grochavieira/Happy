import { Router } from "express";
import upload from "./config/upload";
import OrphanagesController from "./controllers/OrphanagesController";
import UserController from "./controllers/UserController";

const routes = Router();

routes.get("/orphanages", OrphanagesController.index);
routes.get("/orphanages/accepted", OrphanagesController.accepted);
routes.get("/orphanages/:id", OrphanagesController.show);
routes.post("/orphanages", upload.array("images"), OrphanagesController.create);
routes.put("/orphanages", upload.array("images"), OrphanagesController.update);
routes.delete("/orphanages/:id", OrphanagesController.delete);

routes.post("/users", UserController.create);
routes.get("/users", UserController.index);
routes.get("/users/:id", UserController.show);
routes.post("/users/login", UserController.login);

export default routes;
