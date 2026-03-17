const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/astral-ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');
const customersRouter = require('./routes/customers');

app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/customers', customersRouter);

app.get('/', (req, res) => {
    res.send('Astral E-commerce API');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});