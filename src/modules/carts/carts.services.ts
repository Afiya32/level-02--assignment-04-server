// cart service

import { Product } from "../products/products.model";
import { ICart } from "./carts.interface";
import { Cart } from "./carts.models";

// Create cart item
const createCartItemService = async (cartData: ICart) => {
    const product = await Product.findById(cartData.productId);
  
    if (!product || product.quantity < cartData.quantity) {
      throw new Error('Insufficient product quantity');
    }
  
    const cartItem = new Cart(cartData);
    await cartItem.save();
  
    // Update product quantity
    product.quantity -= cartData.quantity;
    await product.save();
  
    return cartItem;
  };
  
  // Get all cart items for a specific user
  const getCartItemsByUserService = async (buyerEmail: string) => {
    return Cart.find({ buyerEmail });
  };
  
  // Update cart item
  const updateCartItemService = async (id: string, updates: Partial<ICart>) => {
    const cartItem = await Cart.findById(id);
  
    if (!cartItem) {
      throw new Error('Cart item not found');
    }
  
    const product = await Product.findById(cartItem.productId);
  
    if (!product) {
      throw new Error('Product not found');
    }
  
    // Adjust product quantity based on updated cart item quantity
    const quantityDifference = updates.quantity! - cartItem.quantity;
    if (product.quantity < quantityDifference) {
      throw new Error('Insufficient product quantity');
    }
  
    product.quantity -= quantityDifference;
    await product.save();
  
    Object.assign(cartItem, updates);
    await cartItem.save();
  
    return cartItem;
  };
  
  // Delete cart item
  const deleteCartItemService = async (id: string) => {
    const cartItem = await Cart.findByIdAndDelete(id);
  
    if (!cartItem) {
      throw new Error('Cart item not found');
    }
  
    const product = await Product.findById(cartItem.productId);
  
    if (product) {
      product.quantity += cartItem.quantity;
      await product.save();
    }
  
    return cartItem;
  };
  
  export const cartServices = {
    createCartItemService,
    getCartItemsByUserService,
    updateCartItemService,
    deleteCartItemService,
  };