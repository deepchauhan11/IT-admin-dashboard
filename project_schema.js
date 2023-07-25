const base = require("./mongo")
const mongoose=require("mongoose")

const projectSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    progress:{
        type:Number,
        default: 0
    },
    amount:{
        type:Number,
        default: 0
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
})


const project = mongoose.model("project",projectSchema)

module.exports=project
