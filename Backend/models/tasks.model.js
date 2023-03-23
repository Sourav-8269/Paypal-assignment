const mongoose=require("mongoose");

const taskschema=mongoose.Schema({
    task:String,
    bug:String,
    feature:String,
    state:Boolean,
    assignee:String   
})

const TaskModel=mongoose.model("task",taskschema);

module.exports={TaskModel};