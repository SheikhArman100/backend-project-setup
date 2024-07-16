import mongoose from "mongoose";

const usersPermissionSchema = new mongoose.Schema({
  role: {
    type: String,
    enum: [
      "SUPER ADMIN",
      "ADMIN",
      "DISTRICT MANAGER",
      "AREA MANAGER",
      "TERRITORY MANAGER",
      "FIRST OFFICER",
      "MERCHANT",
    ],
    required: [true, "Role is required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsersInfo",
  },
  districtId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Districts",
  },
  areaId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Areas",
  },
  territoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Territories",
  },
  subordinates:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Territories",
  }]
});
const UsersPermission =
  mongoose.models.UsersPermission ||
  mongoose.model("UsersPermission", usersPermissionSchema);

export default UsersPermission;
