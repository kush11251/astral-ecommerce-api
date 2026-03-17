# Astral E-commerce API
Astral E-commerce API is a high-performance API for managing e-commerce platforms.

## Prerequisites
* Node.js (>= 18.0.0)
* npm (>= 8.0.0)

## Installation
1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `node src/index.js` to start the server

## API Endpoints
### Products
* GET /products - Retrieve a list of all products
* GET /products/:id - Retrieve a product by ID
* POST /products - Create a new product
* PUT /products/:id - Update a product
* DELETE /products/:id - Delete a product

### Orders
* GET /orders - Retrieve a list of all orders
* GET /orders/:id - Retrieve an order by ID
* POST /orders - Create a new order
* PUT /orders/:id - Update an order
* DELETE /orders/:id - Delete an order

### Customers
* GET /customers - Retrieve a list of all customers
* GET /customers/:id - Retrieve a customer by ID
* POST /customers - Create a new customer
* PUT /customers/:id - Update a customer
* DELETE /customers/:id - Delete a customer