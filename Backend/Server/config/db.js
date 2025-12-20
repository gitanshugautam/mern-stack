const mongoose = require("mongoose")

const connectDb = async()=>{
try{
    mongoose.connect("mongodb://localhost:27017/backend")
    console.log("Database connection successful")
}
catch (err){
    console.log("connection not Successful",err )
    process.exit(1)
}
}
module.export=connectDb