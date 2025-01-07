"use strict";
// cart validation
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartSchema = void 0;
const zod_1 = require("zod");
exports.cartSchema = zod_1.z.object({
    productId: zod_1.z.string(),
    productName: zod_1.z.string(),
    price: zod_1.z.number(),
    buyerName: zod_1.z.string(),
    buyerEmail: zod_1.z.string().email(),
    phone: zod_1.z.string(),
    address: zod_1.z.string(),
    productImage: zod_1.z.string().url(),
    quantity: zod_1.z.number(),
    totalPrice: zod_1.z.number()
});
