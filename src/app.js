const express = require("express");
const cors = require("cors");

const orderRoute = require("./routes/orderRoute.js");


const app = express();


app.use(cors());
app.use(express.json());


app.use("/api/v1", orderRoute);


app.get("/", (req, res) => {
    res.json({
        message: "Welcome to Order Management Service"
    })
});


module.exports = app;