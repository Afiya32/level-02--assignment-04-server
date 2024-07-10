import express, { Application, Request, Response } from "express";
import cors from "cors";
import productRouter from "./modules/products/products.routes";
import errorHandler from "./middlewares/error.middleware";
import notFoundHandler from "./middlewares/notFound.middleware";
import UserRouter from "./modules/users/users.routes";
import cartRouter from "./modules/carts/carts.rotues";
const app: Application = express();


app.use(express.json());
app.use(cors());

// routes

app.use('/api/users', UserRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
// Error Handler
app.use(notFoundHandler);
app.use(errorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to mechanical keyboard server ");
});

export default app;
