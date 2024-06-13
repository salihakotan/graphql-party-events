import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
    title:{
        type:String,
        isRequired:true,
    },
    desc:String,
    date:String,
    from:String,
    to:String,
    user:{
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    location:{
        type:Schema.Types.ObjectId,
        ref:"Location"
    },
    participants:[{
        type:Schema.Types.ObjectId,
        ref:"Participant"
    }]

})

export default mongoose.model("Event",EventSchema)