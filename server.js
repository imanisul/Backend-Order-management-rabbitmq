require("dotenv").config();

const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");

const {startConsumer} = require('./src/services/consumer.js')

const {
    connectRabbitMQ
} = require('./src/config/rabbitmq.js');

const PORT = process.env.PORT;


connectDB();



connectRabbitMQ();



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    
})