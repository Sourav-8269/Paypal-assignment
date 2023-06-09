const express=require("express");

require("dotenv").config();

var cors = require('cors')

const connection=require("./config/db")

const app=express();

app.use(express.json());
 
app.use(cors())

const {tasksRouter}=require("./routes/tasks.route")

app.get("/",(req,res)=>{
    res.send("Welcome to Tasks Planner App");
})

app.use("/tasks",tasksRouter);

app.listen(process.env.port,async ()=>{
    try{
        await connection;
        console.log("Connected to DB")
    }catch{
        console.log("Something went wrong");
    }
})