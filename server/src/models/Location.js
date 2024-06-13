import mongoose, { Schema } from "mongoose";


const LocationSchema = new Schema({
    name:{
        type:String,
        isRequired:true
    },
    desc:String,
    lat:Number,
    lng:Number,
}
)

export default mongoose.model("Location",LocationSchema)