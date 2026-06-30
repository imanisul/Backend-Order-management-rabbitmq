
const amqp = require('amqplib');

require('dotenv').config()

let channel ;

const connectRabbitMQ = async (retries = 10) => {
  while (retries) {
    try {
      const connection = await amqp.connect(process.env.RABBITMQ_URL);
      channel = await connection.createChannel();
      await channel.assertExchange(
        'orderExchange',
        'fanout', 
        {
          durable : true
        }
      );
      console.log('Connected to RabbitMQ');
      return;
    } catch (error) {
      console.error(`Failed to connect to RabbitMQ, retries left: ${retries - 1}`, error);
      retries -= 1;
      if (retries === 0) {
        process.exit(1);
      }
      await new Promise(res => setTimeout(res, 5000));
    }
  }
};


const getChannel = () => channel;

module.exports = {
  connectRabbitMQ,
  getChannel,
};