"use strict";
//users services
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
exports.UserServices = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const users_models_1 = require("./users.models");
const createUserDB = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcryptjs_1.default.genSalt(10);
        user.password = yield bcryptjs_1.default.hash(user.password, salt);
        const result = yield users_models_1.UsersModel.create(user);
        return result;
    }
    catch (error) {
        console.error('Error creating user in DB:', error);
        throw error;
    }
});
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_models_1.UsersModel.findOne({ email });
        return user;
    }
    catch (error) {
        console.error('Error finding user by email:', error);
        throw error;
    }
});
const getAllUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    return users_models_1.UsersModel.find();
});
exports.UserServices = {
    createUserDB,
    findUserByEmail,
    getAllUsersService
};
