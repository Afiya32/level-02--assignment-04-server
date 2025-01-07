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
exports.subcategoryController = void 0;
const subcategories_service_1 = require("./subcategories.service");
const subcategories_validation_1 = require("./subcategories.validation");
const createSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const parsedData = subcategories_validation_1.subcategorySchema.parse(req.body);
        const subcategory = yield subcategories_service_1.subcategoryServices.createSubcategoryService(parsedData);
        res.status(201).json(subcategory);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const getSubcategoriesByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { categoryId } = req.params;
        const subcategories = yield subcategories_service_1.subcategoryServices.getSubcategoriesByCategoryService(categoryId);
        res.json(subcategories);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
const updateSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedSubcategory = yield subcategories_service_1.subcategoryServices.updateSubcategoryService(id, updates);
        if (!updatedSubcategory) {
            res.status(404).json({ message: "Subcategory not found" });
        }
        else {
            res.json(updatedSubcategory);
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
});
const deleteSubcategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedSubcategory = yield subcategories_service_1.subcategoryServices.deleteSubcategoryService(id);
        if (!deletedSubcategory) {
            res.status(404).json({ message: "Subcategory not found" });
        }
        else {
            res.json({ message: "Subcategory deleted" });
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.subcategoryController = {
    createSubcategory,
    getSubcategoriesByCategory,
    updateSubcategory,
    deleteSubcategory,
};
