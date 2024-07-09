import { Request, Response } from "express";
import { productServices } from "./products.services";
import { productSchema } from "./products.validation";

// controller
const createProduct = async (req: Request, res: Response) => {
    try {
      const parsedProduct = productSchema.parse(req.body);
      const product = await productServices.createProductService(parsedProduct);
      res.status(201).json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  const getAllProducts = async (req: Request, res: Response) => {
    try {
      const products = await productServices.getAllProductsService();
      res.json(products);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  const getProductById = async (req: Request, res: Response) => {
    try {
      const product = await productServices.getProductByIdService(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  const updateProduct = async (req: Request, res: Response) => {
    try {
      const parsedProduct = productSchema.parse(req.body);
      const updatedProduct = await productServices.updateProductService(req.params.id, parsedProduct);
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  const deleteProduct = async (req: Request, res: Response) => {
    try {
      const deletedProduct = await productServices.deleteProductService(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json({ message: 'Product deleted' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  export const productController = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct,
  };