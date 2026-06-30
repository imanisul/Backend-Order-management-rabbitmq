
const amqp = require('amqplib');

let channel ;

const connectRabbitMQ = async () => {
  try {
    const connection = await amqp.connect('amqp://localhost');
    channel = await connection.createChannel();
    await channel.assertExchange(
      'orderExchange',
      'fanout', 
      {
        durable : true
      }
    );
    console.log('Connected to RabbitMQ');
  } catch (error) {
    console.error('Failed to connect to RabbitMQ:', error);
  }
};


const getChannel = () => channel;

module.exports = {
  connectRabbitMQ,
  getChannel,
};