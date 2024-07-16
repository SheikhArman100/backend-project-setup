import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { IUser } from "./user.interface";

const usersInfoSchema = new mongoose.Schema<IUser>(
  {
    firstName: {
      type: String,
      required: [true, "User name is required"],
    },
    lastName: {
      type: String,
      required: [true, "User name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    image: {
      diskType: {
        type: String,
        required: [true, "Image disk type is required"],
      },
      path: {
        type: String,
        required: [true, "Image url is required"],
      },
      originalName:{
        type:String,
        required: [true, "Image original name is required"],
      },
      modifiedName:{
        type:String,
        required: [true, "Image modified name is required"],
      }
    },
  },
  {
    timestamps: true,
  }
);

usersInfoSchema.pre("save", async function (next) {
  const hashPassword = await bcrypt.hash(this.password, 10);
  this.password = hashPassword;
  next();
});
const UsersInfo =
  mongoose.models.UsersInfo || mongoose.model("UsersInfo", usersInfoSchema);

export default UsersInfo;
