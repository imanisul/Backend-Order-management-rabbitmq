const {getChannel } = require('../config/rabbitmq.js');


const startInvoiceConsumer = async () => {

    const channel = getChannel();

    await channel.assertQueue('invoiceQueue');

    await  channel.bindQueue(
        'invoiceQueue',
        'orderExchange',
        ''
    );

    console.log("Invoice Service Started");

    channel.consume('invoiceQueue', (msg) => {
        const order = JSON.parse(msg.content.toString());

        console.log("Creating Invoice");

        console.log(order);

        channel.ack(msg);
        
        
    });
    
};

module.exports = {
    startInvoiceConsumer
}

