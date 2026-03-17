const express = require('express');
const router = express.Router();
const Customer = require('../models/customer');

router.get('/', async (req, res) => {
    const customers = await Customer.find();
    res.json(customers);
});

router.get('/:id', async (req, res) => {
    const customer = await Customer.findById(req.params.id);
    res.json(customer);
});

router.post('/', async (req, res) => {
    const customer = new Customer(req.body);
    await customer.save();
    res.json(customer);
});

router.put('/:id', async (req, res) => {
    const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(customer);
});

router.delete('/:id', async (req, res) => {
    await Customer.findByIdAndRemove(req.params.id);
    res.json({ message: 'Customer deleted' });
});

module.exports = router;