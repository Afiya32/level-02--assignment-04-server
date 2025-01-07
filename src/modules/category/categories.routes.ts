import { Router } from "express";
import { categoryController } from "./categories.controller";

const categoryRouter = Router();

categoryRouter.post("/", categoryController.createCategory);
categoryRouter.get("/", categoryController.getAllCategories);
categoryRouter.delete("/:id", categoryController.deleteCategory);

export default categoryRouter;
