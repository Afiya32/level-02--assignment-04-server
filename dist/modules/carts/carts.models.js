"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
// cart model
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    buyerName: { type: String, required: true },
    buyerEmail: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    productImage: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true }
}, { timestamps: true });
exports.Cart = (0, mongoose_1.model)('Cart', cartSchema);
