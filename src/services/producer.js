const {getChannel} = require("../config/rabbitmq.js");


const sendOrderMessage = async (order) => {
    const channel = getChannel();

    channel.sendToQueue(
        "orderQueue",
        Buffer.from(JSON.stringify(order))
    );

    console.log("Message send to Queue");
    
};

module.exports = {
    sendOrderMessage
};