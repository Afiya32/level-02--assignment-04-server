"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_controller_1 = require("./categories.controller");
const categoryRouter = (0, express_1.Router)();
categoryRouter.post("/", categories_controller_1.categoryController.createCategory);
categoryRouter.get("/", categories_controller_1.categoryController.getAllCategories);
categoryRouter.delete("/:id", categories_controller_1.categoryController.deleteCategory);
exports.default = categoryRouter;
