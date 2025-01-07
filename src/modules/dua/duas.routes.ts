import { Router } from "express";
import { duaController } from "./duas.controller";

const duaRouter = Router();

duaRouter.post("/", duaController.createDua);
duaRouter.get("/", duaController.getAllDuas);

export default duaRouter;
