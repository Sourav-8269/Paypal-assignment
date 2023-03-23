const express=require("express");

const tasksRouter=express.Router();

tasksRouter.use(express.json());

// const {validator}=require("../middlewares/validator.middleware")

// const {record}=require("../middlewares/record.middleware")

const {TaskModel}=require("../models/tasks.model")

// tasksRouter.get("/",async (req,res)=>{
//     let sort=req.query.sort;
//     let genre=req.query.genre;
//     // console.log(sort)
//     // console.log(genre)
//     try{
//         if(sort!=undefined&&genre!=undefined){
//             if(sort=="price_low"){
//                 const book=await BookModel.find({genre:genre}).sort({price:1});
//                 res.send(book);
//             }else if(sort=="price_high"){
//                 const book=await BookModel.find({genre:genre}).sort({price:-1});
//                 res.send(book);
//             }else{
//                 const book=await BookModel.find({genre:genre});
//                 res.send(book);
//             }
//         }else if(sort!=undefined){
//             if(sort=="price_low"){
//                 const book=await BookModel.find().sort({price:1});
//                 res.send(book);
//             }else if(sort=="price_high"){
//                 const book=await BookModel.find().sort({price:-1});
//                 res.send(book);
//             }else{
//                 const book=await BookModel.find();
//                 res.send(book);
//             }
//         }else if(genre!=undefined){
//             const book=await BookModel.find({genre:genre});
//             res.send(book);
//         }else{
//             const book=await BookModel.find();
//             res.send(book);
//         }
//     }catch(err){
//         res.send("Something Went Wrong"+err);
        
//     }
// })

tasksRouter.get("/",async (req,res)=>{
    try{
        const tasks=await TaskModel.find();
        res.send(tasks); 
    }catch{
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

tasksRouter.get("/search", async (req, res) => {
    
    console.log(req.query.q)
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