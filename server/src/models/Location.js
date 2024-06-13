import mongoose, { Schema } from "mongoose";


const LocationSchema = new Schema({
    name:{
        type:String,
        isRequired:true
    },
    desc:String,
    let:Float32Array,
    lng:Float32Array,
}
)

export default mongoose.model("Location",LocationSchema)