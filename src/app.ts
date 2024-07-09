import express, { Application, Request, Response } from "express";
import cors from "cors";
import productRouter from "./modules/products/products.routes";
import errorHandler from "./middlewares/error.middleware";
import notFoundHandler from "./middlewares/notFound.middleware";
const app: Application = express();


app.use(express.json());
app.use(cors());

app.use('/api/products', productRouter);
// Error Handler
app.use(notFoundHandler);
app.use(errorHandler);
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to mechanical keyboard server ");
});

export default app;
