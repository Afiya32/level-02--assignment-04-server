"use strict";
// cart controller
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const carts_services_1 = require("./carts.services");
const carts_validation_1 = require("./carts.validation");
// Create cart item
const createCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedCartItem = carts_validation_1.cartSchema.parse(req.body);
        const cartItem = yield carts_services_1.cartServices.createCartItemService(parsedCartItem);
        res.status(201).json(cartItem);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'Unknown error occurred' });
        }
    }
});
// Get all cart items for a specific user
const getCartItemsByUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = req.params;
        const cartItems = yield carts_services_1.cartServices.getCartItemsByUserService(email);
        res.json(cartItems);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});
// Update cart item
const updateCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const parsedCartItem = carts_validation_1.cartSchema.parse(req.body);
        const updatedCartItem = yield carts_services_1.cartServices.updateCartItemService(id, parsedCartItem);
        if (!updatedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json(updatedCartItem);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: 'Unknown error occurred' });
        }
    }
});
// Delete cart item
const deleteCartItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCartItem = yield carts_services_1.cartServices.deleteCartItemService(id);
        if (!deletedCartItem) {
            return res.status(404).json({ message: 'Cart item not found' });
        }
        res.json({ message: 'Cart item deleted' });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
        else {
            res.status(500).json({ message: 'Unknown error occurred' });
        }
    }
});
exports.cartController = {
    createCartItem,
    getCartItemsByUser,
    updateCartItem,
    deleteCartItem,
};
