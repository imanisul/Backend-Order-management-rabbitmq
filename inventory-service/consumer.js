const amqp  = require('amqplib');

async function startConsumer() {
    const connection = await amqp.connect('amqp://localhost');

    const channel = await connection.createChannel();

    await channel.assertQueue('orderQueue');

    console.log('Inventory server running...');

    channel.consume(
        'orderQueue',(msg) => {
            const order = JSON.parse(
                msg.content.toString()
            );

            console.log("Order Received");
            console.log(order);
            console.log("Checking Inventory....");
            console.log("Inventory Update ");

            channel.ack(msg)
            
            
            
            
        }
    )
 
}

startConsumer();