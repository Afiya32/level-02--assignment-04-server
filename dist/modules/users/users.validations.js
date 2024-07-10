"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
// validation
const zod_1 = require("zod");
const userSignupSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name is required"),
    email: zod_1.z.string().email("Invalid email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long"),
    phone: zod_1.z.string().min(10, "Phone number must be at least 10 digits"),
});
const userLoginSchema = zod_1.z.object({
    email: zod_1.z.string().email("Invalid email format"),
    password: zod_1.z.string().min(6, "Password must be at least 6 characters long")
});
exports.userValidation = {
    userSignupSchema,
    userLoginSchema
};
