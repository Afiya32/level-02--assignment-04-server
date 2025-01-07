"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = __importDefault(require("./modules/products/products.routes"));
const error_middleware_1 = __importDefault(require("./middlewares/error.middleware"));
const notFound_middleware_1 = __importDefault(require("./middlewares/notFound.middleware"));
const users_routes_1 = __importDefault(require("./modules/users/users.routes"));
const carts_rotues_1 = __importDefault(require("./modules/carts/carts.rotues"));
const categories_routes_1 = __importDefault(require("./modules/category/categories.routes"));
const duas_routes_1 = __importDefault(require("./modules/dua/duas.routes"));
const subcategories_routes_1 = __importDefault(require("./modules/subcategory/subcategories.routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json()); // Body parser middleware for JSON
// Routes
app.use('/api/users', users_routes_1.default);
app.use('/api/products', products_routes_1.default);
app.use('/api/carts', carts_rotues_1.default);
app.use("/api/categories", categories_routes_1.default);
app.use("/api/subcategories", subcategories_routes_1.default);
app.use("/api/duas", duas_routes_1.default);
// Error Handler Middleware
app.use(notFound_middleware_1.default); // Handle 404 Not Found errors
app.use(error_middleware_1.default); // General error handler
app.get("/", (req, res) => {
    res.send("Welcome to the mechanical keyboard server");
});
exports.default = app;
