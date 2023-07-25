const base = require("./mongo")
const mongoose=require("mongoose")

const employeeSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    salary:{
        type:String,
        required:true
    }
})


const employee = mongoose.model("employee",employeeSchema)

module.exports=employee
