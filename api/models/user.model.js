import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://i.pngimg.me/thumb/f/720/a8bd1f9386.jpg",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("Data", userSchema);
export default User;
