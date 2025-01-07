// app
import express, { Application, Request, Response } from "express";
import cors from "cors";
import productRouter from "./modules/products/products.routes";
import errorHandler from "./middlewares/error.middleware";
import notFoundHandler from "./middlewares/notFound.middleware";
import UserRouter from "./modules/users/users.routes";
import cartRouter from "./modules/carts/carts.rotues";
import categoryRouter from "./modules/category/categories.routes";
import duaRouter from "./modules/dua/duas.routes";
import subcategoryRouter from "./modules/subcategory/subcategories.routes";
const app: Application = express();

app.use(cors());
app.use(express.json()); // Body parser middleware for JSON

// Routes
app.use('/api/users', UserRouter);
app.use('/api/products', productRouter);
app.use('/api/carts', cartRouter);
app.use("/api/categories", categoryRouter);
app.use("/api/subcategories", subcategoryRouter);
app.use("/api/duas", duaRouter);

// Error Handler Middleware
app.use(notFoundHandler); // Handle 404 Not Found errors
app.use(errorHandler); // General error handler

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the mechanical keyboard server");
});


export default app;
