import mongoose, { model } from "mongoose";

const UserSchema = new mongoose.Schema({
    name : String, 
    email : String,
    age : Number,
    job: String,
})

const UserModel = mongoose.model("Users" , UserSchema)


export default  UserModel ;