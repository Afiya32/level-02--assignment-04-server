"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const users_validations_1 = require("./users.validations");
const users_controller_1 = require("./users.controller");
const UserRouter = express_1.default.Router();
// Validate middleware
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ message: "Validation error", errors: error.errors });
        }
        console.error('Validation middleware error:', error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
// User signup route
UserRouter.post('/auth/signup', validate(users_validations_1.userValidation.userSignupSchema), users_controller_1.UserController.createUser);
// User login route
UserRouter.post('/auth/login', validate(users_validations_1.userValidation.userLoginSchema), users_controller_1.UserController.loginUser);
exports.default = UserRouter;
