"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subcategorySchema = void 0;
const zod_1 = require("zod");
exports.subcategorySchema = zod_1.z.object({
    name: zod_1.z.string().nonempty("Subcategory name is required"),
    category: zod_1.z.string().nonempty("Category is required"), // Expecting ObjectId as a string
    description: zod_1.z.string().optional(),
});
