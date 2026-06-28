require("dotenv").config();

const app = require("./src/app.js");
const connectDB = require("./src/config/db.js");

const PORT = process.env.PORT;


connectDB();

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    
})