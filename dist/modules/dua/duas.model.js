"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dua = void 0;
const mongoose_1 = require("mongoose");
const duaSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // Use Types.ObjectId instead of Schema.Types.ObjectId
}, { timestamps: true });
exports.Dua = (0, mongoose_1.model)("Dua", duaSchema);
