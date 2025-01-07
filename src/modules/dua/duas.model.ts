import { Schema, model,  } from "mongoose";
import { IDua } from "./duas.interface";

const duaSchema = new Schema<IDua>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true }, // Use Types.ObjectId instead of Schema.Types.ObjectId
  },
  { timestamps: true }
);

export const Dua = model<IDua>("Dua", duaSchema);
