const mongoose = require("mongoose");
const { default: userSchema } = require("../Schemas/UserSchema");

mongoose.connect("mongodb://localhost:27017/LinkUp");

const UserModel = mongoose.model("Users", userSchema)

export default UserModel;