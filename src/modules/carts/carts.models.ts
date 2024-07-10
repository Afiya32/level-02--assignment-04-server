// cart model
import { Schema, model } from 'mongoose';
import { ICart } from './carts.interface';


const cartSchema = new Schema<ICart>({
    productId: { type: String, required: true },
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    buyerName: { type: String, required: true },
    buyerEmail: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
    productImage: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true }
  }, { timestamps: true });
  
  export const Cart = model<ICart>('Cart', cartSchema);