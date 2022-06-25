import Mongoose from "mongoose";

const userSchema = Mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, require: true },
  password: { type: String, require: true },
  role: { type: String, default: "user" },
  favourits: [String],
  id: { type: String },
});

export default Mongoose.model("userDetails", userSchema);
