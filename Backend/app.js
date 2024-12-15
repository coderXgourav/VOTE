const express = require("express");
const app = express();
const cors = require("cors");
const {connectDB} = require("./db/db");
const { userRoute } = require("./routes/user.routes");

app.use(cors());
app.use(express.json());
connectDB();
app.get("/",(req,res)=>{
    res.send("hello world, server is ready to perform..!");
});
app.use("/user",userRoute);

module.exports = app;