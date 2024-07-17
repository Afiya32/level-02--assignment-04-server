Mechanical Keyboard Shop - Backend
This repository contains the backend code for the Mechanical Keyboard Shop, an e-commerce website exclusively for mechanical keyboards. The backend is built using Node.js, Express, MongoDB, Mongoose, and TypeScript, with Zod for input validation.

Features
Product Management: CRUD operations for products.
User Management: Authentication and authorization.
Cart Management: Add, update, and remove items in the cart.
Order Management: Checkout and order processing.
Stripe Integration (Optional): Secure payment processing.
Technology Stack
Node.js: Server-side JavaScript runtime.
Express: Web framework for Node.js.
MongoDB: NoSQL database.
Mongoose: ODM for MongoDB.
TypeScript: Typed superset of JavaScript.
Zod: TypeScript-first schema declaration and validation library.
Prerequisites
Node.js
MongoDB
Getting Started
Clone the repository:

bash
কোড কপি করুন
git clone https://github.com/yourusername/mechanical-keyboard-shop-backend.git
cd mechanical-keyboard-shop-backend
Install dependencies:

bash
কোড কপি করুন
npm install
Environment Variables:

Create a .env file in the root directory and add the following variables:

env
কোড কপি করুন
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key (optional)
Run the server:

bash
কোড কপি করুন
npm run dev
Folder Structure
src/
controllers/ - Request handlers for various routes.
models/ - Mongoose models.
routes/ - Express route definitions.
middleware/ - Custom middleware functions.
utils/ - Utility functions.
validation/ - Zod schemas for validation.
API Endpoints
Products:

GET /api/products - Get all products.
GET /api/products/:id - Get a single product by ID.
POST /api/products - Create a new product (Admin only).
PUT /api/products/:id - Update a product by ID (Admin only).
DELETE /api/products/:id - Delete a product by ID (Admin only).
Users:

POST /api/users/signup - User registration.
POST /api/users/login - User login.
GET /api/users/profile - Get user profile (Protected).
Cart:

GET /api/cart - Get cart items (Protected).
POST /api/cart - Add item to cart (Protected).
PUT /api/cart/:id - Update cart item (Protected).
DELETE /api/cart/:id - Remove item from cart (Protected).
Orders:

POST /api/orders - Create a new order (Protected).
License
This project is licensed under the MIT License. See the LICENSE file for details.


live-link:https://server-ten-zeta.vercel.app/
