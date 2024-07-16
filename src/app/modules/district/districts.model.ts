import mongoose from "mongoose";

const districtsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"District name is required"],
        unique:true,
    },
    inCharges:[{
         type: mongoose.Schema.Types.ObjectId,
         ref:"UsersPermission.userId"
    },]

})

const Districts =
  mongoose.models.Districts || mongoose.model("Districts", districtsSchema);

export default Districts;