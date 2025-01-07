// cart controller

import { Request, Response } from "express";
import { cartServices } from "./carts.services";
import { cartSchema } from "./carts.validation";


// Create cart item
const createCartItem = async (req: Request, res: Response) => {
    try {
      const parsedCartItem = cartSchema.parse(req.body);
      const cartItem  = await cartServices.createCartItemService(parsedCartItem);
      res.status(201).json(cartItem);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  // Get all cart items for a specific user
  const getCartItemsByUser = async (req: Request, res: Response) => {
    try {
      const { email } = req.params;
      const cartItems = await cartServices.getCartItemsByUserService(email);
      res.json(cartItems);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  // Update cart item
  const updateCartItem = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const parsedCartItem = cartSchema.parse(req.body);
      const updatedCartItem = await cartServices.updateCartItemService(id, parsedCartItem);
      if (!updatedCartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      res.json(updatedCartItem);
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(400).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  // Delete cart item
  const deleteCartItem = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const deletedCartItem = await cartServices.deleteCartItemService(id);
      if (!deletedCartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
      }
      res.json({ message: 'Cart item deleted' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Unknown error occurred' });
      }
    }
  };
  
  export const cartController = {
    createCartItem,
    getCartItemsByUser,
    updateCartItem,
    deleteCartItem,
  };