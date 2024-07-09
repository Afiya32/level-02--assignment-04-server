"use strict";
// routes
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("./products.controller");
const productRouter = (0, express_1.Router)();
productRouter.post('/', products_controller_1.productController.createProduct);
productRouter.get('/', products_controller_1.productController.getAllProducts);
productRouter.get('/:id', products_controller_1.productController.getProductById);
productRouter.put('/:id', products_controller_1.productController.updateProduct);
productRouter.delete('/:id', products_controller_1.productController.deleteProduct);
exports.default = productRouter;
