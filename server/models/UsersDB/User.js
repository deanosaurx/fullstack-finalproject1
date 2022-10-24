import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    minlength: [4, "username must be at least 4 characters"],
    maxLength: 15,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password must be at least 6 characters"],
  },
});

const User = mongoose.model("user", userSchema);

export default User;
