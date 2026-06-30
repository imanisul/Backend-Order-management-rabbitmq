require("dotenv").config();

const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");

const {startConsumer} = require('./src/services/consumer.js')

const {
    connectRabbitMQ
} = require('./src/config/rabbitmq.js');

const { startInvoiceConsumer } = require("./src/services/invoiceConsumer.js");
const { startInventoryConsumer } = require("./src/services/inventoryConsumer.js");
const { startEmailConsumer } = require("./src/services/emailConsumer.js");

const PORT = process.env.PORT;


connectDB();



connectRabbitMQ().then(() => {
    startInventoryConsumer();

    startEmailConsumer();

    startInvoiceConsumer();

});



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    
})