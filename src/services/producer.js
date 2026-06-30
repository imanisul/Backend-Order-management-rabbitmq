const {getChannel} = require("../config/rabbitmq.js");


const sendOrderMessage = async (order) => {
    const channel = getChannel();

    channel.publish(
        'orderExchange',
        '',
        Buffer.from(JSON.stringify(order))

    );

    console.log("Order Published");
    
};

module.exports = {
    sendOrderMessage
};