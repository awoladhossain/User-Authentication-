import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "Provide a valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
});

const User = mongoose.model("User", userSchema);
export default User;
