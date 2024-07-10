"use strict";
// models
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String },
    image: { type: String },
});
exports.UsersModel = (0, mongoose_1.model)('User', usersSchema);
