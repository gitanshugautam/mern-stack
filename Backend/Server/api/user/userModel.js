const mongoose = require("mongoose")

const userSchema = new mongoose.Schema ({
    name:{
        type : String,
        required : true,
        default : ""
    },
    email:{
        type : String,
        required : true,
        unique: true,
    },
    rollno:{
        type : Number,
        required : true,
        unique: true,
    },
    stream:{
        type : String,
        required : true,
        default : ""
    },
    mobile:{
        type : Number,
        required : true,
    },
    password:{
        type : String,
        required : true,
    },
    address:{
        type : String,
        required : true,
    },

    role:{
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    createdAt : {
        type: Date,
        default: Date.now()
    },
    image:{
        type: String,
        default:""
    }
})

const user = mongoose.models.user || mongoose.model("user", userSchema)

module.exports = user
