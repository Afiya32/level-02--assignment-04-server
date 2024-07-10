// models

import { Schema, model } from "mongoose";
import { IUsers } from "./users.interface";


const usersSchema = new Schema<IUsers>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  address: { type: String },
  image: { type: String },
});

export const UsersModel = model<IUsers>('User', usersSchema);