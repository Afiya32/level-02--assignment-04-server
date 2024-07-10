"use strict";
// cart service
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
exports.cartServices = void 0;
const products_model_1 = require("../products/products.model");
const carts_models_1 = require("./carts.models");
// Create cart item
const createCartItemService = (cartData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = yield products_model_1.Product.findById(cartData.productId);
    if (!product || product.quantity < cartData.quantity) {
        throw new Error('Insufficient product quantity');
    }
    const cartItem = new carts_models_1.Cart(cartData);
    yield cartItem.save();
    // Update product quantity
    product.quantity -= cartData.quantity;
    yield product.save();
    return cartItem;
});
// Get all cart items for a specific user
const getCartItemsByUserService = (buyerEmail) => __awaiter(void 0, void 0, void 0, function* () {
    return carts_models_1.Cart.find({ buyerEmail });
});
// Update cart item
const updateCartItemService = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    const cartItem = yield carts_models_1.Cart.findById(id);
    if (!cartItem) {
        throw new Error('Cart item not found');
    }
    const product = yield products_model_1.Product.findById(cartItem.productId);
    if (!product) {
        throw new Error('Product not found');
    }
    // Adjust product quantity based on updated cart item quantity
    const quantityDifference = updates.quantity - cartItem.quantity;
    if (product.quantity < quantityDifference) {
        throw new Error('Insufficient product quantity');
    }
    product.quantity -= quantityDifference;
    yield product.save();
    Object.assign(cartItem, updates);
    yield cartItem.save();
    return cartItem;
});
// Delete cart item
const deleteCartItemService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const cartItem = yield carts_models_1.Cart.findByIdAndDelete(id);
    if (!cartItem) {
        throw new Error('Cart item not found');
    }
    const product = yield products_model_1.Product.findById(cartItem.productId);
    if (product) {
        product.quantity += cartItem.quantity;
        yield product.save();
    }
    return cartItem;
});
exports.cartServices = {
    createCartItemService,
    getCartItemsByUserService,
    updateCartItemService,
    deleteCartItemService,
};
