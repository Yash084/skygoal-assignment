const express = require("express");
const dotenv = require("dotenv");
const connectDB =require("./config/db");
const cors = require('cors');

//dotenv conig
dotenv.config();
 
//mongodb connection
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/user", require("./routes/userRoutes"));


app.get("/",(req,res)=>{
    res.status(200).send({
        message:"Server running",
    });
});




//port
const port = process.env.PORT || 8080;
//listen port
app.listen(port, () => {
  console.log(
    `Server Running in ${process.env.NODE_MODE} Mode on port ${process.env.PORT}`);
});
