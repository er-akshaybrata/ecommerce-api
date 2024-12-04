import { Schema, model } from "mongoose"

const userModel = Schema({
    fullname:{ type:String, required:[true,"Full Name is required"]},
    email:{type:String,required:[true,"Email id is required"]},
    password:{type:String,required:[true,"Password is required"]},
    token : String,
    createdAt : {type:Date, default:Date.now},
    updatedAt : {type:Date, default:Date.now}

})

export default model("User",userModel)

