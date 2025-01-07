"use strict";
// models
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = exports.userSignupSchema = void 0;
const mongoose_1 = require("mongoose");
const zod_1 = require("zod");
const usersSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String },
    image: { type: String },
});
exports.userSignupSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
    phone: zod_1.z.string().min(10, "Phone number must be at least 10 digits"),
});
exports.UsersModel = (0, mongoose_1.model)('User', usersSchema);
