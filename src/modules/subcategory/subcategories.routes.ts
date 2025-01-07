import { Router } from "express";
import { subcategoryController } from "./subcategories.controller";

const subcategoryRouter = Router();

subcategoryRouter.post("/", subcategoryController.createSubcategory);
subcategoryRouter.get("/:categoryId", subcategoryController.getSubcategoriesByCategory);
subcategoryRouter.put("/:id", subcategoryController.updateSubcategory);
subcategoryRouter.delete("/:id", subcategoryController.deleteSubcategory);

export default subcategoryRouter;
