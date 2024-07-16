import mongoose from "mongoose";

const areasSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Area name is required"]
    },
    districtId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Districts"
    },
    supervisorId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UsersPermission.userId"
    },
    inCharges:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UsersPermission.userId"
    }]
})
const Areas= mongoose.models.Areas || mongoose.model("Areas", areasSchema);

export default Areas