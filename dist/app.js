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
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routes
app.use('/api/users', users_routes_1.default);
app.use('/api/products', products_routes_1.default);
app.use('/api/carts', carts_rotues_1.default);
// Error Handler
app.use(notFound_middleware_1.default);
app.use(error_middleware_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to mechanical keyboard server ");
});
exports.default = app;
