import { Schema } from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        isrequired:true
    }
})