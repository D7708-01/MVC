const mongoose=require('mongoose');
const empSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        min:15000,
        max:50000,
        required:true
    },
    dept:{
        type:String,
        enum:["IT","sales","HR"],
        requied:true
    }
},{timestamp:true});
const empModel=mongoose.model("emp",empSchema)
module.exports=empModel 