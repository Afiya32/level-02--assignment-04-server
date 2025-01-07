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
exports.categoryController = void 0;
const categories_service_1 = require("./categories.service");
const categories_validation_1 = require("./categories.validation");
const createCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedCategory = categories_validation_1.categorySchema.parse(req.body);
        const category = yield categories_service_1.categoryServices.createCategoryService(parsedCategory);
        res.status(201).json(category);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Unknown error occurred" });
        }
    }
});
const getAllCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const categories = yield categories_service_1.categoryServices.getAllCategoriesService();
        res.json(categories);
    }
    catch (error) {
        res.status(500).json({ message: "Error fetching categories" });
    }
});
const deleteCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCategory = yield categories_service_1.categoryServices.deleteCategoryService(id);
        if (!deletedCategory) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.json({ message: "Category deleted successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting category" });
    }
});
exports.categoryController = {
    createCategory,
    getAllCategories,
    deleteCategory,
};
