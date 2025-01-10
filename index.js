const dotenv = require('dotenv');
const express = require("express");
const connectDB = require("./config/db");
const morgan = require("morgan");
const cors = require("cors");
const invoiceRoute = require("./routes/invoice");
const productRoute = require("./routes/product");
const app = express();
dotenv.config();
connectDB();

app.get("/",(req,res)=>{
    res.send("Hello World");
});

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
app.use('/api/v1/product',productRoute);
app.use('/api/v1/invoice',invoiceRoute);

PORT = 8000
app.listen(8000,(req,res)=>{
    console.log(`Server is running on port ${PORT}`);
})