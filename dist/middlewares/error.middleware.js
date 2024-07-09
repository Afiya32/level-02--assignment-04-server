"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const errorHandler = (err, req, res) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || "Internal Server Error";
    let errorMessages = err.errorMessages || [];
    if (err instanceof zod_1.ZodError) {
        statusCode = 400;
        message = "Validation Error";
        errorMessages = err.errors.map((error) => ({
            path: error.path.join('.'),
            message: error.message,
        }));
    }
    else if (err.name === 'CastError') {
        statusCode = 400;
        message = "Cast Error";
    }
    else if (err.code && err.code === 11000) {
        statusCode = 400;
        message = "Duplicate Entry";
        errorMessages = [{
                path: "",
                message: err.message,
            }];
    }
    res.status(statusCode).json({
        success: false,
        message,
        errorMessages,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
};
exports.default = errorHandler;
