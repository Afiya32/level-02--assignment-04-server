"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const duas_controller_1 = require("./duas.controller");
const duaRouter = (0, express_1.Router)();
duaRouter.post("/", duas_controller_1.duaController.createDua);
duaRouter.get("/", duas_controller_1.duaController.getAllDuas);
exports.default = duaRouter;
