// model
import { Schema, model } from 'mongoose';
import { IProduct } from './products.interface';


const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    quantity: { type: Number, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
  }, { timestamps: true });
  
  export const Product = model<IProduct>('Product', productSchema);