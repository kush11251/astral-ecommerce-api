const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    customer: String,
    products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
    total: Number
});

module.exports = mongoose.model('Order', orderSchema);