// services

import bcrypt  from 'bcryptjs';
import { IUsers } from "./users.interface";
import { UsersModel } from './users.models';


const createUserDB = async (user: IUsers) => {
  try {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    const result = await UsersModel.create(user);
    return result;
  } catch (error) {
    console.error('Error creating user in DB:', error);
    throw error;
  }
};

const findUserByEmail = async (email: string) => {
  try {
    const user = await UsersModel.findOne({ email });
    return user;
  } catch (error) {
    console.error('Error finding user by email:', error);
    throw error;
  }
};

export const UserServices = {
  createUserDB,
  findUserByEmail,
};
