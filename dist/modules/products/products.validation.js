"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
//product validation
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string(),
    brand: zod_1.z.string(),
    quantity: zod_1.z.number().nonnegative(),
    price: zod_1.z.number().nonnegative(),
    rating: zod_1.z.number().min(0).max(5),
    description: zod_1.z.string(),
    image: zod_1.z.string().url(),
});
