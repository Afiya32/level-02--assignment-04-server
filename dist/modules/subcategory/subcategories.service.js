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
exports.subcategoryServices = void 0;
const subcategories_model_1 = require("./subcategories.model");
const createSubcategoryService = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const subcategory = new subcategories_model_1.Subcategory(data);
    return subcategory.save();
});
const getSubcategoriesByCategoryService = (categoryId) => __awaiter(void 0, void 0, void 0, function* () {
    return subcategories_model_1.Subcategory.find({ category: categoryId });
});
const updateSubcategoryService = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    return subcategories_model_1.Subcategory.findByIdAndUpdate(id, updates, { new: true });
});
const deleteSubcategoryService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return subcategories_model_1.Subcategory.findByIdAndDelete(id);
});
exports.subcategoryServices = {
    createSubcategoryService,
    getSubcategoriesByCategoryService,
    updateSubcategoryService,
    deleteSubcategoryService,
};
