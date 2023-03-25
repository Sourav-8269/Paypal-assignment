const express=require("express");

const tasksRouter=express.Router();

tasksRouter.use(express.json());

const {TaskModel}=require("../models/tasks.model")

tasksRouter.get("/",async (req,res)=>{
    try{
        const tasks=await TaskModel.find();
        res.send(tasks); 
    }catch{
        res.send("Something Went Wrong"+err);
    }
})

tasksRouter.get("/search", async (req, res) => {
    
    // console.log(req.query.q)
    try {
        let data=await TaskModel.find({
            "$or":[
                {task:{$regex:req.query.q,$options:"i"}},
                {assignee:{$regex:req.query.q,$options:"i"}}
            ]
          })
          res.send(data)
    } catch (error) {
        console.log(error)
    }
})

tasksRouter.get("/single/:id",async (req,res)=>{
    const id=req.params.id;
    try{
        if(id){
            const tasks=await TaskModel.findById({_id:id});
            res.send(tasks); 
        }else{
            const tasks=await TaskModel.find();
            res.send(tasks); 
        }
    }catch(err){
        res.send("Something Went Wrong"+err);
    }
})

tasksRouter.post("/add",async (req,res)=>{
    const data=req.body;
    try{
        const tasks=new TaskModel(data);
        await tasks.save();
        res.send("Task has been added");
    }catch(err){
        res.send("Something Went Wrong"+err);
        
    }
})

tasksRouter.patch("/edit/:id",async (req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    try{
        // console.log(id)
        await TaskModel.findByIdAndUpdate({_id:id},payload)
        res.send(`One Task data has been updated with id: ${id}`);
    }catch(err){
        res.send("Something Went Wrong"+err);
        
    }
})

tasksRouter.put("/replace/:id",async (req,res)=>{
    const payload=req.body;
    const id=req.params.id;
    try{
        // console.log(id)
        await TaskModel.findOneAndReplace({_id:id},payload)
        res.send(`One Task data has been replaced with id: ${id}`);
    }catch(err){
        res.send("Something Went Wrong"+err);
        
    }
})


tasksRouter.delete("/delete/:id",async (req,res)=>{
    const id=req.params.id;
    try{
        await TaskModel.findByIdAndDelete({_id:id})
        res.send(`One Task data has been deleted with id: ${id}`);
    }catch(err){
        res.send("Something Went Wrong"+err);
        
    }
})

module.exports={tasksRouter};