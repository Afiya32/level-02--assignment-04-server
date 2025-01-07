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
exports.duaController = void 0;
const duas_service_1 = require("./duas.service");
const duas_validation_1 = require("./duas.validation");
const createDua = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedDua = duas_validation_1.duaSchema.parse(req.body);
        const dua = yield duas_service_1.duaServices.createDuaService(parsedDua);
        res.status(201).json(dua);
    }
    catch (error) {
        res.status(400).json({ message: "Error creating dua" });
    }
});
const getAllDuas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const duas = yield duas_service_1.duaServices.getAllDuasService();
        res.json(duas);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching duas" });
    }
});
exports.duaController = { createDua, getAllDuas };
