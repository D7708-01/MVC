const { error } = require("node:console");
const empModel=require("../model/empModel");
const displayEmp=async(req,res)=>{
    try{
        const result=await empModel.find()
        res.render("home",{result})

    }catch(err){
        console.log(err)
        res.status(500).send("some things went wrong");
    }
}
const addEmp=async(req,res)=>{
    try{
        const {name,salary,dept}=req.body
        await empModel.create({name,salary,dept})
        res.redirect("/")
    }catch(err){
        console.log(err);
    }
}
const addForm=async(req,res)=>{
    res.render("addForm")
}
module.exports={displayEmp,addEmp,addForm}

