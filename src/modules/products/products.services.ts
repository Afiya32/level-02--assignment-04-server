// services
import { IProduct } from "./products.interface";
import { Product } from "./products.model";

// Create product
const createProductService = async (productData: IProduct) => {
  const product = new Product(productData);
  await product.save();
  return product;
};

// Get all products
const getAllProductsService = async () => {
  return Product.find();
};

// Get product by ID
const getProductByIdService = async (id: string) => {
  return Product.findById(id);
};

// Update product
const updateProductService = async (id: string, updates: Partial<IProduct>) => {
  return Product.findByIdAndUpdate(id, updates, { new: true });
};

// Delete product
const deleteProductService = async (id: string) => {
  return Product.findByIdAndDelete(id);
};

export const productServices = {
  createProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
  deleteProductService,
};
