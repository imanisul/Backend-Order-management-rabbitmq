const Order = require('../models/order.js');

const {sendOrderMessage} = require('../services/producer.js');
 


//create order

const createOrder = async (req, res) => {
    try{
        const order = await Order.create(req.body);
        const savedOrder = await order.save();
        await sendOrderMessage(savedOrder);
        res.status(201).json(savedOrder);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

// get all orders 

const getAllOrders = async (req, res) => {
    try{
        const orders = await Order.find();
        res.status(200).json(orders);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

//get order by id 

const getOrderById = async (req, res) => {
    try{
        const order = await Order.findById(req.params.id);

        if(!order){
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json(order);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}


//update order 

const updateOrder = async (req, res) => {
    try{
        const order = await Order.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        );

        if(!order){
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json(order);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

// Delete Order

const deleteOrder = async (req, res) => {
    try{
        const order = await Order.findByIdAndDelete(req.params.id);

        if(!order){
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json({
            message: "Order deleted successfully"
        });
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrder,
    deleteOrder    
};