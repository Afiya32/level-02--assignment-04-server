"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// cart router
const express_1 = require("express");
const carts_controllers_1 = require("./carts.controllers");
const cartRouter = (0, express_1.Router)();
cartRouter.post('/', carts_controllers_1.cartController.createCartItem);
cartRouter.get('/:email', carts_controllers_1.cartController.getCartItemsByUser);
cartRouter.put('/:id', carts_controllers_1.cartController.updateCartItem);
cartRouter.delete('/:id', carts_controllers_1.cartController.deleteCartItem);
exports.default = cartRouter;
