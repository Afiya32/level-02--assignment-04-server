//users controller

import { Request, Response } from "express";
import bcrypt from 'bcryptjs';
import { UserServices } from "./users.services";

//Sign up user
const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await UserServices.createUserDB(user);
    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      data: result,
    });
  } catch (error) {
    console.error('Error in createUser:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Sign in user
const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserServices.findUserByEmail(email);
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    res.status(200).json({
      success: true,
      message: 'User logged in successfully',
      data: user,
    });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};
// Get all users
const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserServices.getAllUsersService();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export const UserController = {
  createUser,
  loginUser,
  getAllUsers
};