const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
    fullName:{
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
        }
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        select:false
    },
    signupStatus:{
        type:String,
        enum:["active","inactive"],
        default:"inactive"
    },
    voteDone:{
        type:Boolean,
        enum:[true,false],
        default:false
    }
},{timestamps:true});


const userModel = mongoose.model("user",userSchema);

module.exports = {userModel};