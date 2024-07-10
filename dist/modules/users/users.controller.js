"use strict";
// controller
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_services_1 = require("./users.services");
//Sign up user
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const result = yield users_services_1.UserServices.createUserDB(user);
        res.status(200).json({
            success: true,
            message: 'User registered successfully',
            data: result,
        });
    }
    catch (error) {
        console.error('Error in createUser:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});
// Sign in user
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield users_services_1.UserServices.findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch = yield bcryptjs_1.default.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: user,
        });
    }
    catch (error) {
        console.error('Error in loginUser:', error);
        res.status(500).json({ message: "Internal server error" });
    }
});
exports.UserController = {
    createUser,
    loginUser,
};
