const Order = require('../models/order.js');

const createOrder = async (req, res) => {
    try{
        const order = await Order.create(req,body);
        res.status(201).json(order);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    createOrder
};