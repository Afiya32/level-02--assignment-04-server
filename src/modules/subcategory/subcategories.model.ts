import { Schema, model } from "mongoose";
import { ISubcategory } from "./subcategories.interface";

const subcategorySchema = new Schema<ISubcategory>(
  {
    name: { type: String, required: true },
    category: { type:String, required: true }, // Reference to Category
    description: { type: String },
  },
  { timestamps: true }
);

export const Subcategory = model<ISubcategory>("Subcategory", subcategorySchema);
