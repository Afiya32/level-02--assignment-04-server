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
exports.productServices = void 0;
const products_model_1 = require("./products.model");
// Create product
const createProductService = (productData) => __awaiter(void 0, void 0, void 0, function* () {
    const product = new products_model_1.Product(productData);
    yield product.save();
    return product;
});
// Get all products
const getAllProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return products_model_1.Product.find();
});
// Get product by ID
const getProductByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return products_model_1.Product.findById(id);
});
// Update product
const updateProductService = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    return products_model_1.Product.findByIdAndUpdate(id, updates, { new: true });
});
// Delete product
const deleteProductService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return products_model_1.Product.findByIdAndDelete(id);
});
exports.productServices = {
    createProductService,
    getAllProductsService,
    getProductByIdService,
    updateProductService,
    deleteProductService,
};
