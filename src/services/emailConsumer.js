const {getChannel } = require('../config/rabbitmq.js');

const startEmailConsumer = async () => {
    const channel = getChannel();

    await channel.assertQueue("emailQueue");

    await channel.bindQueue(
        'emailQueue',
        'orderExchange',
        ''
    );

    console.log("Email service Started");

    channel.consume("emailQueue", (msg) => {
        const order = JSON.parse(msg.content.toString());

        console.log("Sending Email");
        console.log(order);

        channel.ack(msg);
        
        
    });
    
};

module.exports = {
    startEmailConsumer
};