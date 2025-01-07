"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.duaServices = void 0;
const duas_model_1 = require("./duas.model");
const createDuaService = (duaData) => __awaiter(void 0, void 0, void 0, function* () {
    return yield new duas_model_1.Dua(duaData).save();
});
const getAllDuasService = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield duas_model_1.Dua.find({}).populate("category");
});
exports.duaServices = {
    createDuaService,
    getAllDuasService,
};
