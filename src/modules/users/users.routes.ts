//user routes
import express from "express";
import { z, ZodSchema } from 'zod';
import { userValidation } from "./users.validations";
import { UserController } from "./users.controller";

const UserRouter = express.Router();

type ZodSchemaType = ZodSchema<unknown>;

// Validate middleware
const validate = (schema: ZodSchemaType) => (req: express.Request, res: express.Response, next: express.NextFunction) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ message: "Validation error", errors: error.errors });
    }
    console.error('Validation middleware error:', error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// User signup route
UserRouter.post('/auth/signup', validate(userValidation.userSignupSchema), UserController.createUser);

// User login route
UserRouter.post('/auth/login', validate(userValidation.userLoginSchema), UserController.loginUser);
// Get all users route
UserRouter.get('/', UserController.getAllUsers);
export default UserRouter;