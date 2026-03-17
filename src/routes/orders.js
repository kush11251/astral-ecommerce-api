const express = require('express');
const router = express.Router();
const Order = require('../models/order');

router.get('/', async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

router.get('/:id', async (req, res) => {
    const order = await Order.findById(req.params.id);
    res.json(order);
});

router.post('/', async (req, res) => {
    const order = new Order(req.body);
    await order.save();
    res.json(order);
});

router.put('/:id', async (req, res) => {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(order);
});

router.delete('/:id', async (req, res) => {
    await Order.findByIdAndRemove(req.params.id);
    res.json({ message: 'Order deleted' });
});

module.exports = router;