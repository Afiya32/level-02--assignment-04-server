// cart router
import { Router } from "express";
import { cartController } from "./carts.controllers";


const cartRouter = Router();

cartRouter.post('/', cartController.createCartItem);
cartRouter.get('/:email', cartController.getCartItemsByUser);
cartRouter.put('/:id', cartController.updateCartItem);
cartRouter.delete('/:id', cartController.deleteCartItem);

export default cartRouter;