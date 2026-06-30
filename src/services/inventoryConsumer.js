const {getChannel} = require('../config/rabbitmq.js');


const startInventoryConsumer = async () => {
    const channel = getChannel();

   await channel.assertQueue("inventoryQueue", {
    durable: true,
});

    await channel.bindQueue(
        'inventoryQueue',
        'orderExchange',
        ''
    );


    console.log("Inventory Service stated");

    channel.consume('inventoryQueue', (msg) => {
        const order = JSON.parse(msg.content.toString());

        console.log("Update Inventory");

        console.log(order);

        channel.ack(msg);
        
        
    });
    
};

module.exports = {
    startInventoryConsumer
};