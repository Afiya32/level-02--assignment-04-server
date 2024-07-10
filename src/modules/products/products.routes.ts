//product routes

import { Router } from "express";
import { productController } from "./products.controller";


const productRouter = Router();

productRouter.post('/',  productController.createProduct);
productRouter.get('/', productController.getAllProducts);
productRouter.get('/:id', productController.getProductById);
productRouter.put('/:id',  productController.updateProduct);
productRouter.delete('/:id', productController.deleteProduct);

export default productRouter;