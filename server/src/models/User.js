import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        isRequired:true
    },
    email:{
        type:String,
        isRequired:true
    },
    events:[{
        type:Schema.Types.ObjectId,
        ref:"Event"
    }]
})

export default mongoose.model("User",UserSchema)