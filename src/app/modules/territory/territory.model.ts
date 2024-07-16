import mongoose from "mongoose";

const territoriesSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Territory name is required"]
    },
    areaId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Areas"
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
const Territories= mongoose.models.Territories || mongoose.model("Territories", territoriesSchema);

export default Territories