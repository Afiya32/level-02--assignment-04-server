"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subcategory = void 0;
const mongoose_1 = require("mongoose");
const subcategorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true }, // Reference to Category
    description: { type: String },
}, { timestamps: true });
exports.Subcategory = (0, mongoose_1.model)("Subcategory", subcategorySchema);
